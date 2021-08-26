const Ledger = require('@daml/ledger');
const damlConfig = require('./damlConfig');
const credentials = damlConfig.computeCredentials('Dani');
const User = require('@daml.js/my-project-name');

const ledger = new Ledger.default({token: credentials.token, httpBaseUrl: damlConfig.httpBaseUrl, wsBaseUrl: damlConfig.wsBaseUrl});
const user = {username: credentials.party, following: []};

exports.createPassageContract = async (citizenId, passageId, club) => {
    let userContract = await ledger.fetchByKey(User.User.User, credentials.party);
    if (userContract === null) {
        const user = {username: credentials.party, following: []};
        userContract = await ledger.create(User.User.User, user);
        let x;
    }
    let x;
}
