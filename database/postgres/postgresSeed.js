const faker = require('faker');
const database = require('./index.js');
const csvWriter = require('csv-write-stream');
const fs = require('fs');
const cliProgress = require('cli-progress');
const perf = require('execution-time')();

var writer1 = csvWriter();

// Begin measuring execution time
perf.start();

// Seed Hotels

const hotelsGenerator = (j, start, end, writerNum) => {
  const writeHotels = fs.createWriteStream(`../csvPostgres/hotels${j}.csv`); // change file name for 1,2,3,4

  writerNum.pipe(writeHotels);

  for (var i = start; i < end; i++) { // change i to 2.5 mil, run 4x
    writerNum.write(
      {
        hotelId: i + 1,
        hotelName: faker.company.companyName(),
        hotelAddress: faker.address.streetAddress(),
        nightlyPrice: faker.random.number(20, 500),
        cleaningPrice: faker.random.number(20, 200),
        averageRating: faker.random.number(1, 5),
        numberReviews: faker.random.number(2, 1000),
        maxCapacity: faker.random.number(1, 6),
        hotelCity: faker.address.city(),
        hotelState: faker.address.state(),
        hotelCountry: faker.address.country(),
      },
    );
  }
  () => writerNum.end();
  console.log(`hotels${j} seeding successful`)
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
  hotelsGenerator(j, start, end, writerNum);
}


// Seed Bookings

const bookingsGenerator = () => {
  const writeBookings = fs.createWriteStream(`../csvPostgres/bookings${j}.csv`);
  writerNum.pipe(writeBookings);

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
      },
    );
  }
  () => writerNum.end();
  console.log(`bookings${j} seeding successful`)

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
  bookingsGenerator(j, start, end, writerNum);
}

// Seed Users

const usersGenerator = () => {
  const writeUsers = fs.createWriteStream(`../csvPostgres/users${j}.csv`);
  writerNum.pipe(writeUsers);

  for (var i = start; i < end; i++) {
    writerNum.write(
      {
        userId: i + 1,
        firstName: faker.name.firstName(),
        lastName: faker.name.lastName(),
        creditCard: faker.random.number(1000000, 9000000),
        userAddress: faker.address.streetAddress(),
        userCity: faker.address.city(),
        userCountry: faker.address.country(),
        userZip: faker.address.zipCode().slice(0, 5),
        userEmail: faker.internet.email(),
        userReviews: faker.random.number(1, 80),
      },
    );
  }
  () => writerNum.end();
  console.log(`users${j} seeding successful`)
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
  usersGenerator(j, start, end, writerNum);
}

//at end of your code
const results = perf.stop();
console.log(results.time); // in milliseconds