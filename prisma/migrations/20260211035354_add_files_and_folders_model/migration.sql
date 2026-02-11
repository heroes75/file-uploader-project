-- CreateTable
CREATE TABLE "Files" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "destinationId" TEXT NOT NULL,

    CONSTRAINT "Files_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Folder" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "destination" TEXT NOT NULL,
    "parentId" TEXT,

    CONSTRAINT "Folder_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Files_name_key" ON "Files"("name");

-- CreateIndex
CREATE UNIQUE INDEX "Folder_destination_key" ON "Folder"("destination");

-- AddForeignKey
ALTER TABLE "Files" ADD CONSTRAINT "Files_destinationId_fkey" FOREIGN KEY ("destinationId") REFERENCES "Folder"("destination") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Folder" ADD CONSTRAINT "Folder_parentId_fkey" FOREIGN KEY ("parentId") REFERENCES "Folder"("destination") ON DELETE SET NULL ON UPDATE CASCADE;
