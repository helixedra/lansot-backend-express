import express from "express";
import { PrismaClient } from "../generated/prisma";

const router = express.Router();
const prisma = new PrismaClient();

router.get("/", async (req, res) => {
  const { category } = req.query;
  const { locale } = req.query;
  const pages = await prisma.product.findMany({
    include: {
      cover: {
        include: {
          imageMeta: true,
        },
      },
      meta: true,
      category: true,
      collection: true,
      promotion: {
        include: {
          images: {
            include: {
              imageMeta: true,
            },
          },
        },
      },
      technical: {
        include: {
          imageMeta: true,
        },
      },
      files: true,
    },
    where: {
      category: category ? { slug: category as string } : undefined,
      locale: locale ? (locale as string) : undefined,
    },
  });
  res.json(pages);
});

router.get("/:slug", async (req, res) => {
  const { slug } = req.params;
  const { locale } = req.query;
  const { category } = req.query;
  const page = await prisma.product.findFirst({
    include: {
      cover: {
        include: {
          imageMeta: true,
        },
      },
      meta: true,
      category: true,
      collection: true,
      promotion: {
        include: {
          images: {
            include: {
              imageMeta: true,
            },
          },
        },
      },
      technical: {
        include: {
          imageMeta: true,
        },
      },
      files: true,
    },
    where: {
      slug,
      locale: locale ? (locale as string) : undefined,
      category: category ? { slug: category as string } : undefined,
    },
  });
  res.json(page);
});

export default router;
