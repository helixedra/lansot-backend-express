import { PrismaClient } from "../generated/prisma";
import fs from "fs";
import path from "path";

const prisma = new PrismaClient();

interface GalleryImage {
  img: string;
  alt: {
    uk: string;
    en: string;
  };
  title: {
    uk: string;
    en: string;
  };
}

async function main() {
  // Read and parse the JSON file
  const rawData = fs.readFileSync(
    path.join(__dirname, "gallery.json"),
    "utf-8"
  );
  const images: GalleryImage[] = JSON.parse(rawData);

  // Create or find galleries for both locales
  const galleryName = "Home Slider";
  const gallerySlug = "home-slider";

  // Create galleries for both locales if they don't exist
  for (const locale of ["uk", "en"] as const) {
    let gallery = await prisma.gallery.findFirst({
      where: {
        slug: gallerySlug,
        locale: locale,
      },
    });

    if (!gallery) {
      gallery = await prisma.gallery.create({
        data: {
          name: galleryName,
          slug: gallerySlug,
          locale: locale,
        },
      });
      console.log(`Created gallery for locale ${locale}`);
    }

    // Process each image for this locale
    for (const imageData of images) {
      console.log(`Processing image ${imageData.img} for locale ${locale}`);

      // Create ImageMeta (using title for title and alt for alt)
      const imageMeta = await prisma.imageMeta.create({
        data: {
          locale: locale,
          title: imageData.title[locale], // Using title from JSON
          alt: imageData.alt[locale], // Using alt from JSON
        },
      });

      // Create Image connected to the gallery
      await prisma.image.create({
        data: {
          path: imageData.img,
          imageMetaId: imageMeta.id,
          GalleryImages: {
            connect: { id: gallery.id },
          },
        },
      });
    }
  }

  console.log("Gallery data import completed successfully!");
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
