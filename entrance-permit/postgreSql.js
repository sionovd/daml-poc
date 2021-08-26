const Pool = require('pg').Pool
exports.pool = new Pool({
  user: 'postgres',
  host: '51.124.99.29',
  database: 'Entrance',
  password: 'postgres',
  port: 5432,
})