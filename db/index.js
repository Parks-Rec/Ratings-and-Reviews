const { Pool, Client } = require("pg");
require('dotenv').config()


//make our connection with posgreSQL

const pool = new Pool({
  user: process.env.USER,
  host: process.env.HOST,
  database: process.env.DATABASE,
  password: process.env.PASSWORD,
  port:  process.env.PORT,
  max: 20,

})

// idleTimeoutMillis: 30000,
//   connectionTimeoutMillis: 2000,
//congifure the user,host, and other properties
// pool.on('error', (err, client) => {
//   console.log('Error: ', err)
// });

// pool.connect()

module.exports = pool; // pass the connection to the model file


// const pool = new Pool({
//   user: 'louisayonzon',
//   host: 'localhost',
//   database: 'postgres',
//   password: '',
//   port: 5432,
//   max: 20,
//   idleTimeoutMillis: 30000,
//   connectionTimeoutMillis: 2000,
// })