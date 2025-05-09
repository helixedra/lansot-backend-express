import express from "express";
import { PrismaClient } from "../generated/prisma";

const router = express.Router();
const prisma = new PrismaClient();

router.get("/", async (req, res) => {
  const categories = await prisma.category.findMany();
  res.json(categories);
});

router.get("/:locale", async (req, res) => {
  const { locale } = req.params;
  const category = await prisma.category.findMany({
    where: { locale },
    include: {
      meta: true,
    },
  });
  res.json(category);
});

router.get("/:slug", async (req, res) => {
  const { slug } = req.params;
  const category = await prisma.category.findMany({
    where: { slug },
    include: {
      meta: true,
    },
  });
  res.json(category);
});

router.get("/:slug/:locale", async (req, res) => {
  const { slug, locale } = req.params;
  const category = await prisma.category.findFirst({
    where: { slug, locale },
    include: {
      meta: true,
    },
  });
  res.json(category);
});

export default router;
