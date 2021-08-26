const encode = require('jwt-simple');

const ledgerId = 'buildingB';

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
    console.log(token)
    return {party, token, ledgerId};
}

// exports.httpBaseUrl = undefined;
exports.httpBaseUrl = `http://localhost:7575/`;
exports.wsBaseUrl = "ws://localhost:7575/"; // same as for the http but ws (websocket)
exports.master = "buildingB::12202e5e2228f3f4554d034264408405f7354d0a231ba5e9d2934c543b2dd5a05eb4";
