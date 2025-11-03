-- DropIndex
DROP INDEX `Client_google_id_key` ON `client`;

-- DropIndex
DROP INDEX `Client_phoneNumber_key` ON `client`;

-- AlterTable
ALTER TABLE `client` MODIFY `phoneNumber` VARCHAR(191) NULL;
