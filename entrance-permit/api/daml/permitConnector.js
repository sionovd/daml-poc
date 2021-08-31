const Ledger = require('@daml/ledger');
const damlConfig = require('./damlConfig');
const credentials = damlConfig.computeCredentials(process.env.issuer);
const Permit = require('@daml.js/daml');
const permitRepository = require('../repository/permitRepository');

const ledger = new Ledger.default({ token: credentials.token, httpBaseUrl: damlConfig.httpBaseUrl, wsBaseUrl: damlConfig.wsBaseUrl });

// Check for GlobalPermit created by Master and Sync it
ledger.streamQueries(Permit.Permit.GlobalPermit, [{ master: process.env.master }])
    .on("change", async (state, events) => {
        for (let permitEvent in events) {
            const permit = events[permitEvent].created?.payload;
            if (permit != null && permit.originalIssuer != credentials.party) {
                const isPermitExist = (await permitRepository.getPermitById(permit.id))?.length > 0;
                if (!isPermitExist) {
                    await permitRepository.createPermit(permit.citizenId, permit.id, permit.startDate, permit.endDate, permit.club);
                }
            }
        }
    });

// Sync every permit created by other then the Master 
if (credentials.party == damlConfig.master) {
    ledger.streamQueries(Permit.Permit.LocalPermit, [])
        .on("change", async (state, events) => {
            for (let permitEvent in events) {
                const permitCId = events[permitEvent].created?.contractId;
                if (permitCId) {
                    try {
                        const result = await ledger.exercise(Permit.Permit.LocalPermit.Permit_Synchronize, permitCId, { readers: ["Server1", "Server2"] });
                        console.log('good', result);
                    } catch (error) {
                        console.error('not good', error);
                    }

                }
            }
        });
}

exports.createPermitContract = async (citizenId, permitId, startDate, endDate, club) => {
    let permitContract = await ledger.fetchByKey(Permit.Permit.LocalPermit, { _1: permitId, _2: credentials.party });
    if (permitContract === null) {
        startDate = new Date(startDate);
        endDate = new Date(endDate);
        const permit = { id: permitId, issuer: credentials.party, master: process.env.master, citizenId, club, startDate, endDate };
        permitContract = await ledger.create(Permit.Permit.LocalPermit, permit);
    }
}
