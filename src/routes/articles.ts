import express from "express";
import { PrismaClient } from "../generated/prisma";

const router = express.Router();
const prisma = new PrismaClient();

router.get("/", async (req, res) => {
  const { locale } = req.query;
  const articles = await prisma.article.findMany({
    include: {
      meta: true,
    },
    where: locale ? { locale: locale as string } : undefined,
  });
  res.json(articles);
});

router.get("/:slug", async (req, res) => {
  const { slug } = req.params;
  const { locale } = req.query;
  const article = await prisma.article.findMany({
    include: {
      meta: true,
    },
    where: { slug, locale: locale ? (locale as string) : undefined },
  });
  res.json(article);
});

export default router;
