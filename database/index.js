const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/hotellist', {useNewUrlParser: true, useUnifiedTopology: true});

const db = mongoose.connection;

//Test connection
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log('DB connected')
});
//

const hotelSchema = new mongoose.Schema({
  id: {
    type: Number,
    unique: true
  },
  hotelName: String,
  roomsTotal: Number,
  cheapTicketsPrice: Number,
  travelocityPrice: Number,
  expediaPrice: Number,
  bookingPrice: Number,
  orbitzPrice: Number,
  hotelsPrice: Number,
  lolTravelprice: Number,
  snapTravelPrice: Number,
  priceLinePrice: Number,
  eDreamsPrice: Number
})

const HotelClass = mongoose.model('Hotels', hotelSchema);

exports.model = HotelClass;
exports.connection = db;
