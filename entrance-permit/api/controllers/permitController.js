const permitRepository = require('../repository/permitRepository');
// const permitConnector = require('../daml/permitConnector');

exports.getPermits = async function(req, res) {
    const params = {...req.params, ...req.query};

    let permits = await permitRepository.getPermits(params.citizenId);
    res.status(200).send(permits);
}

exports.createPermit = async function(req, res) {
    const params = {...req.params, ...req.query};

    let msg = 'Permit created';
    await permitRepository.createPermit(params.citizenId, params.permitId, params.startDate, params.endDate, params.club);
    // permitConnector.createPermitContract(params.citizenId, params.permitId, params.startDate, params.endDate, params.club).catch(r => {
        // msg = "Permit created, couldn't add it to daml"
    // });
    res.status(200).send(msg);
}