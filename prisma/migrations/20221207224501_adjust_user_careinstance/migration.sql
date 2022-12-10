-- AlterTable
ALTER TABLE "CareInstance" ALTER COLUMN "endDate" DROP NOT NULL;

-- AlterTable
ALTER TABLE "User" ADD COLUMN     "createdDate" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "firstName" TEXT NOT NULL DEFAULT 'Amazing Human',
ADD COLUMN     "lastName" TEXT;
