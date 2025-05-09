import { PrismaClient } from "../generated/prisma";
import fs from "fs";
import path from "path";

const prisma = new PrismaClient();

interface CategoryData {
  [key: string]: {
    [locale: string]: {
      name: string;
      url: string;
      category_description: string;
      meta: {
        title: string;
        description: string;
        keywords: string;
        robots: boolean;
      };
    };
  };
}

async function main() {
  // Read and parse the JSON file
  const rawData = fs.readFileSync(
    path.join(__dirname, "categories.json"),
    "utf-8"
  );
  const data: CategoryData = JSON.parse(rawData);

  // Process each category
  for (const [categoryKey, locales] of Object.entries(data)) {
    console.log(`Processing category: ${categoryKey}`);

    // Process each locale for the category
    for (const [locale, categoryData] of Object.entries(locales)) {
      console.log(`  Processing locale: ${locale}`);

      // First create the Meta record
      const meta = await prisma.meta.create({
        data: {
          locale: locale,
          title: categoryData.meta.title,
          description: categoryData.meta.description || null,
          keywords: categoryData.meta.keywords || null,
          robots: categoryData.meta.robots,
        },
      });

      // Then create the Category record with relation to Meta
      await prisma.category.create({
        data: {
          locale: locale,
          name: categoryData.name,
          slug: categoryData.url,
          description: categoryData.category_description || null,
          meta: {
            connect: {
              id: meta.id,
            },
          },
        },
      });
    }
  }

  console.log("Data import completed successfully!");
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
