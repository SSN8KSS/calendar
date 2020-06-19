const express = require('express');
const app = express();
const port = 8080;
const morgan = require('morgan');
const parser = require('body-parser');
const db = require('../database/index.js');

app.listen(port, ()=>{console.log(`App listening on http://localhost:${port}`)});

app.use(morgan('dev'));
app.use(parser.urlencoded({extended:true}))

app.get('/api/calendar/:hotelId', (req,res)=>{
  const q = req.params.hotelId
  db.model.find({id:q}, (err, data)=>{
    if (err) {
      console.log('DB ACCESS ERROR', err);
      res.status(400).send();
    } else {
      console.log('DB QUERY SUCCESS');
      res.status(200).send(data);
    }
  })
})