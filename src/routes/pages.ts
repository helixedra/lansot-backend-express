import express from "express";
import { PrismaClient } from "../generated/prisma";

const router = express.Router();
const prisma = new PrismaClient();

router.get("/", async (req, res) => {
  const { locale } = req.query;
  const pages = await prisma.page.findMany({
    include: {
      meta: true,
      content: true,
    },
    where: locale ? { locale: locale as string } : undefined,
  });
  res.json(pages);
});

router.get("/:slug", async (req, res) => {
  const { slug } = req.params;
  const { locale } = req.query;
  const page = await prisma.page.findMany({
    include: {
      meta: true,
      content: true,
    },
    where: { slug, locale: locale ? (locale as string) : undefined },
  });
  res.json(page);
});

export default router;
