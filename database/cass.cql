CREATE KEYSPACE hotels;

CREATE TABLE hotels (
  hotelId uuid,
  hotelName text,
  hotelAddress text (50),
  nightlyPrice smallint,
  cleaningPrice smallint,
  averageRating smallint,
  numberReviews smallint,
  maxCapacity smallint,
  hotelCity text (30),
  hotelState, text (30),
  hotelCountry text (30),
  PRIMARY KEY (hotelId)
)

CREATE TABLE bookings (
  bookingId uuid,
  bookingHotelId, uuid,
  bookingService text,
  adults smallint,
  children smallint,
  checkIn date,
  checkOut date,
  nightlyPrice smallint,
  cleaningPrice smallint,
  PRIMARY KEY (bookingId)
)

CREATE TABLE bookings_by_hotel (
  bookingId uuid,
  bookingHotelId, uuid,
  bookingService text,
  adults smallint,
  children smallint,
  checkIn date,
  checkOut date,
  nightlyPrice smallint,
  cleaningPrice smallint,
  PRIMARY KEY (bookingId)
)

CREATE TABLE users (
  userID uuid,
  firstName text,
  lastName text,
  userAddress text,
  userCity, text,
  userCountry, text,
  userZip, smallint,
  userEmail, text,
  userReviews, smallint,
  PRIMARY KEY (userId)
)

CREATE TABLE bookings_by_user (
  userID uuid,
  firstName text,
  lastName text,
  userAddress text,
  userCity, text,
  userCountry, text,
  userZip, smallint,
  userEmail, text,
  userReviews, smallint,
  PRIMARY KEY (userId)
)

CREATE TABLE reviews (
  reviewId uuid,
  reviewHotelId, text,
  reviewTitle text (50),
  reviewText text (500),
  reviewRating smallint,
  reviewUser text (20),
  reviewStayDate date,
  reviewHelpfulCount smallint,
  PRIMARY KEY (reviewId)
)

CREATE TABLE reviews_by_user (
  reviewId uuid,
  reviewHotelId, text,
  reviewTitle text (50),
  reviewText text (500),
  reviewRating smallint,
  reviewUser text (20),
  reviewStayDate date,
  reviewHelpfulCount smallint,
  PRIMARY KEY (reviewId)
)

CREATE TABLE photos_by_hotel (
  hotelPhotoId uuid,
  hotelPhotoHotelId, text,
  hotelPhotoUser text (20),
  hotelPhotoDate date,
  hotelPhotoCategory text,
  hotelPhotoHelpfulCount smallint,
  PRIMARY KEY (hotelPhotoId),
)

CREATE TABLE photos_by_review (
  reviewPhotoId uuid,
  reviewPhotoHotelId, text,
  reviewPhotoUser text (20),
  reviewPhotoDate date,
  reviewPhotoCategory text,
  reviewPhotoHelpfulCount smallint,
  PRIMARY KEY (reviewPhotoId),
)

CREATE TABLE dates_by_hotel {
  hotelDateId uuid,
  hotelId, text,
  hotelDate date,
  dateAvailable boolean,
  PRIMARY KEY (hotelDateId),
}