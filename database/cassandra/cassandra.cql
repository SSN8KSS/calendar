DROP KEYSPACE IF EXISTS calendar;
CREATE KEYSPACE calendar;

CREATE TABLE calendar.bookings_by_hotel (
  bookingId uuid,
  HotelId, uuid,
  bookingService text,
  adults smallint,
  children smallint,
  checkIn date,
  checkOut date,
  nightlyPrice smallint,
  cleaningPrice smallint,
  numberReviews smallint,
  PRIMARY KEY (bookingHotelId, checkIn)
)
  WITH comment = 'Q1. Find booking info of a hotel';

CREATE TABLE calendar.bookings_by_user (
  bookingId uuid,
  bookingHotelId, uuid,
  bookingService text,
  adults smallint,
  children smallint,
  checkIn date,
  checkOut date,
  nightlyPrice smallint,
  cleaningPrice smallint,
  creditCard int,
  userID uuid
  PRIMARY KEY (userId)
)
  WITH comment = 'Q2. Find booking info of a user';

CREATE TABLE calendar.
