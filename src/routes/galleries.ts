import express from "express";
import { PrismaClient } from "../generated/prisma";

const router = express.Router();
const prisma = new PrismaClient();

router.get("/", async (req, res) => {
  const { locale } = req.query;
  const galleries = await prisma.gallery.findMany({
    where: locale ? { locale: locale as string } : undefined,
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
  const { locale } = req.query;
  const gallery = await prisma.gallery.findMany({
    where: { slug, locale: locale ? (locale as string) : undefined },
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
