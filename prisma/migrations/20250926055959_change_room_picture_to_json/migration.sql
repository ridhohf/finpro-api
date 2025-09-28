/*
  Warnings:

  - Added the required column `picture` to the `rooms` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "public"."rooms" DROP COLUMN "picture",
ADD COLUMN     "picture" JSONB NOT NULL;
