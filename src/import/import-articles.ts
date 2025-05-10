import { PrismaClient } from "../generated/prisma";
import fs from "fs";
import path from "path";

const prisma = new PrismaClient();

interface ArticleData {
  id?: number;
  title: {
    uk: string;
    en: string;
  };
  subtitle: {
    uk: string;
    en: string;
  };
  meta: {
    description: {
      uk: string;
      en: string;
    };
    keywords: {
      uk: string;
      en: string;
    };
  };
  preview: {
    uk: string;
    en: string;
  };
  content: {
    uk: string;
    en: string;
  };
  slug: string;
}

async function main() {
  // Read and parse the JSON file
  const rawData = fs.readFileSync(
    path.join(__dirname, "articles.json"),
    "utf-8"
  );
  const articles: ArticleData[] = JSON.parse(rawData);

  // Process each article
  for (const articleData of articles) {
    console.log(`Processing article: ${articleData.title.en}`);

    // Process both locales
    for (const locale of ["uk", "en"] as const) {
      console.log(`  Processing locale: ${locale}`);

      // Create Meta first
      const meta = await prisma.meta.create({
        data: {
          locale,
          title: articleData.title[locale],
          description: articleData.meta.description[locale],
          keywords: articleData.meta.keywords[locale],
          robots: true,
        },
      });

      // Create the article
      await prisma.article.create({
        data: {
          locale,
          slug: articleData.slug,
          title: articleData.title[locale],
          subtitle: articleData.subtitle[locale],
          preview: articleData.preview[locale],
          content: articleData.content[locale],
          meta: {
            connect: { id: meta.id },
          },
        },
      });
    }
  }

  console.log("Articles import completed successfully!");
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
