DROP DATABASE IF EXISTS calendar;
CREATE DATABASE calendar;

\c calendar;

DROP TABLE IF EXISTS bookings;
DROP TABLE IF EXISTS users;
DROP TABLE IF EXISTS hotels;

CREATE TABLE hotels (
  hotelId INT PRIMARY KEY,
  hotelName TEXT NOT NULL,
  nightlyPrice SMALLINT NOT NULL,
  cleaningPrice SMALLINT NOT NULL,
  averageRating SMALLINT NOT NULL,
  numberReviews SMALLINT NOT NULL,
  maxCapacity SMALLINT NOT NULL,
  hotelCity TEXT NOT NULL,
  hotelState TEXT NOT NULL
);

CREATE TABLE users (
  userId INT PRIMARY KEY,
  userHotelId INT,
  firstName TEXT NOT NULL,
  lastName TEXT NOT NULL,
  creditCard INT NOT NULL,
  userAddress TEXT NOT NULL,
  userCity TEXT NOT NULL,
  userZip INT NOT NULL,
  userReviews SMALLINT NOT NULL
);

CREATE TABLE bookings (
  bookingId INT PRIMARY KEY,
  bookingHotelId INT,
  bookingUserId INT,
  bookingService TEXT NOT NULL,
  adults SMALLINT NOT NULL,
  children SMALLINT NOT NULL,
  checkIn DATE,
  checkOut DATE,
  nightlyPrice SMALLINT NOT NULL,
  cleaningPrice SMALLINT NOT NULL
);

-- ALTER TABLE users ADD CONSTRAINT userHotelId_fkey FOREIGN KEY (userHotelId) REFERENCES hotels (hotelId);

-- ALTER TABLE bookings ADD CONSTRAINT bookingHotelId_fkey FOREIGN KEY (bookingHotelId) REFERENCES hotels (hotelId);

-- ALTER TABLE bookings ADD CONSTRAINT bookingUserId_fkey FOREIGN KEY (bookingHotelId) REFERENCES users (userId);


CREATE INDEX hotelIdSerialIndex ON bookings(bookingHotelId);


COPY hotels FROM '/home/ubuntu/projects/calendar/database/postgres/hotels1.csv' WITH CSV HEADER DELIMITER ',';
COPY bookings FROM '/home/ubuntu/projects/calendar/database/postgres/bookings1.csv' CSV HEADER DELIMITER ',';
COPY users FROM '/home/ubuntu/projects/calendar/database/postgres/users1.csv' CSV HEADER DELIMITER ',';

COPY hotels FROM '/home/ubuntu/projects/calendar/database/postgres/hotels2.csv' CSV HEADER;
COPY bookings FROM '/home/ubuntu/projects/calendar/database/postgres/bookings2.csv' CSV HEADER;
COPY users FROM '/home/ubuntu/projects/calendar/database/postgres/users2.csv' CSV HEADER;

COPY hotels FROM '/home/ubuntu/projects/calendar/database/postgres/hotels3.csv' CSV HEADER;
COPY bookings FROM '/home/ubuntu/projects/calendar/database/postgres/bookings3.csv' CSV HEADER;
COPY users FROM '/home/ubuntu/projects/calendar/database/postgres/users3.csv' CSV HEADER;

COPY hotels FROM '/home/ubuntu/projects/calendar/database/postgres/hotels4.csv' CSV HEADER;
COPY bookings FROM '/home/ubuntu/projects/calendar/database/postgres/bookings4.csv' CSV HEADER;
COPY users FROM '/home/ubuntu/projects/calendar/database/postgres/users4.csv' CSV HEADER;

COPY hotels FROM '/home/ubuntu/projects/calendar/database/postgres/hotels5.csv' CSV HEADER;
COPY bookings FROM '/home/ubuntu/projects/calendar/database/postgres/bookings5.csv' CSV HEADER;
COPY users FROM '/home/ubuntu/projects/calendar/database/postgres/users5.csv' CSV HEADER;

COPY hotels FROM '/home/ubuntu/projects/calendar/database/postgres/hotels6.csv' CSV HEADER;
COPY bookings FROM '/home/ubuntu/projects/calendar/database/postgres/bookings6.csv' CSV HEADER;
COPY users FROM '/home/ubuntu/projects/calendar/database/postgres/users6.csv' CSV HEADER;

COPY hotels FROM '/home/ubuntu/projects/calendar/database/postgres/hotels7.csv' CSV HEADER;
COPY bookings FROM '/home/ubuntu/projects/calendar/database/postgres/bookings7.csv' CSV HEADER;
COPY users FROM '/home/ubuntu/projects/calendar/database/postgres/users7.csv' CSV HEADER;

COPY hotels FROM '/home/ubuntu/projects/calendar/database/postgres/hotels8.csv' CSV HEADER;
COPY bookings FROM '/home/ubuntu/projects/calendar/database/postgres/bookings8.csv' CSV HEADER;
COPY users FROM '/home/ubuntu/projects/calendar/database/postgres/users8.csv' CSV HEADER;

COPY hotels FROM '/home/ubuntu/projects/calendar/database/postgres/hotels9.csv' CSV HEADER;
COPY bookings FROM '/home/ubuntu/projects/calendar/database/postgres/bookings9.csv' CSV HEADER;
COPY users FROM '/home/ubuntu/projects/calendar/database/postgres/users9.csv' CSV HEADER;

COPY hotels FROM '/home/ubuntu/projects/calendar/database/postgres/hotels10.csv' CSV HEADER;
COPY bookings FROM '/home/ubuntu/projects/calendar/database/postgres/bookings10.csv' CSV HEADER;
COPY users FROM '/home/ubuntu/projects/calendar/database/postgres/users10.csv' CSV HEADER;

/*
psql postgres < postgres.sql

psql postgres < /home/ubuntu/projects/calendar/database/postgres/postgres.sql

psql postgres

\list

// To increase memory when running in terminal:
export NODE_OPTIONS="--max-old-space-size=8192"

Trace Session:
TRACING ON
*/