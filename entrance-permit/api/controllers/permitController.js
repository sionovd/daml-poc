const permitRepository = require('../repository/permitRepository');

exports.getPermits = async function(req, res) {
    const params = {...req.params, ...req.query};

    let permits = await permitRepository.getPermits(params.citizenId);
    res.status(200).send(permits);
}

exports.addPermit = async function(req, res) {
    const params = {...req.params, ...req.query};

    await permitRepository.addPermit(params.citizenId, params.permitId, params.startDate, params.endDate, params.club);
    res.status(200).send('Permit added');
}