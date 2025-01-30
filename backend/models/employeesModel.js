var pool = require("./db");

async function getEmployees(params) {
  let query = `SELECT * FROM employees`;
  let rows = await pool.query(query);
  return rows;
}

module.exports = { getEmployees };