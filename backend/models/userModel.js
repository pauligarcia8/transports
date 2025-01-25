var pool = require('./db');
var md5 = require('md5');

async function getUserByUsernameAndPassword(user, password) {
    try {
        var query = `SELECT * FROM users WHERE user = ? AND password = ? limit 1`;
        var rows = await pool.query(query, [user, md5(password)]);
        return rows[0];
    } catch (error) {
        console.log(error);
        throw error;
    }
}

module.exports = { getUserByUsernameAndPassword };