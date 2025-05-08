/*
  Warnings:

  - You are about to drop the column `productId` on the `Image` table. All the data in the column will be lost.
  - You are about to drop the column `productPromotionId` on the `Image` table. All the data in the column will be lost.
  - You are about to drop the column `cover` on the `Product` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[imageId]` on the table `Product` will be added. If there are existing duplicate values, this will fail.

*/
-- DropForeignKey
ALTER TABLE "Image" DROP CONSTRAINT "Image_productId_fkey";

-- DropForeignKey
ALTER TABLE "Image" DROP CONSTRAINT "Image_productPromotionId_fkey";

-- AlterTable
ALTER TABLE "Image" DROP COLUMN "productId",
DROP COLUMN "productPromotionId";

-- AlterTable
ALTER TABLE "Product" DROP COLUMN "cover",
ADD COLUMN     "imageId" TEXT;

-- CreateTable
CREATE TABLE "_Technical" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL,

    CONSTRAINT "_Technical_AB_pkey" PRIMARY KEY ("A","B")
);

-- CreateTable
CREATE TABLE "_PromotionImages" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL,

    CONSTRAINT "_PromotionImages_AB_pkey" PRIMARY KEY ("A","B")
);

-- CreateIndex
CREATE INDEX "_Technical_B_index" ON "_Technical"("B");

-- CreateIndex
CREATE INDEX "_PromotionImages_B_index" ON "_PromotionImages"("B");

-- CreateIndex
CREATE UNIQUE INDEX "Product_imageId_key" ON "Product"("imageId");

-- AddForeignKey
ALTER TABLE "Product" ADD CONSTRAINT "Product_imageId_fkey" FOREIGN KEY ("imageId") REFERENCES "Image"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_Technical" ADD CONSTRAINT "_Technical_A_fkey" FOREIGN KEY ("A") REFERENCES "Image"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_Technical" ADD CONSTRAINT "_Technical_B_fkey" FOREIGN KEY ("B") REFERENCES "Product"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_PromotionImages" ADD CONSTRAINT "_PromotionImages_A_fkey" FOREIGN KEY ("A") REFERENCES "Image"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_PromotionImages" ADD CONSTRAINT "_PromotionImages_B_fkey" FOREIGN KEY ("B") REFERENCES "ProductPromotion"("id") ON DELETE CASCADE ON UPDATE CASCADE;
