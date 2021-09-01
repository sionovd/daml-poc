const encode = require('jwt-simple');

const ledgerId = process.env.ledgerId;

const APPLICATION_ID = 'daml';
const SECRET_KEY = 'secret';

function computeToken(party) {
    const payload = {
      "https://daml.com/ledger-api": {
        "ledgerId": ledgerId,
        "applicationId": APPLICATION_ID,
        "actAs": [party]
      }
    };
    return encode.encode(payload, SECRET_KEY, 'HS256');
}
  
exports.computeCredentials = (party) => {
    const token = computeToken(party);
    return {party, token, ledgerId};
}

exports.httpBaseUrl = `http://localhost:7575/`;
exports.wsBaseUrl = "ws://localhost:7575/"; // same as for the http but ws (websocket)
exports.issuer = process.env.issuer;
exports.master = process.env.master;
exports.observers = process.env.observers.split(',');
