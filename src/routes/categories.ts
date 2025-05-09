import express from "express";
import { PrismaClient } from "../generated/prisma";

const router = express.Router();
const prisma = new PrismaClient();

router.get("/", async (req, res) => {
  const { locale } = req.query;
  const category = await prisma.category.findMany({
    where: locale ? { locale: locale as string } : undefined,
    include: {
      meta: true,
    },
  });
  res.json(category);
});

router.get("/:slug", async (req, res) => {
  const { slug } = req.params;
  const { locale } = req.query;
  const category = await prisma.category.findMany({
    where: { slug, locale: locale ? (locale as string) : undefined },
    include: {
      meta: true,
    },
  });
  res.json(category);
});

export default router;
