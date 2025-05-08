import express from "express";
import { PrismaClient } from "../generated/prisma";

const router = express.Router();
const prisma = new PrismaClient();

router.get("/", async (req, res) => {
  const pages = await prisma.page.findMany({
    include: {
      meta: true,
      content: true,
    },
  });
  res.json(pages);
});

router.get("/:slug", async (req, res) => {
  const { slug } = req.params;
  const page = await prisma.page.findMany({
    include: {
      meta: true,
      content: true,
    },
    where: { slug },
  });
  res.json(page);
});

router.get("/:slug/:locale", async (req, res) => {
  const { slug, locale } = req.params;
  const page = await prisma.page.findFirst({
    include: {
      meta: true,
      content: true,
    },
    where: { slug, locale },
  });
  res.json(page);
});

export default router;
