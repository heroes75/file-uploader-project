/*
  Warnings:

  - Added the required column `destinationFolderId` to the `Files` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "Files" DROP CONSTRAINT "Files_destinationId_fkey";

-- AlterTable
ALTER TABLE "Files" ADD COLUMN     "destinationFolderId" TEXT NOT NULL;

-- AddForeignKey
ALTER TABLE "Files" ADD CONSTRAINT "Files_destinationFolderId_fkey" FOREIGN KEY ("destinationFolderId") REFERENCES "Folder"("destination") ON DELETE RESTRICT ON UPDATE CASCADE;
