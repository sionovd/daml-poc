const pool = require('../../postgreSql.js').pool;

exports.createPassage = async (citizenId, passageId, club) => {
    await pool.query(`INSERT INTO public.passages(
        passage_id, citizen_id, pass_date, club)
        VALUES ($1, $2, CURRENT_DATE, $3)`, [passageId, citizenId, club]);
};

exports.getPassages = async (citizenId) => {
    let results = await pool.query(`SELECT * FROM passages p WHERE p.citizen_id = $1`, [citizenId]);
    let permits = results.rows
    return permits;
};