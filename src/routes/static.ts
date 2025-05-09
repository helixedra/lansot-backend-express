import express from "express";
import { PrismaClient } from "../generated/prisma";

const router = express.Router();
const prisma = new PrismaClient();

router.get("/products", async (req, res) => {
  const result = await prisma.product.findMany({
    select: {
      slug: true,
      locale: true,
      category: {
        select: {
          slug: true,
        },
      },
    },
  });
  res.json(result);
});

router.get("/collections", async (req, res) => {
  const result = await prisma.collection.findMany({
    select: {
      slug: true,
      locale: true,
    },
  });
  res.json(result);
});

export default router;
