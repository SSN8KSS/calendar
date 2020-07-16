const faker = require('faker');
const database = require('./index.js');
const moment = require('moment');
const csvWriter = require('csv-write-stream');
const fs = require('fs');
const cliProgress = require('cli-progress');

var writer = csvWriter();

const hotelsBar = new cliProgress.SingleBar({}, cliProgress.Presets.shades_classic);
const bookingsBar = new cliProgress.SingleBar({}, cliProgress.Presets.shades_classic);
const usersBar = new cliProgress.SingleBar({}, cliProgress.Presets.shades_classic);

// Seed Hotels

const hotelsGenerator = () => {
  const writeHotels = fs.createWriteStream('../csvPostgres/hotels.csv');
  writer.pipe(writeHotels);

  for (let i = 0; i < 10000000; i += 1) {
    writer.write(
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
  () => writer.end();
  console.log('hotel seeding successful')
};

hotelsGenerator();

// Seed Bookings

const bookingsGenerator = () => {
  const writeBookings = fs.createWriteStream('../csvPostgres/bookings.csv');
  writer.pipe(writeBookings);

  for (let i = 0; i < 10000000; i += 1) {
    writer.write(
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
      },
    );
  }
  () => writer.end();
  console.log('booking seeding successful')

};

bookingsGenerator();

// Seed Users

const usersGenerator = () => {
  const writeUsers = fs.createWriteStream('../csvPostgres/users.csv');
  writer.pipe(writeUsers);

  for (let i = 0; i < 10000000; i += 1) {
    writer.write(
      {
        userId: i + 1,
        firstName: faker.name.firstName(),
        lastName: faker.name.lastName(),
        creditCard: faker.random.number(10000000000000000, 90000000000000000),
        userAddress: faker.address.streetAddress(),
        userCity: faker.address.city(),
        userCountry: faker.address.country(),
        userZip: faker.address.zipCode(),
        userEmail: faker.internet.email(),
        userReviews: faker.random.number(1, 80),
      },
    );
  }
  () => writer.end();
  console.log('users seeding successful')
};

usersGenerator();