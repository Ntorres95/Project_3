--drop tables if exist
drop table if exists listings;
drop table if exists reviews;
drop table if exists calendar;

--create table format for 3 csv files
CREATE table "calendar" (
	"listing_id" int,
	"date" date,
	"available" boolean,
	"price" varchar(100)
);

CREATE table "listings" (
	"id" int,
	"listing_url" varchar,
	"name" varchar,
	"price_y" decimal,
	"number_of_reviews" int,
	"review_scores_rating" decimal,
	"date" date,
	"available" boolean,
	"summary" text,
	"neigbourhood" varchar(100),
	"latitude" decimal,
	"longitude" decimal,
	"property_type" text,
	"bedrooms" decimal,
	"beds" decimal
);

CREATE table "reviews" (
	"listing_id" int,
	"id" int,
	"date" date,
	"review_id" int,
	"reviewer_name" varchar
);