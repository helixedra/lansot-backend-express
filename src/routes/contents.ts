import express from "express";
import { PrismaClient } from "../generated/prisma";

const router = express.Router();
const prisma = new PrismaClient();

router.get("/", async (req, res) => {
  const { locale } = req.query;
  const contents = await prisma.content.findMany({
    where: locale ? { locale: locale as string } : undefined,
  });
  res.json(contents);
});

router.get("/:slug", async (req, res) => {
  const { slug } = req.params;
  const { locale } = req.query;
  const content = await prisma.content.findMany({
    where: { slug, locale: locale ? (locale as string) : undefined },
  });
  res.json(content);
});

export default router;
