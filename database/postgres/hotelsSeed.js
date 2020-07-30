const faker = require('faker');
const fs = require('fs');
const nf = new Intl.NumberFormat();

const generateSeed = (start, j) => {
  const writeHotels = fs.createWriteStream(`./database/postgres/hotels${j}.csv`);
  const writeTenMillionUsers = (writer, encoding, callback) => {
    let i = 1000000;
    let id = start;

    function write() {
      let ok = true;
      do {
        i -= 1;
        id += 1;

        // 50M users
        const hotelId = id;
        const hotelName = faker.name.findName();
        const nightlyPrice = faker.random.number(20, 500);
        const cleaningPrice = faker.random.number(20, 200);
        const averageRating = faker.random.number(1, 5);
        const numberReviews = faker.random.number(2, 1000);
        const maxCapacity = faker.random.number(1, 6);
        const hotelCity = faker.address.city();
        const hotelState = faker.address.state();

        const data = `${hotelId},${hotelName},${nightlyPrice},${cleaningPrice},${averageRating},${numberReviews},${maxCapacity},${hotelCity},${hotelState}\n`;

        if (i === 0) {
          writer.write(data, encoding, callback);
        } else {
          ok = writer.write(data, encoding);
        }
        if (id % 1000000 === 0) {
          console.log(`Generated ${nf.format(id)}`);
        }
      } while (i > 0 && ok);
      if (i > 0) {
        writer.once('drain', write);
      }
    }
    write();
  };

  writeTenMillionUsers(writeHotels, 'utf-8', () => {
    writeHotels.end();
  });

};

generateSeed(0, 1);
generateSeed(1000000, 2);
generateSeed(2000000, 3);
generateSeed(3000000, 4);
generateSeed(4000000, 5);
generateSeed(5000000, 6);
generateSeed(6000000, 7);
generateSeed(7000000, 8);
generateSeed(8000000, 9);
generateSeed(9000000, 10);
