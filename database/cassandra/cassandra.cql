DROP KEYSPACE IF EXISTS calendar;
CREATE KEYSPACE calendar WITH REPLICATION = {'class' : 'SimpleStrategy', 'replication_factor' : 1 };

USE calendar;

CREATE TABLE calendar.bookings_by_hotel (
  bookingId int,
  hotelId int,
  bookingService text,
  adults smallint,
  children smallint,
  checkIn date,
  checkOut date,
  nightlyPrice smallint,
  cleaningPrice smallint,
  numberReviews smallint,
  PRIMARY KEY (hotelId, checkIn)
)
  WITH comment = 'Q1. Find booking info of a hotel';

CREATE TABLE calendar.bookings_by_user (
  bookingId int,
  bookingHotelId int,
  bookingService text,
  adults smallint,
  children smallint,
  checkIn date,
  checkOut date,
  nightlyPrice smallint,
  cleaningPrice smallint,
  creditCard int,
  userID int,
  PRIMARY KEY (userId)
)
  WITH comment = 'Q2. Find booking info of a user';

  -- calendar.bookings_by_hotel
COPY calendar.bookings_by_hotel(bookingId, hotelId, bookingService, adults, children, checkIn, checkOut, nightlyPrice, cleaningPrice, numberReviews) FROM '/Users/spencerng94/Desktop/HRSF_Files/HRSF_128/SDC/calendar/database/cassandra/bookings_by_hotel1.csv' with header=true and delimiter =',';

COPY calendar.bookings_by_hotel(bookingId, hotelId, bookingService, adults, children, checkIn, checkOut, nightlyPrice, cleaningPrice, numberReviews) FROM '/Users/spencerng94/Desktop/HRSF_Files/HRSF_128/SDC/calendar/database/cassandra/bookings_by_hotel2.csv' with header=true and delimiter =',';

COPY calendar.bookings_by_hotel(bookingId, hotelId, bookingService, adults, children, checkIn, checkOut, nightlyPrice, cleaningPrice, numberReviews) FROM '/Users/spencerng94/Desktop/HRSF_Files/HRSF_128/SDC/calendar/database/cassandra/bookings_by_hotel3.csv' with header=true and delimiter =',';

COPY calendar.bookings_by_hotel(bookingId, hotelId, bookingService, adults, children, checkIn, checkOut, nightlyPrice, cleaningPrice, numberReviews) FROM '/Users/spencerng94/Desktop/HRSF_Files/HRSF_128/SDC/calendar/database/cassandra/bookings_by_hotel4.csv' with header=true and delimiter =',';

COPY calendar.bookings_by_hotel(bookingId, hotelId, bookingService, adults, children, checkIn, checkOut, nightlyPrice, cleaningPrice, numberReviews) FROM '/Users/spencerng94/Desktop/HRSF_Files/HRSF_128/SDC/calendar/database/cassandra/bookings_by_hotel5.csv' with header=true and delimiter =',';

COPY calendar.bookings_by_hotel(bookingId, hotelId, bookingService, adults, children, checkIn, checkOut, nightlyPrice, cleaningPrice, numberReviews) FROM '/Users/spencerng94/Desktop/HRSF_Files/HRSF_128/SDC/calendar/database/cassandra/bookings_by_hotel6.csv' with header=true and delimiter =',';

COPY calendar.bookings_by_hotel(bookingId, hotelId, bookingService, adults, children, checkIn, checkOut, nightlyPrice, cleaningPrice, numberReviews) FROM '/Users/spencerng94/Desktop/HRSF_Files/HRSF_128/SDC/calendar/database/cassandra/bookings_by_hotel7.csv' with header=true and delimiter =',';

COPY calendar.bookings_by_hotel(bookingId, hotelId, bookingService, adults, children, checkIn, checkOut, nightlyPrice, cleaningPrice, numberReviews) FROM '/Users/spencerng94/Desktop/HRSF_Files/HRSF_128/SDC/calendar/database/cassandra/bookings_by_hotel8.csv' with header=true and delimiter =',';

COPY calendar.bookings_by_hotel(bookingId, hotelId, bookingService, adults, children, checkIn, checkOut, nightlyPrice, cleaningPrice, numberReviews) FROM '/Users/spencerng94/Desktop/HRSF_Files/HRSF_128/SDC/calendar/database/cassandra/bookings_by_hotel9.csv' with header=true and delimiter =',';

COPY calendar.bookings_by_hotel(bookingId, hotelId, bookingService, adults, children, checkIn, checkOut, nightlyPrice, cleaningPrice, numberReviews) FROM '/Users/spencerng94/Desktop/HRSF_Files/HRSF_128/SDC/calendar/database/cassandra/bookings_by_hotel10.csv' with header=true and delimiter =',';

--  calendar.bookings_by_user
COPY calendar.bookings_by_user(bookingId, bookingHotelId, bookingService, adults, children, checkIn, checkOut, nightlyPrice, cleaningPrice, creditCard, userID) FROM '/Users/spencerng94/Desktop/HRSF_Files/HRSF_128/SDC/calendar/database/cassandra/bookings_by_users1.csv' with header=true and delimiter =',';

COPY calendar.bookings_by_user(bookingId, bookingHotelId, bookingService, adults, children, checkIn, checkOut, nightlyPrice, cleaningPrice, creditCard, userID) FROM '/Users/spencerng94/Desktop/HRSF_Files/HRSF_128/SDC/calendar/database/cassandra/bookings_by_users2.csv' with header=true and delimiter =',';

COPY calendar.bookings_by_user(bookingId, bookingHotelId, bookingService, adults, children, checkIn, checkOut, nightlyPrice, cleaningPrice, creditCard, userID) FROM '/Users/spencerng94/Desktop/HRSF_Files/HRSF_128/SDC/calendar/database/cassandra/bookings_by_users3.csv' with header=true and delimiter =',';

COPY calendar.bookings_by_user(bookingId, bookingHotelId, bookingService, adults, children, checkIn, checkOut, nightlyPrice, cleaningPrice, creditCard, userID) FROM '/Users/spencerng94/Desktop/HRSF_Files/HRSF_128/SDC/calendar/database/cassandra/bookings_by_users4.csv' with header=true and delimiter =',';

COPY calendar.bookings_by_user(bookingId, bookingHotelId, bookingService, adults, children, checkIn, checkOut, nightlyPrice, cleaningPrice, creditCard, userID) FROM '/Users/spencerng94/Desktop/HRSF_Files/HRSF_128/SDC/calendar/database/cassandra/bookings_by_users5.csv' with header=true and delimiter =',';

COPY calendar.bookings_by_user(bookingId, bookingHotelId, bookingService, adults, children, checkIn, checkOut, nightlyPrice, cleaningPrice, creditCard, userID) FROM '/Users/spencerng94/Desktop/HRSF_Files/HRSF_128/SDC/calendar/database/cassandra/bookings_by_users6.csv' with header=true and delimiter =',';

COPY calendar.bookings_by_user(bookingId, bookingHotelId, bookingService, adults, children, checkIn, checkOut, nightlyPrice, cleaningPrice, creditCard, userID) FROM '/Users/spencerng94/Desktop/HRSF_Files/HRSF_128/SDC/calendar/database/cassandra/bookings_by_users7.csv' with header=true and delimiter =',';

COPY calendar.bookings_by_user(bookingId, bookingHotelId, bookingService, adults, children, checkIn, checkOut, nightlyPrice, cleaningPrice, creditCard, userID) FROM '/Users/spencerng94/Desktop/HRSF_Files/HRSF_128/SDC/calendar/database/cassandra/bookings_by_users8.csv' with header=true and delimiter =',';

COPY calendar.bookings_by_user(bookingId, bookingHotelId, bookingService, adults, children, checkIn, checkOut, nightlyPrice, cleaningPrice, creditCard, userID) FROM '/Users/spencerng94/Desktop/HRSF_Files/HRSF_128/SDC/calendar/database/cassandra/bookings_by_users9.csv' with header=true and delimiter =',';

COPY calendar.bookings_by_user(bookingId, bookingHotelId, bookingService, adults, children, checkIn, checkOut, nightlyPrice, cleaningPrice, creditCard, userID) FROM '/Users/spencerng94/Desktop/HRSF_Files/HRSF_128/SDC/calendar/database/cassandra/bookings_by_users10.csv' with header=true and delimiter =',';

/*
// To import schema:
cqlsh --request-timeout=6000
cqlsh -e "SOURCE '/Users/spencerng94/Desktop/HRSF_Files/HRSF_128/SDC/calendar/database/cassandra/cassandra.cql'"

// DESCRIBE keyspaces;

// To increase memory when running in terminal:
export NODE_OPTIONS="--max-old-space-size=8192"
export NODE_OPTIONS="--max-old-space-size=16384"
*/

