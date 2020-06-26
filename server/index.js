const express = require('express');
const app = express();
const port = 8080;
const morgan = require('morgan');
const parser = require('body-parser');
const db = require('../database/index.js');

app.listen(port, () => console.log(`App listening on http://localhost:${port}`));

app.use(morgan('dev'));
app.use(parser.urlencoded({extended: true}));

app.use(express.static('public'));

app.get('/api/calendar/db/:hotelIdOrName', (req, res) => {
  console.log(req.params)
  let q = req.params.hotelIdOrName;
  let parsed = parseInt(q);
  if (parsed) {
    search = {'id': q};
  } else {
    search = {'hotelName': {'$regex': q.slice(0, 1).toUpperCase() + q.slice(1)}};
  }
  db.model.find(search, (err, data) => {
    if (err) {
      console.log('DB QUERY ERROR', err);
      res.status(400).send();
    } else {
      console.log('DB QUERY SUCCESS');
      res.status(200).send(data);
    }
  });
});

app.get('/api/calendar/update/', (req, res) => {
  console.log(req.query);
  db.model.find({'id':req.query.id}, (err, data) => {
    if (err) {
      console.log('DB QUERY ERROR', err);
    } else {
      console.log('DB QUERY SUCCESS');
      sendResponseWithUpdatedData(data, req, res);
    }
  });
});

const sendResponseWithUpdatedData = (data, req, res) => {
  // console.log(req.query.checkin);
  const checkInDate = req.query.checkIn;
  const checkOutDate = req.query.checkOut;
  const guestsNumber = req.query.guestsNumber;
  const dataItem = data[0];
  let roomsNumber = req.query.roomsNumber;
  console.log(checkInDate, checkOutDate, guestsNumber, roomsNumber);
  //check if room quantity < than rooms available --> send null
  //check if guest amount is samller than maxguests -- if not upgrade roomsnumber
  const rej = {err_msg: ''};
  const update = {msg: ''};

  if (dataItem.maxGuestPerRoom < guestsNumber) {
    roomsNumber = Math.ceil(guestsNumber / dataItem.maxGuestPerRoom);
    update['roomsNumber'] = roomsNumber;
    update['msg'] = '<roomsNumber updated>';
  }

  if (dataItem.roomsTotal < roomsNumber) {
    rej['err_msg'] = 'over the limit of rooms available at the property';
    res.status(200).send(rej);
  }


  // for (let i = 0; i < dataItem.vacancy.length;) {
  //   //check if check in date avail
  //   //check if checkout date avail
  //   //check dates between avail

  // }




  // res.status(200).send(data);
}

module.exports = app;