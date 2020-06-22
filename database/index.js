const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/hotellist', {useNewUrlParser: true, useUnifiedTopology: true});

const db = mongoose.connection;

//Test connection
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log('DB connected');
});
//

const hotelSchema = new mongoose.Schema({
  id: {
    type: Number,
    unique: true
  },
  hotelName: String,
  roomsTotal: Number,
  maxGuestPerRoom: Number,
  vacancy: [ {date: String, isBooked: Boolean} ],
  prices: [ {serviceName: String, price: Number} ]
});

const HotelClass = mongoose.model('Hotels', hotelSchema);

module.exports.model = HotelClass;
module.exports.connection = db;
