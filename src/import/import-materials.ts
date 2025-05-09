import { PrismaClient } from "../generated/prisma";
import fs from "fs";
import path from "path";

const prisma = new PrismaClient();

interface MaterialData {
  [categoryKey: string]: {
    title: {
      uk: string;
      en: string;
    };
    images: {
      img: string;
      title: string;
      description: {
        uk: string;
        en: string;
      };
    }[];
  };
}

function generateSlug(text: string): string {
  return text.toLowerCase().replace(/\s+/g, "-");
}

async function main() {
  // Read and parse the JSON file
  const rawData = fs.readFileSync(
    path.join(__dirname, "materials.json"),
    "utf-8"
  );
  const data: MaterialData = JSON.parse(rawData);

  // Process each material category
  for (const [categoryKey, categoryData] of Object.entries(data)) {
    console.log(`Processing category: ${categoryKey}`);

    // Process both locales
    for (const locale of ["uk", "en"] as const) {
      console.log(`  Processing locale: ${locale}`);

      // Create material category
      const category = await prisma.materialCategory.create({
        data: {
          locale,
          name: categoryData.title[locale],
          slug: generateSlug(categoryData.title[locale]),
          description: null, // Add description if available
        },
      });

      // Process each material in the category
      for (const materialData of categoryData.images) {
        console.log(`    Processing material: ${materialData.title}`);

        // Create image with meta
        const image = await prisma.image.create({
          data: {
            path: materialData.img,
            imageMeta: {
              create: {
                locale,
                title: materialData.title,
                alt: materialData.description[locale],
              },
            },
          },
        });

        // Create material
        await prisma.material.create({
          data: {
            locale,
            name: materialData.title,
            slug: generateSlug(materialData.title),
            category: {
              connect: { id: category.id },
            },
            image: {
              connect: { id: image.id },
            },
          },
        });
      }
    }
  }

  console.log("Materials import completed successfully!");
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
