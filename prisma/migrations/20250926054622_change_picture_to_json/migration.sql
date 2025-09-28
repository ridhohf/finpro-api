/*
  Warnings:

  - Changed the type of `picture` on the `properties` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- AlterTable
ALTER TABLE "public"."properties" DROP COLUMN "picture",
ADD COLUMN     "picture" JSONB NOT NULL;
