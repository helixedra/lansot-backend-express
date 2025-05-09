import express from "express";
import { PrismaClient } from "../generated/prisma";

const router = express.Router();
const prisma = new PrismaClient();

router.get("/", async (req, res) => {
  const { locale } = req.query;
  const collections = await prisma.collection.findMany({
    include: {
      meta: true,
      cover: {
        include: {
          imageMeta: true,
        },
      },
      contents: true,
      section: true,
    },
    where: locale ? { locale: locale as string } : undefined,
  });
  res.json(collections);
});

router.get("/:slug", async (req, res) => {
  const { slug } = req.params;
  const { locale } = req.query;
  const collection = await prisma.collection.findMany({
    where: { slug, locale: locale ? (locale as string) : undefined },
    include: {
      meta: true,
      cover: {
        include: {
          imageMeta: true,
        },
      },
      contents: true,
      products: {
        include: {
          cover: {
            include: {
              imageMeta: true,
            },
          },
          meta: true,
          category: true,
        },
      },
      section: {
        include: {
          images: {
            include: {
              imageMeta: true,
            },
          },
        },
      },
    },
  });
  res.json(collection);
});

export default router;
