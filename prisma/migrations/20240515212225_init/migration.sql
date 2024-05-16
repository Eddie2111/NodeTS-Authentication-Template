/*
  Warnings:

  - You are about to drop the `User` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE "User";

-- CreateTable
CREATE TABLE "Users" (
    "id" SERIAL NOT NULL,
    "serial" TEXT NOT NULL,
    "firstName" VARCHAR(16) NOT NULL,
    "lastName" VARCHAR(16) NOT NULL,
    "email" VARCHAR(35) NOT NULL,
    "password" VARCHAR(120) NOT NULL,
    "active" BOOLEAN DEFAULT true,

    CONSTRAINT "Users_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Users_serial_key" ON "Users"("serial");

-- CreateIndex
CREATE UNIQUE INDEX "Users_email_key" ON "Users"("email");
