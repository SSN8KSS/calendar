const faker = require('faker');
const database = require('./index.js');
const moment = require('moment');
const csvWriter = require('csv-write-stream');
const fs = require('fs');
const cliProgress = require('cli-progress');
const perf = require('execution-time')();

// Begin measuring execution time

perf.start();

// seed bookings_by_hotel

const bookings_by_hotel_Generator = (j, start, end, writerNum) => {
  const writeStream1 = fs.createWriteStream(`../csvCassandra/bookings_by_hotel${j}.csv`);
  writerNum.pipe(writeStream1);

  for (var i = start; i < end; i++) {
    writerNum.write(
      {
        bookingId: i + 1,
        hotelId: i + 1,
        bookingService: faker.company.companyName(),
        adults: faker.random.number(1, 4),
        children: faker.random.number(1, 4),
        checkIn: faker.date.recent().toISOString().slice(0, 10),
        checkOut: faker.date.recent().toISOString().slice(0, 10),
        nightlyPrice: faker.random.number(20, 500),
        cleaningPrice: faker.random.number(20, 200),
        numberReviews: faker.random.number(2, 1000),
      },
    );
  }
  () => writerNum.end();
  console.log(`bookings_by_hotel${j} seeding successful`)
};

for (var j = 1; j < 11; j++) {
  var start = 0;
  var end = 1000000;
  var writerNum = csvWriter();
  var writer1 = csvWriter();
  var writer2 = csvWriter();
  var writer3 = csvWriter();
  var writer4 = csvWriter();
  var writer5 = csvWriter();
  var writer6 = csvWriter();
  var writer7 = csvWriter();
  var writer8 = csvWriter();
  var writer9 = csvWriter();
  var writer10 = csvWriter();
  if (j === 2) {
    start = 1000000;
    end = 2000000;
    writerNum = writer2;
  }
  if (j === 3) {
    start = 2000000;
    end = 3000000;
    writerNum = writer3;
  }
  if (j === 4) {
    start = 3000000;
    end = 4000000;
    writerNum = writer4;
  }
  if (j === 5) {
    start = 4000000;
    end = 5000000;
    writerNum = writer5;
  }
  if (j === 6) {
    start = 5000000;
    end = 6000000;
    writerNum = writer6;
  }
  if (j === 7) {
    start = 6000000;
    end = 7000000;
    writerNum = writer7;
  }
  if (j === 8) {
    start = 7000000;
    end = 8000000;
    writerNum = writer8;
  }
  if (j === 9) {
    start = 8000000;
    end = 9000000;
    writerNum = writer9;
  }
  if (j === 10) {
    start = 9000000;
    end = 10000000;
    writerNum = writer10;
  }
  bookings_by_hotel_Generator(j, start, end, writerNum);
}


const bookings_by_user_Generator = () => {
  const writeStream2 = fs.createWriteStream(`../csvCassandra/bookings_by_user${j}.csv`);
  writerNum.pipe(writeStream2);

  for (var i = start; i < end; i++) {
    writerNum.write(
      {
        bookingId: i + 1,
        bookingHotelId: i + 1,
        bookingService: faker.company.companyName(),
        adults: faker.random.number(1, 4),
        children: faker.random.number(1, 4),
        checkIn: faker.date.recent().toISOString().slice(0, 10),
        checkOut: faker.date.recent().toISOString().slice(0, 10),
        nightlyPrice: faker.random.number(20, 500),
        cleaningPrice: faker.random.number(20, 200),
        creditCard: faker.random.number(10000000, 90000000),
        userId: i + 1,
      },
    );
  }
  () => writerNum.end();
  console.log(`bookings_by_user${j} seeding successful`)
};

for (var j = 1; j < 11; j++) {
  var start = 0;
  var end = 1000000;
  var writerNum = csvWriter();
  var writer1 = csvWriter();
  var writer2 = csvWriter();
  var writer3 = csvWriter();
  var writer4 = csvWriter();
  var writer5 = csvWriter();
  var writer6 = csvWriter();
  var writer7 = csvWriter();
  var writer8 = csvWriter();
  var writer9 = csvWriter();
  var writer10 = csvWriter();
  if (j === 2) {
    start = 1000000;
    end = 2000000;
    writerNum = writer2;
  }
  if (j === 3) {
    start = 2000000;
    end = 3000000;
    writerNum = writer3;
  }
  if (j === 4) {
    start = 3000000;
    end = 4000000;
    writerNum = writer4;
  }
  if (j === 5) {
    start = 4000000;
    end = 5000000;
    writerNum = writer5;
  }
  if (j === 6) {
    start = 5000000;
    end = 6000000;
    writerNum = writer6;
  }
  if (j === 7) {
    start = 6000000;
    end = 7000000;
    writerNum = writer7;
  }
  if (j === 8) {
    start = 7000000;
    end = 8000000;
    writerNum = writer8;
  }
  if (j === 9) {
    start = 8000000;
    end = 9000000;
    writerNum = writer9;
  }
  if (j === 10) {
    start = 9000000;
    end = 10000000;
    writerNum = writer10;
  }
  bookings_by_user_Generator(j, start, end, writerNum);
}

//at end of your code
const results = perf.stop();
console.log(results.time); // in milliseconds