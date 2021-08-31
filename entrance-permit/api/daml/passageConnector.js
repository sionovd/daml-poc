const Ledger = require('@daml/ledger');
const damlConfig = require('./damlConfig');
const credentials = damlConfig.computeCredentials(damlConfig.issuer);
const Passage = require('@daml.js/daml');
const passageRepository = require('../repository/passageRepository');

const ledger = new Ledger.default({ token: credentials.token, httpBaseUrl: damlConfig.httpBaseUrl, wsBaseUrl: damlConfig.wsBaseUrl });

// Check for GlobalPassage created by Master and Sync it
ledger.streamQueries(Passage.Passage.GlobalPassage, [{ master: damlConfig.master }])
    .on("change", async (state, events) => {
        for (let passageEvent in events) {
            const passage = events[passageEvent]?.created.payload;
            if (passage != null && passage.originalIssuer != credentials.party) {
                const isPassageExist = (await passageRepository.getPassageById(passage.id))?.length > 0;
                if (!isPassageExist) {
                    await passageRepository.createPassage(passage.citizenId, passage.id, passage.club);
                }
            }
        }
    });

// Sync every passage created by other then the Master 
if (credentials.party == damlConfig.master) {
    ledger.streamQueries(Passage.Passage.LocalPassage, [])
        .on("change", async (state, events) => {
            for (let passageEvent in events) {
                const passageCId = events[passageEvent].created?.contractId;
                if (passageCId) {
                    await ledger.exercise(Passage.Passage.LocalPassage.Passage_Synchronize, passageCId, { readers: damlConfig.observers });
                }
            }
        });
}

exports.createPassageContract = async (citizenId, passageId, club) => {
    let passageContract = await ledger.fetchByKey(Passage.Passage.LocalPassage, { _1: passageId, _2: credentials.party });
    if (passageContract === null) {
        const passageDate = new Date();
        const passage = { id: passageId, issuer: credentials.party, master: damlConfig.master, citizenId, club, passageDate, permitId: '333' };
        permitContract = await ledger.create(Passage.Passage.LocalPassage, passage);
    }
}
