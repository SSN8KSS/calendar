const models = require('./models.js');

module.exports = {
  getHotel: (req, res) => {
    const { hotelId } = req.params;
    console.log(req.params, 'logging from getBookings');
    console.log(hotelId, 'logging hotelId, line 7')
    models.getHotelById(hotelId, (err, data) => {
      if (err) {
        console.log(err, 'error from getBookings')
        res.status(404).send(err);
      } else {
        console.log(data, 'logging data from getBookings');
        console.log(data.rows, 'logging rows from getHotel')
        res.status(200).send(data);
      }
    });
  },

  getBooking: (req, res) => {
    const { bookingId } = req.params;
    console.log(req.params, 'logging from getBookings');
    console.log(bookingId, 'logging bookingId, line 7')
    models.getBookingById(bookingId, (err, data) => {
      if (err) {
        console.log(err, 'error from getBookings')
        res.status(404).send(err);
      } else {
        console.log(data, 'logging data from getBookings');
        console.log(data.rows, 'logging rows from getHotel')
        res.status(200).send(data);
      }
    });
  },
};