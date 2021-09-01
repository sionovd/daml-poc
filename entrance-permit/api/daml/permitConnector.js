const Ledger = require('@daml/ledger');
const damlConfig = require('./damlConfig');
const credentials = damlConfig.computeCredentials(damlConfig.issuer);
const Permit = require('@daml.js/daml');
const permitRepository = require('../repository/permitRepository');

const ledger = new Ledger.default({ token: credentials.token, httpBaseUrl: damlConfig.httpBaseUrl, wsBaseUrl: damlConfig.wsBaseUrl });

// Check for GlobalPermit created by Master and Sync it
ledger.streamQueries(Permit.Permit.GlobalPermit, [{ master: damlConfig.master }])
    .on("change", async (state, events) => {
        for (let permitEvent in events) {
            const permit = events[permitEvent].created?.payload;
            if (permit != null && permit.originalIssuer != credentials.party) {
                const permitInDB = await permitRepository.getPermitById(permit.id);
                if (permitInDB?.length == 0) {
                    await permitRepository.createPermit(permit.citizenId, permit.id, permit.startDate, permit.endDate, permit.club);
                } else {
                    await permitRepository.replacePermit(permit.id, permit.endDate, permit.startDate, permit.club);
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
                    await ledger.exercise(Permit.Permit.LocalPermit.Permit_Synchronize, permitCId, { readers: damlConfig.observers });
                }
            }
        });
}

exports.createPermitContract = async (citizenId, permitId, startDate, endDate, club) => {
    let permitContract = await ledger.fetchByKey(Permit.Permit.LocalPermit, { _1: permitId, _2: credentials.party });
    if (permitContract === null) {
        startDate = new Date(startDate);
        endDate = new Date(endDate);
        const permit = { id: permitId, issuer: credentials.party, master: damlConfig.master, citizenId, club, startDate, endDate, 'timestamp': new Date(Date.now()) };
        permitContract = await ledger.create(Permit.Permit.LocalPermit, permit);

    }
}

exports.updatePermitContract = async (permitId, endDate) => {
    const localPermit = await ledger.fetchByKey(Permit.Permit.LocalPermit, { _1: permitId, _2: credentials.party });
    if (localPermit) {
        await ledger.exercise(Permit.Permit.LocalPermit.Update_Local_Permit, localPermit.contractId, { caller: damlConfig.issuer, newEndDate: new Date(endDate), newTimestamp: new Date(Date.now()) });
    } else {
        const globalPermit = await ledger.fetchByKey(Permit.Permit.GlobalPermit, { _1: permitId, _2: damlConfig.master });
        if (globalPermit) {
            await ledger.exercise(Permit.Permit.GlobalPermit.Update_Global_Permit, globalPermit.contractId, { caller: damlConfig.issuer, newEndDate: new Date(endDate), newTimestamp: new Date(Date.now()) });
        }
    }
}
