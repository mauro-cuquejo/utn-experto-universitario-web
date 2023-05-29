let pool = require('../bd');

async function getNovedades() {
    let query = "select * from novedades order by id desc";
    let rows = await pool.query(query);
    return rows;
}

async function insertNovedad(obj) {
    try {
        let query = "insert into novedades set ? ";
        let rows = await pool.query(query, [obj]);
        return rows;
    } catch (error) {
        console.log(error);
        throw error;
    }
}

async function deleteNovedadById(id) {
    try {
        let query = "delete from novedades where id = ? ";
        let rows = await pool.query(query, [id]);
        return rows;
    } catch (error) {
        console.log(error);
        throw error;
    }
}

async function getNovedadById(id) {
    try {
        let query = "select * from novedades where id = ? ";
        let rows = await pool.query(query, [id]);

        return rows[0];
    } catch (error) {
        console.log(error);
        throw error;
    }
}

async function modificarNovedadById(obj, id) {
    try {
        let query = "update novedades set ? where id = ? ";
        let rows = await pool.query(query, [obj, id]);
        return rows;
    } catch (error) {
        console.log(error);
        throw error;
    }
}

module.exports = { getNovedades, insertNovedad, deleteNovedadById, getNovedadById, modificarNovedadById }