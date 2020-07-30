const faker = require('faker');
const fs = require('fs');
const nf = new Intl.NumberFormat();

const generateSeed = (start, j) => {
  const writeBookings = fs.createWriteStream(`./database/postgres/bookings${j}.csv`);
  const writeTenMillionBookings = (writer, encoding, callback) => {
    let i = 1000000;
    let id = start;

    function write() {
      let ok = true;
      do {
        i -= 1;
        id += 1;

        // 50M users
        const bookingId = id;
        const bookingHotelId = id;
        const bookingUserId = id;
        const bookingService = faker.name.firstName();
        const adults = faker.random.number(1, 4);
        const children = faker.random.number(1, 4);
        const checkIn = faker.date.recent().toISOString().slice(0, 10);
        const checkOut = faker.date.recent().toISOString().slice(0, 10);
        const nightlyPrice = faker.random.number(20, 500);
        const cleaningPrice = faker.random.number(20, 200);

        const data = `${bookingId},${bookingHotelId},${bookingUserId},${bookingService},${adults},${children},${checkIn},${checkOut},${nightlyPrice},${cleaningPrice}\n`;

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

  writeTenMillionBookings(writeBookings, 'utf-8', () => {
    writeBookings.end();
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
