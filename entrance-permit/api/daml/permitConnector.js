const Ledger = require('@daml/ledger');
const damlConfig = require('./damlConfig');
const credentials = damlConfig.computeCredentials('Tom');

const ledger = Ledger.default({token: credentials.token, httpBaseUrl: damlConfig.httpBaseUrl});

let x;

