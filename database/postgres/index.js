const pg = require('pg');
const {Pool, Client} = require('pg');

// const pool = new Pool({
//   user: 'spencerng94',
//   host: 'localhost',
//   database: 'calendar',
//   // password: '',
//   port: 5432,
// });

// the pool will emit an error on behalf of any idle clients
// it contains if a backend error or network partition happens

// pool.on('error', (err, client) => {
//   console.error('Unexpected error on idle client', err)
//   process.exit(-1)
// });

const client = new Client({
  // user: 'spencerng94',
  user: 'postgres',
  host: 'localhost',
  // database: 'postgres',
  database: 'calendar',
  // password: '',
  port: '5432',
});
client.connect();

// client.query('SELECT $1::text as message', ['Hello world!'], (err, res) => {
//   console.log(err ? err.stack : res.rows[0].message) // Hello World!
//   client.end()
// });

// module.exports = pool;
// module.exports.poolConnect = poolConnect;
module.exports = client;
// module.exports = {
//   poolConnect: poolConnect,
// };