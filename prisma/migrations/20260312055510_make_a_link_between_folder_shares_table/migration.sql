/*
  Warnings:

  - Added the required column `folderId` to the `ShareFolder` table without a default value. This is not possible if the table is not empty.
  - Added the required column `name` to the `ShareFolder` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "ShareFolder" ADD COLUMN     "folderId" TEXT NOT NULL,
ADD COLUMN     "name" TEXT NOT NULL;

-- CreateTable
CREATE TABLE "ShareFile" (
    "id" TEXT NOT NULL,
    "shareFileUrl" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL,
    "duration" INTEGER NOT NULL,
    "fileId" TEXT NOT NULL,

    CONSTRAINT "ShareFile_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "ShareFile_shareFileUrl_key" ON "ShareFile"("shareFileUrl");

-- AddForeignKey
ALTER TABLE "ShareFolder" ADD CONSTRAINT "ShareFolder_folderId_fkey" FOREIGN KEY ("folderId") REFERENCES "Folder"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ShareFile" ADD CONSTRAINT "ShareFile_fileId_fkey" FOREIGN KEY ("fileId") REFERENCES "Files"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
