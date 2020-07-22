const Pool = require('pg').Pool;

const pool = new Pool({
  user: 'root',
  host: 'localhost',
  database: 'calendar',
  password: 'postgres123',
  port: 3002,
});