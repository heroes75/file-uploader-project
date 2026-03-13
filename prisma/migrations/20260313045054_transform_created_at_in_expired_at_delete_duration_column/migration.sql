/*
  Warnings:

  - You are about to drop the column `createdAt` on the `ShareFile` table. All the data in the column will be lost.
  - You are about to drop the column `duration` on the `ShareFile` table. All the data in the column will be lost.
  - You are about to drop the column `createdAt` on the `ShareFolder` table. All the data in the column will be lost.
  - You are about to drop the column `duration` on the `ShareFolder` table. All the data in the column will be lost.
  - Added the required column `expiredAt` to the `ShareFile` table without a default value. This is not possible if the table is not empty.
  - Added the required column `expiredAt` to the `ShareFolder` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "ShareFile" DROP COLUMN "createdAt",
DROP COLUMN "duration",
ADD COLUMN     "expiredAt" TIMESTAMP(3) NOT NULL;

-- AlterTable
ALTER TABLE "ShareFolder" DROP COLUMN "createdAt",
DROP COLUMN "duration",
ADD COLUMN     "expiredAt" TIMESTAMP(3) NOT NULL;
