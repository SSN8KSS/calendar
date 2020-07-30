// const pool = require('../database/postgres/index.js');
const client = require('../database/postgres/index.js');

const getHotelById = (hotelId, callback) => {
  const query = `SELECT * FROM hotels WHERE hotelId = ${hotelId}`;
  // const query = `SELECT * FROM hotels WHERE hotelId = $1`;
  console.log(typeof hotelId, 'logging typeof')
  // hotelId = parseInt(hotelId);
  // client.query(query, callback);
  client.query(query, callback);
};

const getBookingById = (bookingId, callback) => {
  const query = `SELECT * FROM bookings WHERE bookingId = ${bookingId}`;
  // const query = `SELECT * FROM hotels WHERE bookingId = $1`;
  console.log(typeof bookingId, 'logging typeof')
  // hotelId = parseInt(hotelId);
  // client.query(query, callback);
  client.query(query, callback);
};


module.exports.getHotelById = getHotelById;
module.exports.getBookingById = getBookingById;