/*
  Warnings:

  - You are about to drop the column `category` on the `menu` table. All the data in the column will be lost.
  - You are about to drop the column `subCategory` on the `menu` table. All the data in the column will be lost.
  - Added the required column `category1` to the `Menu` table without a default value. This is not possible if the table is not empty.
  - Added the required column `category2` to the `Menu` table without a default value. This is not possible if the table is not empty.
  - Added the required column `category3` to the `Menu` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `menu` DROP COLUMN `category`,
    DROP COLUMN `subCategory`,
    ADD COLUMN `category1` VARCHAR(191) NOT NULL,
    ADD COLUMN `category2` VARCHAR(191) NOT NULL,
    ADD COLUMN `category3` VARCHAR(191) NOT NULL;
