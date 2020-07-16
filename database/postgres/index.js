const Pool = require('pg').Pool;

const pool = new Pool({
  user: 'root',
  host: 'localhost',
  database: 'calendar',
  password: '',
  port: 3002,
});