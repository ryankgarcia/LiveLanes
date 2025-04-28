set client_min_messages to warning;

-- DANGER: this is NOT how to do it in the real world.
-- `drop schema` INSTANTLY ERASES EVERYTHING.
drop schema "public" cascade;

create schema "public";

CREATE TABLE "users" (
  "userId" serial PRIMARY KEY,
  "username" text UNIQUE NOT NULL,
  "hashedPassword" text NOT NULL,
  "role" text,
  "createdAt" timestamptz NOT NULL DEFAULT (now())
);

CREATE TABLE "vehicles" (
  "vehicleId" serial PRIMARY KEY,
  "vin" text UNIQUE,
  "year" integer,
  "make" text,
  "model" text,
  "trim" text,
  "bodyType" text,
  "exteriorColor" text,
  "interiorColor" text,
  "transmission" text,
  "engine" text,
  "fuelType" text,
  "mileage" integer,
  "sellerName" text,
  "conditionReport" text,
  "damages" text,
  "startingPrice" integer,
  "reservePrice" integer,
  "imageUrl" text, -- this is new
  "createdAt" timestamptz NOT NULL DEFAULT (now())
);

CREATE TABLE "vehicleImages" (
  "vehicleImagesId" serial PRIMARY KEY,
  "vehicleId" integer,
  "imageUrl" text
);

CREATE TABLE "auctions" (
  "auctionId" serial PRIMARY KEY,
  "vehicleId" integer,
  "startTime" timestamptz,
  "endTime" timestamptz,
  "startingBid" integer,
  "closingBid" integer,
  "winnerId" integer
);

CREATE TABLE "bids" (
  "bidId" serial PRIMARY KEY,
  "auctionId" integer,
  "bidderId" integer,
  "bidAmount" integer,
  "createdAt" timestamptz NOT NULL DEFAULT (now())
);

CREATE TABLE "watchlist" (
  "userId" integer,
  "vehicleId" integer,
  PRIMARY KEY ("userId", "vehicleId")
);

CREATE TABLE "comments" (
  "commentId" serial PRIMARY KEY,
  "userId" integer,
  "vehicleId" integer,
  "content" text NOT NULL,
  "createdAt" timestamptz NOT NULL DEFAULT (now())
);

COMMENT ON COLUMN "users"."role" IS 'buyer, seller';

COMMENT ON COLUMN "vehicles"."transmission" IS 'automatic, manual';

COMMENT ON COLUMN "vehicles"."fuelType" IS 'gasoline, diesel';

ALTER TABLE "vehicleImages" ADD FOREIGN KEY ("vehicleId") REFERENCES "vehicles" ("vehicleId");

ALTER TABLE "auctions" ADD FOREIGN KEY ("vehicleId") REFERENCES "vehicles" ("vehicleId");

ALTER TABLE "auctions" ADD FOREIGN KEY ("winnerId") REFERENCES "users" ("userId");

ALTER TABLE "bids" ADD FOREIGN KEY ("auctionId") REFERENCES "auctions" ("auctionId");

ALTER TABLE "bids" ADD FOREIGN KEY ("bidderId") REFERENCES "users" ("userId");

ALTER TABLE "watchlist" ADD FOREIGN KEY ("userId") REFERENCES "users" ("userId");

ALTER TABLE "watchlist" ADD FOREIGN KEY ("vehicleId") REFERENCES "vehicles" ("vehicleId");

ALTER TABLE "comments" ADD FOREIGN KEY ("userId") REFERENCES "users" ("userId");

ALTER TABLE "comments" ADD FOREIGN KEY ("vehicleId") REFERENCES "vehicles" ("vehicleId");
