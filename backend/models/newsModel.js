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

async function deleteNewById(id) {
  var query = 'DELETE FROM news WHERE id = ?';
  var rows = await pool.query(query, [id]);
  return rows;
}

async function getNewById(id) {
  var query = "SELECT * FROM news WHERE id = ? ";
  var rows = await pool.query(query, [id]);
  return rows[0];
}

async function editNewById(obj, id) {
  try {
    var query = 'UPDATE news SET ? WHERE id = ?';
    var rows = await pool.query(query, [obj, id]);
    return rows;
  } catch (error) {
    console.log(error);
    throw error;
  }
}

module.exports = { getNews, insertNews, deleteNewById, getNewById, editNewById };
