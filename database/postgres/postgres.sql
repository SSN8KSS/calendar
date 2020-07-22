DROP DATABASE IF EXISTS calendar;
CREATE DATABASE calendar;

DROP TABLE IF EXISTS bookings;
DROP TABLE IF EXISTS users;
DROP TABLE IF EXISTS hotels;

CREATE TABLE hotels (
  hotelId INT PRIMARY KEY,
  hotelName TEXT NOT NULL,
  hotelAddress TEXT NOT NULL,
  nightlyPrice SMALLINT NOT NULL,
  cleaningPrice SMALLINT NOT NULL,
  averageRating SMALLINT NOT NULL,
  numberReviews SMALLINT NOT NULL,
  maxCapacity SMALLINT NOT NULL,
  hotelCity TEXT NOT NULL,
  hotelState TEXT NOT NULL,
  hotelCountry TEXT NOT NULL
);

CREATE TABLE bookings (
  bookingId INT PRIMARY KEY,
  bookingHotelId INT,
  bookingService TEXT NOT NULL,
  adults SMALLINT NOT NULL,
  children SMALLINT NOT NULL,
  checkIn DATE,
  checkOut DATE,
  nightlyPrice SMALLINT NOT NULL,
  cleaningPrice SMALLINT NOT NULL,
  FOREIGN KEY (bookingHotelId) REFERENCES hotels (hotelId)
);

CREATE TABLE users (
  userId INT PRIMARY KEY,
  firstName TEXT NOT NULL,
  lastName TEXT NOT NULL,
  creditCard INT NOT NULL,
  userAddress TEXT NOT NULL,
  userCity TEXT NOT NULL,
  userCountry TEXT NOT NULL,
  userZip INT NOT NULL,
  userEmail TEXT NOT NULL,
  userReviews SMALLINT NOT NULL
);

COPY hotels FROM '/Users/spencerng94/Desktop/HRSF_Files/HRSF_128/SDC/csvPostgres/hotels1.csv' CSV HEADER;
COPY bookings FROM '/Users/spencerng94/Desktop/HRSF_Files/HRSF_128/SDC/csvPostgres/bookings1.csv' CSV HEADER;
COPY users FROM '/Users/spencerng94/Desktop/HRSF_Files/HRSF_128/SDC/csvPostgres/users1.csv' CSV HEADER;

-- COPY hotels FROM '/Users/spencerng94/Desktop/HRSF_Files/HRSF_128/SDC/csvPostgres/hotels2.csv' CSV HEADER;
-- COPY bookings FROM '/Users/spencerng94/Desktop/HRSF_Files/HRSF_128/SDC/csvPostgres/bookings2.csv' CSV HEADER;
-- COPY users FROM '/Users/spencerng94/Desktop/HRSF_Files/HRSF_128/SDC/csvPostgres/users2.csv' CSV HEADER;

-- COPY hotels FROM '/Users/spencerng94/Desktop/HRSF_Files/HRSF_128/SDC/csvPostgres/hotels3.csv' CSV HEADER;
-- COPY bookings FROM '/Users/spencerng94/Desktop/HRSF_Files/HRSF_128/SDC/csvPostgres/bookings3.csv' CSV HEADER;
-- COPY users FROM '/Users/spencerng94/Desktop/HRSF_Files/HRSF_128/SDC/csvPostgres/users3.csv' CSV HEADER;

-- COPY hotels FROM '/Users/spencerng94/Desktop/HRSF_Files/HRSF_128/SDC/csvPostgres/hotels4.csv' CSV HEADER;
-- COPY bookings FROM '/Users/spencerng94/Desktop/HRSF_Files/HRSF_128/SDC/csvPostgres/bookings4.csv' CSV HEADER;
-- COPY users FROM '/Users/spencerng94/Desktop/HRSF_Files/HRSF_128/SDC/csvPostgres/users4.csv' CSV HEADER;

/*
psql postgres < postgres.sql

psql postgres < /Users/spencerng94/Desktop/HRSF_Files/HRSF_128/SDC/calendar/database/postgres/postgres.sql

psql postgres

\list

// To increase memory when running in terminal:
export NODE_OPTIONS="--max-old-space-size=8192"
*/