const faker = require('faker');
const fs = require('fs');
const nf = new Intl.NumberFormat();

const generateSeed = (start, j) => {
  const writeUsers = fs.createWriteStream(`./database/postgres/users${j}.csv`);
  const writeTenMillionUsers = (writer, encoding, callback) => {
    let i = 1000000;
    let id = start;

    function write() {
      let ok = true;
      do {
        i -= 1;
        id += 1;

        // 50M users
        const userId = id;
        const userHotelId = id;
        const firstName = faker.name.firstName();
        const lastName = faker.name.lastName();
        const creditCard = faker.random.number(1000000, 9000000);
        const userAddress = faker.address.streetAddress();
        const userCity = faker.address.city();
        const userZip = faker.address.zipCode().slice(0, 5);
        const userReviews = faker.random.number(1, 80);

        const data = `${userId},${userHotelId},${firstName},${lastName},${creditCard},${userAddress},${userCity},${userZip},${userReviews}\n`;

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

  writeTenMillionUsers(writeUsers, 'utf-8', () => {
    writeUsers.end();
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
