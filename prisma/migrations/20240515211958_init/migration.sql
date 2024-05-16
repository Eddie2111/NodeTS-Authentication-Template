/*
  Warnings:

  - You are about to alter the column `phoneNumber` on the `Profile` table. The data in that column could be lost. The data in that column will be cast from `Text` to `VarChar(16)`.
  - You are about to alter the column `terrainId` on the `Profile` table. The data in that column could be lost. The data in that column will be cast from `Text` to `VarChar(38)`.
  - You are about to drop the column `profileId` on the `User` table. All the data in the column will be lost.
  - You are about to alter the column `firstName` on the `User` table. The data in that column could be lost. The data in that column will be cast from `Text` to `VarChar(16)`.
  - You are about to alter the column `lastName` on the `User` table. The data in that column could be lost. The data in that column will be cast from `Text` to `VarChar(16)`.
  - You are about to alter the column `email` on the `User` table. The data in that column could be lost. The data in that column will be cast from `Text` to `VarChar(35)`.
  - You are about to alter the column `password` on the `User` table. The data in that column could be lost. The data in that column will be cast from `Text` to `VarChar(120)`.

*/
-- DropForeignKey
ALTER TABLE "User" DROP CONSTRAINT "User_profileId_fkey";

-- AlterTable
ALTER TABLE "Profile" ADD COLUMN     "serial" TEXT,
ALTER COLUMN "phoneNumber" SET DATA TYPE VARCHAR(16),
ALTER COLUMN "terrainId" SET DATA TYPE VARCHAR(38);

-- AlterTable
ALTER TABLE "User" DROP COLUMN "profileId",
ADD COLUMN     "active" BOOLEAN DEFAULT true,
ALTER COLUMN "firstName" SET DATA TYPE VARCHAR(16),
ALTER COLUMN "lastName" SET DATA TYPE VARCHAR(16),
ALTER COLUMN "email" SET DATA TYPE VARCHAR(35),
ALTER COLUMN "password" SET DATA TYPE VARCHAR(120);
