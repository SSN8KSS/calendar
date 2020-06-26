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
  res.status(200).send('ok');
})

module.exports = app;