/*
  Warnings:

  - Added the required column `fileUrl` to the `Files` table without a default value. This is not possible if the table is not empty.
  - Added the required column `folderUrl` to the `Folder` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Files" ADD COLUMN     "fileUrl" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "Folder" ADD COLUMN     "folderUrl" TEXT NOT NULL;
