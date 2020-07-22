const faker = require('faker');
const database = require('./index.js');
const moment = require('moment');
const csvWriter = require('csv-write-stream');
const fs = require('fs');
const cliProgress = require('cli-progress');
const perf = require('execution-time')();

const writer1 = csvWriter();
const writer2 = csvWriter();

// Begin measuring execution time
perf.start();

// seed bookings_by_hotel

const bookings_by_hotel_Generator = () => {
  const writeStream1 = fs.createWriteStream('../csvCassandra/bookings_by_hotel.csv');
  writer1.pipe(writeStream1);

  for (let i = 0; i < 10000000; i += 1) {
    writer1.write(
      {
        bookingId: i + 100,
        hotelId: i + 1,
        bookingService: faker.company.companyName(),
        adults: faker.random.number(1, 4),
        children: faker.random.number(1, 4),
        checkIn: faker.date.future(),
        checkOut: faker.date.future(),
        nightlyPrice: faker.random.number(20, 500),
        cleaningPrice: faker.random.number(20, 200),
        numberReviews: faker.random.number(2, 1000),
      },
    );
  }
  () => writer1.end();
  console.log('bookings_by_hotel seeding succesful')
};

bookings_by_hotel_Generator();

const bookings_by_user_Generator = () => {
  const writeStream2 = fs.createWriteStream('../csvCassandra/bookings_by_user.csv');
  writer2.pipe(writeStream2);

  for (let i = 0; i < 10000000; i += 1) {
    writer2.write(
      {
        bookingId: i + 100,
        bookingHotelId: i + 1,
        bookingService: faker.company.companyName(),
        adults: faker.random.number(1, 4),
        children: faker.random.number(1, 4),
        checkIn: faker.date.future(),
        checkOut: faker.date.future(),
        nightlyPrice: faker.random.number(20, 500),
        cleaningPrice: faker.random.number(20, 200),
        creditCard: faker.random.number(10000000000000000, 90000000000000000),
        userId: i + 1,
      },
    );
  }
  () => writer2.end();
  console.log('bookings_by_user seeding succesful')
};

bookings_by_user_Generator();

//at end of your code
const results = perf.stop();
console.log(results.time); // in milliseconds