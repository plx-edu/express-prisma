-- DropForeignKey
ALTER TABLE "todo" DROP CONSTRAINT "todo_categoryId_fkey";

-- AddForeignKey
ALTER TABLE "todo" ADD CONSTRAINT "todo_categoryId_fkey" FOREIGN KEY ("categoryId") REFERENCES "category"("id") ON DELETE CASCADE ON UPDATE CASCADE;
