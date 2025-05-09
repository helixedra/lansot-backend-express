import { PrismaClient } from "../generated/prisma";
import fs from "fs";
import path from "path";

const prisma = new PrismaClient();

interface PageData {
  [key: string]: {
    [locale: string]: {
      name: string;
      title: string;
      subtitle?: string;
      meta: {
        title: string;
        description: string;
        keywords: string;
      };
    };
  };
}

async function main() {
  // Read and parse the JSON file
  const rawData = fs.readFileSync(path.join(__dirname, "pages.json"), "utf-8");
  const data: PageData = JSON.parse(rawData);

  // Process each page
  for (const [pageKey, locales] of Object.entries(data)) {
    console.log(`Processing page: ${pageKey}`);

    // Process each locale for the page
    for (const [locale, pageData] of Object.entries(locales)) {
      console.log(`  Processing locale: ${locale}`);

      // First create the Meta record
      const meta = await prisma.meta.create({
        data: {
          locale: locale,
          title: pageData.meta.title,
          description: pageData.meta.description || null,
          keywords: pageData.meta.keywords || null,
          robots: true, // Default value
        },
      });

      // Then create the Page record with relation to Meta
      await prisma.page.create({
        data: {
          locale: locale,
          name: pageData.name,
          slug: pageKey, // Using the page key as slug
          title: pageData.subtitle || null, // Swapping subtitle to title
          subtitle: pageData.title, // Swapping title to subtitle
          meta: {
            connect: {
              id: meta.id,
            },
          },
          // Content array is empty by default
          content: {
            create: [], // Empty array as we're not handling content in this import
          },
        },
      });
    }
  }

  console.log("Page data import completed successfully!");
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
