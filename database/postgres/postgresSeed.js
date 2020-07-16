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
  const writeHotels = fs.createWriteStream('postgres/hotels.csv');
  writer.pipe(writeHotels);

  for (let i = 0; i < 100; i += 1) {
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
  writer.end();
  console.log('hotel seeding successful')
};

hotelsGenerator();

