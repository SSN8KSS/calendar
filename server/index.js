const express = require('express');
const app = express();
const port = 8080;
const morgan = require('morgan');
const parser = require('body-parser');

app.listen(port, ()=>{console.log(`App listening on http://localhost:${port}`)});

app.use(morgan('dev'));
app.use(parser.urlencoded({extended:true}))