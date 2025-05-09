import express from "express";
import { PrismaClient } from "../generated/prisma";

const router = express.Router();
const prisma = new PrismaClient();

router.get("/", async (req, res) => {
  const { category } = req.query;
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
    },
  });
  res.json(pages);
});
router.get("/:locale", async (req, res) => {
  const { locale } = req.params;
  const { category } = req.query;
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
    where: {
      locale,
      category: category ? { slug: category as string } : undefined,
    },
  });
  res.json(page);
});

router.get("/:slug", async (req, res) => {
  const { slug } = req.params;
  const { category } = req.query;
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
    where: {
      slug,
      category: category ? { slug: category as string } : undefined,
    },
  });
  res.json(page);
});

router.get("/:slug/:locale", async (req, res) => {
  const { slug, locale } = req.params;
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
      locale,
      category: category ? { slug: category as string } : undefined,
    },
  });
  res.json(page);
});

export default router;
