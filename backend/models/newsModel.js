var pool = require("./db");

async function getNews(params) {
  var query = "SELECT * FROM news";
  var rows = await pool.query(query);
  return rows;
}

async function insertNews(obj) {
  try {
    var query = "INSERT INTO news set ? ";
    var rows = await pool.query(query, [obj]);
    return rows;
  } catch (error) {
    console.log(error);
    throw error;
  }
}

module.exports = { getNews, insertNews };
