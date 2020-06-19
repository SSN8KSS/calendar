const faker = require('faker');
const database = require('./index.js');

const random = (min, max) => {
  const temp = min + Math.random() * (max - min);
  return temp < min * 1.1 || temp > max * 0.9 ? null : temp;
};

const generateSampleData = (numberOfDataToGenerate, keys) => {
  const sampleData = [];
  const arr = keys;

  for (var i = 1; i <= numberOfDataToGenerate; i++) {
    let obj = {'id': i};
    let randomHotelName = faker.random.word();
    randomHotelName = randomHotelName.split(' ').shift();
    randomHotelName = `${randomHotelName.slice(0, 1).toUpperCase() + randomHotelName.slice(1)} Hotel`;
    arr.forEach((title) =>{
      if (title === 'hotelName') {
        obj[title] = randomHotelName;
      } else if (title === 'roomsTotal') {
        obj[title] = Math.floor(45 + Math.random() * (145 - 45));
      } else {
        obj[title] = Math.floor(random(120, 280));
      }
    });

    sampleData.push(obj);
  }
  return sampleData;
};

const generatedData = generateSampleData(100, [
  'hotelName',
  'roomsTotal',
  'cheapTicketsPrice',
  'travelocityPrice',
  'expediaPrice',
  'bookingPrice',
  'orbitzPrice',
  'hotelsPrice',
  'lolTravelprice',
  'snapTravelPrice',
  'priceLinePrice',
  'eDreamsPrice'
]);

const insertSampleData = function(data) {
  database.model.create(data)
    .then((result) => {
      console.log(`Data insertion SUCCESS. ${result.length} items inserted.`);
      database.connection.close();
    })
    .catch((err) => console.log('Data insertion FAILED.', err));
};

insertSampleData(generatedData);
