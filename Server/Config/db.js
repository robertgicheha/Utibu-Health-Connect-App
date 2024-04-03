const sql = require('mssql');

const config = {
  user: 'your-username',
  password: 'your-password',
  server: 'your-server',
  database: 'your-database',
  options: {
    encrypt: true,
    enableArithAbort: true,
  },
};

async function connectToDatabase() {
  try {
    await sql.connect(config);
    console.log('Connected to the database');
  } catch (err) {
    console.error('Error connecting to the database:', err);
  }
}

module.exports = {
  sql,
  connectToDatabase,
};
