/*
  Warnings:

  - A unique constraint covering the columns `[slug,locale]` on the table `Content` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "Content_slug_locale_key" ON "Content"("slug", "locale");
