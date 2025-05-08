import express from "express";
import { PrismaClient } from "../generated/prisma";

const router = express.Router();
const prisma = new PrismaClient();

router.get("/", async (req, res) => {
  const galleries = await prisma.gallery.findMany({
    include: {
      images: {
        include: {
          imageMeta: true,
        },
      },
    },
  });
  res.json(galleries);
});

router.get("/:slug", async (req, res) => {
  const { slug } = req.params;
  const gallery = await prisma.gallery.findMany({
    where: { slug },
    include: {
      images: {
        include: {
          imageMeta: true,
        },
      },
    },
  });
  res.json(gallery);
});

router.get("/:slug/:locale", async (req, res) => {
  const { slug, locale } = req.params;
  const gallery = await prisma.gallery.findFirst({
    where: { slug, locale },
    include: {
      images: {
        include: {
          imageMeta: true,
        },
      },
    },
  });
  res.json(gallery);
});

export default router;
