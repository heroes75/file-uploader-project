/*
  Warnings:

  - A unique constraint covering the columns `[shareUrl]` on the table `ShareFolder` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "ShareFolder_shareUrl_key" ON "ShareFolder"("shareUrl");
