const Ledger = require('@daml/ledger');
const damlConfig = require('./damlConfig');
const credentials = damlConfig.computeCredentials('buildingB::12202e5e2228f3f4554d034264408405f7354d0a231ba5e9d2934c543b2dd5a05eb4');
// const credentials = damlConfig.computeCredentials(process.env.issuer);
const Passage = require('@daml.js/daml');

const ledger = new Ledger.default({token: credentials.token, httpBaseUrl: damlConfig.httpBaseUrl, wsBaseUrl: damlConfig.wsBaseUrl});

exports.createPassageContract = async (citizenId, passageId, club) => {
    let passageContract = await ledger.fetchByKey(Passage.Passage.LocalPassage, { _1: passageId, _2: credentials.party });
    if (passageContract === null) {
        const passageDate = new Date();
        const passage = { id: passageId, issuer: credentials.party, master: damlConfig.master, citizenId, club, passageDate, permitId: '333' };
        permitContract = await ledger.create(Passage.Passage.LocalPassage, passage);
    }
}
