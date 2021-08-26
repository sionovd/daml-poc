const passageRepository = require('../repository/passageRepository');
const passageConnector = require('../daml/passageConnector');

exports.getPassages = async function(req, res) {
    const params = {...req.params, ...req.query};

    let passages = await passageRepository.getPassages(params.citizenId);
    res.status(200).send(passages);
}

exports.createPassage = async function(req, res) {
    const params = {...req.params, ...req.query};

    let msg = 'Passage created';
    await passageRepository.createPassage(params.citizenId,params.passageId, params.club);
    await passageConnector.createPassageContract(params.citizenId, params.passageId, params.club).catch(r => {
        msg = "Passage created, couldn't add it to daml"
    });
    res.status(200).send(msg);
}