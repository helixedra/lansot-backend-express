-- DropForeignKey
ALTER TABLE "Category" DROP CONSTRAINT "Category_metaId_fkey";

-- DropForeignKey
ALTER TABLE "Page" DROP CONSTRAINT "Page_metaId_fkey";

-- AddForeignKey
ALTER TABLE "Category" ADD CONSTRAINT "Category_metaId_fkey" FOREIGN KEY ("metaId") REFERENCES "Meta"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Page" ADD CONSTRAINT "Page_metaId_fkey" FOREIGN KEY ("metaId") REFERENCES "Meta"("id") ON DELETE CASCADE ON UPDATE CASCADE;
