const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/hotellist', {useNewUrlParser: true, useUnifiedTopology: true});

const db = mongoose.connection;

//Test connection
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log('DB connected')
});

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
  snapTravelPrice: Number
})

const HotelClass = mongoose.model('Hotels', hotelSchema);

// const newItem = new HotelClass({
//   id: 1,
//   hotelName: "Marriot",
//   roomsTotal: 230,
//   cheapTicketsPrice: 218,
//   travelocityPrice: 218,
//   expediaPrice: 218,
//   bookingPrice: 245,
//   orbitzPrice: 245,
//   hotelsPrice: 245,
//   lolTravelprice: 218,
//   snapTravelPrice: 280
// })

// newItem.save((err,data)=>{
//   if (err) {
//     console.log(err)
//   } else {
//     console.log('SUCCESS')
//     console.log(data)
//   }
// })