/*
  Warnings:

  - You are about to drop the column `property_id` on the `peak_seasons` table. All the data in the column will be lost.
  - The `status` column on the `reservations` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - A unique constraint covering the columns `[room_id,date]` on the table `room_availabilities` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `room_id` to the `peak_seasons` table without a default value. This is not possible if the table is not empty.
  - Added the required column `date` to the `room_availabilities` table without a default value. This is not possible if the table is not empty.

*/
-- CreateEnum
CREATE TYPE "public"."ReservationStatus" AS ENUM ('PENDING_PAYMENT', 'PENDING_CONFIRMATION', 'CONFIRMED', 'CANCELLED', 'COMPLETED');

-- DropForeignKey
ALTER TABLE "public"."peak_seasons" DROP CONSTRAINT "peak_seasons_property_id_fkey";

-- AlterTable
ALTER TABLE "public"."payment_proofs" ADD COLUMN     "rejected_reason" TEXT;

-- AlterTable
ALTER TABLE "public"."peak_seasons" DROP COLUMN "property_id",
ADD COLUMN     "propertiesId" INTEGER,
ADD COLUMN     "room_id" INTEGER NOT NULL;

-- AlterTable
ALTER TABLE "public"."properties" ADD COLUMN     "lat" DECIMAL(10,7),
ADD COLUMN     "lng" DECIMAL(10,7);

-- AlterTable
ALTER TABLE "public"."reservations" ADD COLUMN     "reminder_sent_at" TIMESTAMP(3),
DROP COLUMN "status",
ADD COLUMN     "status" "public"."ReservationStatus" NOT NULL DEFAULT 'PENDING_PAYMENT';

-- AlterTable
ALTER TABLE "public"."room_availabilities" ADD COLUMN     "date" DATE NOT NULL,
ALTER COLUMN "is_available" SET DEFAULT true;

-- AlterTable
ALTER TABLE "public"."rooms" ADD COLUMN     "max_guests" INTEGER NOT NULL DEFAULT 1,
ADD COLUMN     "picture" VARCHAR(255);

-- AlterTable
ALTER TABLE "public"."users" ADD COLUMN     "avatar" VARCHAR(255);

-- CreateIndex
CREATE UNIQUE INDEX "room_availabilities_room_id_date_key" ON "public"."room_availabilities"("room_id", "date");

-- AddForeignKey
ALTER TABLE "public"."peak_seasons" ADD CONSTRAINT "peak_seasons_room_id_fkey" FOREIGN KEY ("room_id") REFERENCES "public"."rooms"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."peak_seasons" ADD CONSTRAINT "peak_seasons_propertiesId_fkey" FOREIGN KEY ("propertiesId") REFERENCES "public"."properties"("id") ON DELETE SET NULL ON UPDATE CASCADE;
