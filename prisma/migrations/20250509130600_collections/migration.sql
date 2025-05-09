/*
  Warnings:

  - A unique constraint covering the columns `[coverId]` on the table `Collection` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `metaId` to the `Collection` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Collection" ADD COLUMN     "coverId" TEXT,
ADD COLUMN     "metaId" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "Image" ADD COLUMN     "collectionId" TEXT,
ADD COLUMN     "sectionId" TEXT;

-- CreateTable
CREATE TABLE "Section" (
    "id" TEXT NOT NULL,
    "locale" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "slug" TEXT NOT NULL,
    "layout" TEXT,
    "title" TEXT,
    "content" TEXT,
    "collectionId" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Section_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Section_id_key" ON "Section"("id");

-- CreateIndex
CREATE UNIQUE INDEX "Collection_coverId_key" ON "Collection"("coverId");

-- AddForeignKey
ALTER TABLE "Image" ADD CONSTRAINT "Image_sectionId_fkey" FOREIGN KEY ("sectionId") REFERENCES "Section"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Collection" ADD CONSTRAINT "Collection_metaId_fkey" FOREIGN KEY ("metaId") REFERENCES "Meta"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Collection" ADD CONSTRAINT "Collection_coverId_fkey" FOREIGN KEY ("coverId") REFERENCES "Image"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Section" ADD CONSTRAINT "Section_collectionId_fkey" FOREIGN KEY ("collectionId") REFERENCES "Collection"("id") ON DELETE CASCADE ON UPDATE CASCADE;
