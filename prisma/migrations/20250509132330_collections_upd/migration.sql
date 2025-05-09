-- AlterTable
ALTER TABLE "Content" ADD COLUMN     "collectionId" TEXT;

-- AddForeignKey
ALTER TABLE "Content" ADD CONSTRAINT "Content_collectionId_fkey" FOREIGN KEY ("collectionId") REFERENCES "Collection"("id") ON DELETE CASCADE ON UPDATE CASCADE;
