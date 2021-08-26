const Ledger = require('@daml/ledger');
const damlConfig = require('./damlConfig');
const credentials = damlConfig.computeCredentials('Server1');
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
