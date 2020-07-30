const newrelic = require('newrelic');
const express = require('express');
const app = express();
const port = 3001;
const path = require('path');
const morgan = require('morgan');
const parser = require('body-parser');
// const db = require('../database/index.js');
const { pool, poolConnect, client } = require('../database/postgres/index.js')
const moment = require('moment');
const controllers = require('./controllers.js');
const cors = require('cors');
app.use(cors());

app.use(morgan('dev'));
app.use(parser.json())
app.use(parser.urlencoded({extended: true}));

app.use(express.static('public'));

app.listen(port, () => console.log(`App listening on http://localhost:${port}`));

// Get Hotel by Hotel ID
app.get('/api/calendar/hotels/:hotelId', controllers.getHotel);

// Get Booking by Booking ID
app.get('/api/calendar/bookings/:bookingId', controllers.getBooking);

module.exports = app;