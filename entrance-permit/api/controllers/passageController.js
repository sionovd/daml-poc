const passageRepository = require('../repository/passageRepository');

exports.getPassages = async function(req, res) {
    const params = {...req.params, ...req.query};

    let passages = await passageRepository.getPassages(params.citizenId);
    res.status(200).send(passages);
}

exports.addPassage = async function(req, res) {
    const params = {...req.params, ...req.query};

    await passageRepository.addPassage(params.citizenId,params.passageId, params.club);
    res.status(200).send('Passage added');
}