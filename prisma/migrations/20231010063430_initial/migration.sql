-- CreateTable
CREATE TABLE "Url" (
    "id" SERIAL NOT NULL,
    "nano" TEXT NOT NULL,
    "url" TEXT NOT NULL,

    CONSTRAINT "Url_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Url_nano_key" ON "Url"("nano");
