/*
  Warnings:

  - You are about to drop the column `name` on the `ShareFolder` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[shareUrl]` on the table `ShareFolder` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `shareUrl` to the `ShareFolder` table without a default value. This is not possible if the table is not empty.

*/
-- DropIndex
DROP INDEX "ShareFolder_name_key";

-- AlterTable
ALTER TABLE "ShareFolder" DROP COLUMN "name",
ADD COLUMN     "shareUrl" TEXT NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "ShareFolder_shareUrl_key" ON "ShareFolder"("shareUrl");
