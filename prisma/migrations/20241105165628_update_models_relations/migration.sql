/*
  Warnings:

  - A unique constraint covering the columns `[skillsId]` on the table `Player` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "Player_skillsId_key" ON "Player"("skillsId");
