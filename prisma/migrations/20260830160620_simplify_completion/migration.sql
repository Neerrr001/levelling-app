/*
  Warnings:

  - You are about to drop the column `date` on the `Completion` table. All the data in the column will be lost.
  - Added the required column `completedAt` to the `Completion` table without a default value. This is not possible if the table is not empty.

*/
-- DropIndex
DROP INDEX "Completion_habitId_date_key";

-- AlterTable
ALTER TABLE "Completion" DROP COLUMN "date",
ADD COLUMN     "completedAt" TIMESTAMP(3) NOT NULL;
