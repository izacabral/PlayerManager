/*
  Warnings:

  - Added the required column `skillsId` to the `Player` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Player" ADD COLUMN     "skillsId" TEXT NOT NULL;

-- CreateTable
CREATE TABLE "Skills" (
    "id" TEXT NOT NULL,
    "strength" INTEGER NOT NULL,
    "speed" INTEGER NOT NULL,
    "driblle" INTEGER,

    CONSTRAINT "Skills_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Player" ADD CONSTRAINT "Player_skillsId_fkey" FOREIGN KEY ("skillsId") REFERENCES "Skills"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
