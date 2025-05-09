import express from "express";
import { PrismaClient } from "../generated/prisma";

const router = express.Router();
const prisma = new PrismaClient();

router.get("/", async (req, res) => {
  const { locale } = req.query;
  const contents = await prisma.material.findMany({
    where: locale ? { locale: locale as string } : undefined,
    include: {
      image: {
        include: {
          imageMeta: true,
        },
      },
      category: true,
    },
  });
  res.json(contents);
});

router.get("/:slug", async (req, res) => {
  const { slug } = req.params;
  const { locale } = req.query;
  const content = await prisma.material.findMany({
    where: { slug, locale: locale ? (locale as string) : undefined },
    include: {
      image: {
        include: {
          imageMeta: true,
        },
      },
      category: true,
    },
  });
  res.json(content);
});

export default router;
