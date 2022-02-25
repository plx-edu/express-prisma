/*
  Warnings:

  - You are about to alter the column `name` on the `category` table. The data in that column could be lost. The data in that column will be cast from `VarChar(255)` to `VarChar(25)`.
  - A unique constraint covering the columns `[name]` on the table `category` will be added. If there are existing duplicate values, this will fail.

*/
-- AlterTable
ALTER TABLE "category" ALTER COLUMN "name" SET DATA TYPE VARCHAR(25);

-- CreateIndex
CREATE UNIQUE INDEX "category_name_key" ON "category"("name");
