/*
  Warnings:

  - You are about to alter the column `rating` on the `reviews` table. The data in that column could be lost. The data in that column will be cast from `Integer` to `SmallInt`.
  - You are about to drop the column `companyName` on the `tenant_profiles` table. All the data in the column will be lost.
  - You are about to drop the column `userId` on the `tenant_profiles` table. All the data in the column will be lost.
  - You are about to drop the column `isVerified` on the `users` table. All the data in the column will be lost.
  - You are about to drop the column `providerId` on the `users` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[user_id]` on the table `tenant_profiles` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `updated_at` to the `peak_seasons` table without a default value. This is not possible if the table is not empty.
  - Added the required column `updated_at` to the `property_categories` table without a default value. This is not possible if the table is not empty.
  - Added the required column `updated_at` to the `reviews` table without a default value. This is not possible if the table is not empty.
  - Added the required column `updated_at` to the `room_availabilities` table without a default value. This is not possible if the table is not empty.
  - Added the required column `company_name` to the `tenant_profiles` table without a default value. This is not possible if the table is not empty.
  - Added the required column `user_id` to the `tenant_profiles` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "public"."tenant_profiles" DROP CONSTRAINT "tenant_profiles_userId_fkey";

-- DropIndex
DROP INDEX "public"."tenant_profiles_userId_key";

-- AlterTable
ALTER TABLE "public"."email_verifications" ADD COLUMN     "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP;

-- AlterTable
ALTER TABLE "public"."peak_seasons" ADD COLUMN     "updated_at" TIMESTAMP(3) NOT NULL;

-- AlterTable
ALTER TABLE "public"."property_categories" ADD COLUMN     "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "updated_at" TIMESTAMP(3) NOT NULL;

-- AlterTable
ALTER TABLE "public"."reset_passwords" ADD COLUMN     "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP;

-- AlterTable
ALTER TABLE "public"."reviews" ADD COLUMN     "replied_at" TIMESTAMP(3),
ADD COLUMN     "tenant_reply" TEXT,
ADD COLUMN     "updated_at" TIMESTAMP(3) NOT NULL,
ALTER COLUMN "rating" SET DATA TYPE SMALLINT;

-- AlterTable
ALTER TABLE "public"."room_availabilities" ADD COLUMN     "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "updated_at" TIMESTAMP(3) NOT NULL;

-- AlterTable
ALTER TABLE "public"."tenant_profiles" DROP COLUMN "companyName",
DROP COLUMN "userId",
ADD COLUMN     "company_name" VARCHAR(255) NOT NULL,
ADD COLUMN     "user_id" INTEGER NOT NULL;

-- AlterTable
ALTER TABLE "public"."users" DROP COLUMN "isVerified",
DROP COLUMN "providerId",
ADD COLUMN     "is_verified" BOOLEAN NOT NULL DEFAULT false,
ADD COLUMN     "provider_id" VARCHAR(255);

-- CreateIndex
CREATE INDEX "email_verifications_user_id_idx" ON "public"."email_verifications"("user_id");

-- CreateIndex
CREATE INDEX "email_verifications_token_idx" ON "public"."email_verifications"("token");

-- CreateIndex
CREATE INDEX "payment_proofs_reservation_id_idx" ON "public"."payment_proofs"("reservation_id");

-- CreateIndex
CREATE INDEX "peak_seasons_room_id_idx" ON "public"."peak_seasons"("room_id");

-- CreateIndex
CREATE INDEX "peak_seasons_room_id_start_date_end_date_idx" ON "public"."peak_seasons"("room_id", "start_date", "end_date");

-- CreateIndex
CREATE INDEX "properties_tenant_id_idx" ON "public"."properties"("tenant_id");

-- CreateIndex
CREATE INDEX "properties_category_id_idx" ON "public"."properties"("category_id");

-- CreateIndex
CREATE INDEX "properties_city_idx" ON "public"."properties"("city");

-- CreateIndex
CREATE INDEX "properties_tenant_id_created_at_idx" ON "public"."properties"("tenant_id", "created_at");

-- CreateIndex
CREATE INDEX "property_categories_tenant_id_idx" ON "public"."property_categories"("tenant_id");

-- CreateIndex
CREATE INDEX "reservations_user_id_idx" ON "public"."reservations"("user_id");

-- CreateIndex
CREATE INDEX "reservations_property_id_idx" ON "public"."reservations"("property_id");

-- CreateIndex
CREATE INDEX "reservations_room_id_idx" ON "public"."reservations"("room_id");

-- CreateIndex
CREATE INDEX "reservations_user_id_status_idx" ON "public"."reservations"("user_id", "status");

-- CreateIndex
CREATE INDEX "reservations_property_id_status_idx" ON "public"."reservations"("property_id", "status");

-- CreateIndex
CREATE INDEX "reservations_check_in_check_out_idx" ON "public"."reservations"("check_in", "check_out");

-- CreateIndex
CREATE INDEX "reservations_status_created_at_idx" ON "public"."reservations"("status", "created_at");

-- CreateIndex
CREATE INDEX "reset_passwords_user_id_idx" ON "public"."reset_passwords"("user_id");

-- CreateIndex
CREATE INDEX "reset_passwords_token_idx" ON "public"."reset_passwords"("token");

-- CreateIndex
CREATE INDEX "reviews_property_id_idx" ON "public"."reviews"("property_id");

-- CreateIndex
CREATE INDEX "reviews_user_id_idx" ON "public"."reviews"("user_id");

-- CreateIndex
CREATE INDEX "room_availabilities_room_id_date_idx" ON "public"."room_availabilities"("room_id", "date");

-- CreateIndex
CREATE INDEX "rooms_property_id_idx" ON "public"."rooms"("property_id");

-- CreateIndex
CREATE INDEX "social_logins_user_id_idx" ON "public"."social_logins"("user_id");

-- CreateIndex
CREATE UNIQUE INDEX "tenant_profiles_user_id_key" ON "public"."tenant_profiles"("user_id");

-- CreateIndex
CREATE INDEX "users_email_idx" ON "public"."users"("email");

-- CreateIndex
CREATE INDEX "users_role_idx" ON "public"."users"("role");

-- AddForeignKey
ALTER TABLE "public"."tenant_profiles" ADD CONSTRAINT "tenant_profiles_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "public"."users"("id") ON DELETE CASCADE ON UPDATE CASCADE;
