/*
  Warnings:

  - You are about to drop the column `completed` on the `Completion` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Completion" DROP COLUMN "completed",
ALTER COLUMN "date" SET DATA TYPE DATE;

-- AlterTable
ALTER TABLE "User" ADD COLUMN     "timezone" TEXT NOT NULL DEFAULT 'Asia/Kolkata';
