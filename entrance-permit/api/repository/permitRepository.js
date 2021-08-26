const pool = require('../../postgreSql.js').pool;

exports.createPermit = async (citizenId, permitId, startDate, endDate, club) => {
    await pool.query(`INSERT INTO public.permits(
        permit_id, citizen_id, start_date, end_date, club)
        VALUES ($1, $2, $3, $4, $5)`, [permitId, citizenId, startDate, endDate, club]);
};

exports.getPermits = async (citizenId) => {
    let results = await pool.query(`SELECT * FROM permits p WHERE p.citizen_id = $1`, [citizenId]);
    let permits = results.rows
    return permits;
};