/*
  Warnings:

  - You are about to drop the column `content` on the `todo` table. All the data in the column will be lost.
  - Added the required column `task` to the `todo` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "todo" DROP COLUMN "content",
ADD COLUMN     "task" VARCHAR(255) NOT NULL;
