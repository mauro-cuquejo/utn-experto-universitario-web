let pool = require('../bd');
let md5 = require('md5');

async function getUserByUsenameAndPassword(user, password) {
    try {
        let query = "select * from usuarios where usuario = ? and password = ? limit 1";
        let rows = await pool.query(query, [user, md5(password)]);
        return rows[0];

    } catch (error) {
        throw error;

    }
}

module.exports = { getUserByUsenameAndPassword }