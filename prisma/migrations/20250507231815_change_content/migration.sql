-- DropForeignKey
ALTER TABLE "Content" DROP CONSTRAINT "Content_pageId_fkey";

-- AlterTable
ALTER TABLE "Content" ALTER COLUMN "pageId" DROP NOT NULL;

-- AddForeignKey
ALTER TABLE "Content" ADD CONSTRAINT "Content_pageId_fkey" FOREIGN KEY ("pageId") REFERENCES "Page"("id") ON DELETE SET NULL ON UPDATE CASCADE;
