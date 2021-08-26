const Ledger = require('@daml/ledger');
const damlConfig = require('./damlConfig');
const credentials = damlConfig.computeCredentials('buildingA::12208450222d5b651c38ecc1e2648d54af5960304ce3dba5d328796cef04e7f6b690');
// const credentials = damlConfig.computeCredentials(process.env.issuer);
const Permit = require('@daml.js/daml');

const ledger = new Ledger.default({token: credentials.token, httpBaseUrl: damlConfig.httpBaseUrl, wsBaseUrl: damlConfig.wsBaseUrl});

exports.createPermitContract = async (citizenId, permitId, startDate, endDate, club) => {
    let permitContract = await ledger.fetchByKey(Permit.Permit.LocalPermit, { _1: permitId, _2: credentials.party });
    if (permitContract === null) {
        startDate = new Date(startDate);
        endDate = new Date(endDate);
        const permit = {id: permitId, issuer: credentials.party, master: damlConfig.master, citizenId, club, startDate, endDate};
        permitContract = await ledger.create(Permit.Permit.LocalPermit, permit);
    }
}
