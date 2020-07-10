DROP DATABASE IF EXISTS hotels;
CREATE DATABASE IF NOT EXISTS hotels;
USE hotels;

CREATE TABLE hotels {
  hotelId UUID,
  hotelName TEXT NOT NULL,
  hotelAddress TEXT NOT NULL (50),
  nightlyPrice INT NOT NULL,
  cleaningPrice INT NOT NULL,
  averageRating INT NOT NULL,
  numberReviews INT NOT NULL,
  maxCapacity INT NOT NULL,
  hotelCity TEXT NOT NULL (30),
  hotelState, TEXT NOT NULL (30),
  hotelCountry TEXT NOT NULL (30),
  PRIMARY KEY (hotelId)
};

CREATE TABLE bookings {
  bookingId UUID,
  bookingHotelId, UUID,
  bookingService TEXT NOT NULL,
  adults SMALLINT NOT NULL,
  children SMALLINT NOT NULL,
  checkIn DATE,
  checkOut DATE,
  nightlyPrice SMALLINT NOT NULL,
  cleaningPrice SMALLINT NOT NULL,
  PRIMARY KEY (bookingId),
  FOREIGN KEY (bookingHotelId) REFERENCES hotels (hotelId)
};

CREATE TABLE users {
  userID UUID,
  firstName TEXT NOT NULL,
  lastName TEXT NOT NULL,
  userAddress TEXT NOT NULL,
  userCity, TEXT NOT NULL,
  userCountry, TEXT NOT NULL,
  userZip, SMALLINT NOT NULL,
  userEmail, TEXT NOT NULL,
  userReviews, SMALLINT NOT NULL,
  PRIMARY KEY (userId),
}

CREATE TABLE reviews {
  reviewId UUID,
  reviewHotelId, TEXT NOT NULL,
  reviewTitle TEXT NOT NULL (50),
  reviewText TEXT NOT NULL (500),
  reviewRating SMALLINT NOT NULL,
  reviewUser TEXT NOT NULL (20),
  reviewStayDate DATE,
  reviewHelpfulCount SMALLINT NOT NULL,
  PRIMARY KEY (reviewId),
  FOREIGN KEY (reviewHotelId) REFERENCES hotels (hotelId)
}

CREATE TABLE hotelPhotos {
  hotelPhotoId UUID,
  hotelPhotoHotelId, TEXT NOT NULL,
  hotelPhotoUser TEXT NOT NULL (20),
  hotelPhotoDate DATE,
  hotelPhotoCategory TEXT NOT NULL,
  hotelPhotoHelpfulCount SMALLINT NOT NULL,
  PRIMARY KEY (hotelPhotoId),
  FOREIGN KEY (hotelPhotoHotelId) REFERENCES hotels (hotelId)
}

CREATE TABLE reviewPhotos {
  reviewPhotoId UUID,
  reviewPhotoHotelId, TEXT NOT NULL,
  reviewPhotoUser TEXT NOT NULL (20),
  reviewPhotoDate DATE,
  reviewPhotoCategory TEXT NOT NULL,
  reviewPhotoHelpfulCount SMALLINT NOT NULL,
  PRIMARY KEY (reviewPhotoId),
  FOREIGN KEY (reviewPhotoHotelId) REFERENCES hotels (hotelId)
}

CREATE TABLE hotelDates {
  hotelDateId UUID,
  hotelId, TEXT NOT NULL,
  hotelDate DATE,
  dateAvailable BOOLEAN,
  PRIMARY KEY (hotelDateId),
  FOREIGN KEY (hotelId) REFERENCES hotels (hotelId)
}
