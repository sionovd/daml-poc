const encode = require('jwt-simple');

const ledgerId = 'my-project-name-sandbox';

const APPLICATION_ID = 'my-project-name';
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

exports.httpBaseUrl = `https://api.projectdabl.com/data/${ledgerId}/`
