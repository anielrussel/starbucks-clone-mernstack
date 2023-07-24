/*
  Warnings:

  - Added the required column `subCategory` to the `Menu` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `menu` ADD COLUMN `subCategory` VARCHAR(191) NOT NULL;
