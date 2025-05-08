/*
  Warnings:

  - A unique constraint covering the columns `[id]` on the table `Page` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `metaId` to the `Page` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Page" ADD COLUMN     "metaId" TEXT NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "Page_id_key" ON "Page"("id");

-- AddForeignKey
ALTER TABLE "Page" ADD CONSTRAINT "Page_metaId_fkey" FOREIGN KEY ("metaId") REFERENCES "Meta"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
