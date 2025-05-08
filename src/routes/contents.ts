import express from "express";
import { PrismaClient } from "../generated/prisma";

const router = express.Router();
const prisma = new PrismaClient();

router.get("/", async (req, res) => {
  const contents = await prisma.content.findMany();
  res.json(contents);
});

router.get("/:slug", async (req, res) => {
  const { slug } = req.params;
  const content = await prisma.content.findMany({
    where: { slug },
  });
  res.json(content);
});

router.get("/:slug/:locale", async (req, res) => {
  const { slug, locale } = req.params;
  const content = await prisma.content.findFirst({
    where: { slug, locale },
  });
  res.json(content);
});

export default router;
