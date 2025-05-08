import express from "express";
import { PrismaClient } from "../generated/prisma";

const router = express.Router();
const prisma = new PrismaClient();

router.get("/", async (req, res) => {
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
  });
  res.json(pages);
});

router.get("/:slug", async (req, res) => {
  const { slug } = req.params;
  const page = await prisma.product.findMany({
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
    where: { slug },
  });
  res.json(page);
});

router.get("/:slug/:locale", async (req, res) => {
  const { slug, locale } = req.params;
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
    where: { slug, locale },
  });
  res.json(page);
});

export default router;
