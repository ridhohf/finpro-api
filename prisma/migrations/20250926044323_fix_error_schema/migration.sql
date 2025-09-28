/*
  Warnings:

  - You are about to drop the column `propertiesId` on the `peak_seasons` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "public"."peak_seasons" DROP CONSTRAINT "peak_seasons_propertiesId_fkey";

-- AlterTable
ALTER TABLE "public"."peak_seasons" DROP COLUMN "propertiesId";
