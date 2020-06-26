const express = require('express');
const app = express();
const port = 8080;
const morgan = require('morgan');
const parser = require('body-parser');
const db = require('../database/index.js');
const moment = require('moment');

app.listen(port, () => console.log(`App listening on http://localhost:${port}`));

app.use(morgan('dev'));
app.use(parser.urlencoded({extended: true}));

app.use(express.static('public'));

app.get('/api/calendar/db/:hotelIdOrName', (req, res) => {
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

const sendResponseWithUpdatedData = (data, req, res) => {
  const checkInDate = moment(req.query.checkIn).format('YYYY-MM-DD');
  const checkOutDate = moment(req.query.checkOut).format('YYYY-MM-DD');
  const guestsNumber = req.query.guestsNumber;
  const dataItem = data[0];
  let roomsNumber = req.query.roomsNumber;
  let response = true;
  let newData = [...data];
  let rej = [{'err_msg': ''}];
  let totalNights;

  if (dataItem.maxGuestPerRoom < guestsNumber) {
    roomsNumber = Math.ceil(guestsNumber / dataItem.maxGuestPerRoom);
  }

  if (dataItem.roomsTotal < roomsNumber) {
    rej[0]['err_msg'] = '<over the limit of rooms available at the property>';
    response = false;
  }

  let checkInIndex;
  let checkOutIndex;
  for (let i = 0; i < dataItem.vacancy.length; i ++) {
    if (dataItem.vacancy[i].date === checkInDate) {
      checkInIndex = i;
    }
    if (dataItem.vacancy[i].date === checkOutDate) {
      checkOutIndex = i;
    }
  }
  let timeGap = dataItem.vacancy.slice(checkInIndex, checkOutIndex);
  totalNights = timeGap.length;
  for (let j = 0; j < timeGap.length; j++) {
    if (timeGap[j].isBooked) {
      rej[0]['err_msg'] += '<your dates are not available>';
      response = false;
      break;
    }
  }
  for (let k = 0; k < newData[0].prices.length; k++) {
    newData[0].prices[k].price *= totalNights;
  }

  if (response) {
    res.status(200).send(newData);
  } else {
    res.status(200).send(rej);
  }
};

app.get('/api/calendar/update/', (req, res) => {
  db.model.find({'id': req.query.id}, (err, data) => {
    if (err) {
      console.log('DB QUERY ERROR', err);
    } else {
      console.log('DB QUERY SUCCESS');
      sendResponseWithUpdatedData(data, req, res);
    }
  });
});

module.exports = app;