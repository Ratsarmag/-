const sql = require('mssql');

const config = {
  server: 'Ratsarmag\\SQLEXPRESS',
  database: 'practice', 
  port: 1433,
  trustedConnection: true, 
  trustServerCertificate: true
};

const poolPromise = new sql.ConnectionPool(config)
  .connect()
  .then(pool => {
    console.log('Connected to MSSQL');
    return pool;
  })
  .catch(err => {
    console.error('Database Connection Failed! Bad Config:', err);
    console.error('Original Error:', err.originalError);
  });

module.exports = {
  sql,
  poolPromise
};