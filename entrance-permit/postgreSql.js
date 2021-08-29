const Pool = require('pg').Pool
exports.pool = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'Entrance',
  password: 'postgres',
  port: 5432,
})