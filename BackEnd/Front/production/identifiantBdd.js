
// module.js

require('dotenv').config();

const host = process.env.hostLocal;
const user = process.env.userLocal;
const password = process.env.passwordLocal;
const database = process.env.databaseLocal;

const databaseTable = process.env.databaseTableLocal;

module.exports = {
  host,
  user,
  password,
  database,
  databaseTable
};