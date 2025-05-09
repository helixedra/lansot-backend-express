import { PrismaClient } from "../generated/prisma";
import fs from "fs";
import path from "path";

const prisma = new PrismaClient();

interface ContentItem {
  name: string;
  slug: string;
  en: {
    title?: string;
    content?: string;
  };
  uk: {
    title?: string;
    content?: string;
  };
}

async function main() {
  // Read and parse the JSON file
  const rawData = fs.readFileSync(
    path.join(__dirname, "content.json"),
    "utf-8"
  );
  const data: ContentItem[] = JSON.parse(rawData);

  // Process each content item
  for (const item of data) {
    console.log(`Processing content: ${item.name}`);

    // Process English version
    if (item.en) {
      await prisma.content.upsert({
        where: {
          slug_locale: {
            slug: item.slug,
            locale: "en",
          },
        },
        create: {
          name: item.name,
          slug: item.slug,
          locale: "en",
          title: item.en.title || null,
          content: item.en.content || null,
        },
        update: {
          name: item.name,
          title: item.en.title || null,
          content: item.en.content || null,
        },
      });
    }

    // Process Ukrainian version
    if (item.uk) {
      await prisma.content.upsert({
        where: {
          slug_locale: {
            slug: item.slug,
            locale: "uk",
          },
        },
        create: {
          name: item.name,
          slug: item.slug,
          locale: "uk",
          title: item.uk.title || null,
          content: item.uk.content || null,
        },
        update: {
          name: item.name,
          title: item.uk.title || null,
          content: item.uk.content || null,
        },
      });
    }
  }

  console.log("Content data import completed successfully!");
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
