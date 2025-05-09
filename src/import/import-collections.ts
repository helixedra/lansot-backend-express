import { PrismaClient } from "../generated/prisma";
import fs from "fs";
import path from "path";

const prisma = new PrismaClient();

interface CollectionData {
  id?: number;
  name: { uk: string; en: string };
  title: { uk: string; en: string };
  meta: {
    title: { uk: string; en: string };
    description: { uk: string; en: string };
    keywords: { uk: string; en: string };
  };
  url: string;
  cover: string;
  linked_products?: string[];
  content: {
    main: {
      text: { uk: string; en: string };
      image: string[];
    };
    sections: {
      layout: string;
      title: { uk: string; en: string };
      text: { uk: string; en: string };
      images: string[];
    }[];
  };
}

async function main() {
  // Read and parse the JSON file
  const rawData = fs.readFileSync(
    path.join(__dirname, "collections.json"),
    "utf-8"
  );
  const collections: CollectionData[] = JSON.parse(rawData);

  // Process each collection
  for (const collectionData of collections) {
    console.log(`Processing collection: ${collectionData.name.en}`);

    // Process both locales
    for (const locale of ["uk", "en"] as const) {
      console.log(`  Processing locale: ${locale}`);

      // Create Meta first
      const meta = await prisma.meta.create({
        data: {
          locale,
          title: collectionData.meta.title[locale],
          description: collectionData.meta.description[locale],
          keywords: collectionData.meta.keywords[locale],
          robots: true,
        },
      });

      // Create cover image with meta
      const coverImage = await prisma.image.create({
        data: {
          path: collectionData.cover,
          imageMeta: {
            create: {
              locale,
              title: collectionData.meta.title[locale],
              alt: collectionData.meta.title[locale],
            },
          },
        },
      });

      // Create the collection
      const collection = await prisma.collection.create({
        data: {
          locale,
          name: collectionData.name[locale],
          slug: collectionData.url, // url becomes slug
          meta: {
            connect: { id: meta.id },
          },
          cover: {
            connect: { id: coverImage.id },
          },
          // Create main content
          contents: {
            create: {
              locale,
              name: collectionData.name[locale],
              slug: collectionData.url,
              title: collectionData.title[locale],
              content: collectionData.content.main.text[locale],
            },
          },
          // Create sections
          section: {
            create: collectionData.content.sections.map((section, index) => ({
              locale,
              name: `${collectionData.name[locale]} section ${index + 1}`,
              slug: `${collectionData.url}-section-${index + 1}`,
              layout: section.layout,
              title: section.title[locale],
              content: section.text[locale],
              images: {
                create: section.images.map((image, imgIndex) => ({
                  path: image,
                  imageMeta: {
                    create: {
                      locale,
                      title: section.title[locale],
                      alt: section.title[locale],
                    },
                  },
                })),
              },
            })),
          },
        },
        include: {
          contents: true,
          section: true,
        },
      });

      console.log(`Created collection ${collection.id} for locale ${locale}`);
    }
  }

  console.log("Collections import completed successfully!");
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
