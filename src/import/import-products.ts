import { PrismaClient } from "../generated/prisma";
import fs from "fs";
import path from "path";

const prisma = new PrismaClient();

interface ProductData {
  [key: string]: {
    meta: {
      title: { uk: string; en: string };
      description: { uk: string; en: string };
      keywords: { uk: string; en: string };
    };
    url: string;
    category: string | null;
    collection: string | null;
    name: string;
    sub: { uk: string; en: string };
    description: { uk: string; en: string };
    cover: string;
    promo: {
      type: string;
      images: {
        img: string;
        alt: { uk: string; en: string };
      }[];
    }[];
    drawings?: string[];
    models?: {
      title: string;
      file: string;
    }[];
    top: boolean;
    showroom: boolean;
    start_price?: string;
  };
}

async function main() {
  const rawData = fs.readFileSync(
    path.join(__dirname, "products.json"),
    "utf-8"
  );
  const data: ProductData = JSON.parse(rawData);

  for (const [productKey, productData] of Object.entries(data)) {
    console.log(`Processing product: ${productKey}`);

    for (const locale of ["uk", "en"] as const) {
      console.log(`  Processing locale: ${locale}`);

      // Create Meta first
      const meta = await prisma.meta.create({
        data: {
          locale,
          title: productData.meta.title[locale],
          description: productData.meta.description[locale],
          keywords: productData.meta.keywords[locale],
          robots: true,
        },
      });

      // Find category
      const category = productData.category
        ? await prisma.category.findFirst({
            where: { slug: productData.category, locale },
          })
        : null;

      // Find collection
      const collection = productData.collection
        ? await prisma.collection.findFirst({
            where: { slug: productData.collection, locale },
          })
        : null;

      // Create cover image
      const coverImage = await prisma.image.create({
        data: {
          path: productData.cover,
          imageMeta: {
            create: {
              locale,
              title: productData.meta.title[locale],
              alt: productData.meta.title[locale],
            },
          },
        },
      });

      // Prepare product data
      const productInput = {
        locale,
        name: productData.name,
        slug: productData.url,
        type: productData.sub[locale],
        description: productData.description[locale],
        categoryId: category?.id,
        collectionId: collection?.id,
        imageId: coverImage.id,
        metaId: meta.id,
        top: productData.top,
        showroom: productData.showroom,
        price: productData.start_price
          ? parseFloat(productData.start_price.replace(",", ""))
          : null,
      };

      // Create product with relations
      const product = await prisma.product.create({
        data: {
          ...productInput,
          promotion: {
            create: productData.promo.map((promoItem) => ({
              layout: promoItem.type,
              images: {
                create: promoItem.images.map((image) => ({
                  path: image.img,
                  imageMeta: {
                    create: {
                      locale,
                      title: image.alt[locale],
                      alt: image.alt[locale],
                    },
                  },
                })),
              },
            })),
          },
          technical: productData.drawings
            ? {
                create: productData.drawings.map((drawing) => ({
                  path: drawing,
                  imageMeta: {
                    create: {
                      locale,
                      title: productData.meta.title[locale],
                      alt: productData.meta.title[locale],
                    },
                  },
                })),
              }
            : undefined,
          files: productData.models
            ? {
                create: productData.models.map((model) => ({
                  path: model.file,
                })),
              }
            : undefined,
        },
      });

      console.log(`Created product ${product.id} for locale ${locale}`);
    }
  }

  console.log("Import completed successfully!");
}

main()
  .catch((e) => {
    console.error("Import failed:", e);
    process.exit(1);
  })
  .finally(() => prisma.$disconnect());
