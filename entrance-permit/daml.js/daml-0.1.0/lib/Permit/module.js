"use strict";
/* eslint-disable-next-line no-unused-vars */
function __export(m) {
/* eslint-disable-next-line no-prototype-builtins */
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
/* eslint-disable-next-line no-unused-vars */
var jtv = require('@mojotech/json-type-validation');
/* eslint-disable-next-line no-unused-vars */
var damlTypes = require('@daml/types');
/* eslint-disable-next-line no-unused-vars */
var damlLedger = require('@daml/ledger');

var pkg40f452260bef3f29dede136108fc08a88d5a5250310281067087da6f0baddff7 = require('@daml.js/40f452260bef3f29dede136108fc08a88d5a5250310281067087da6f0baddff7');
var pkgd14e08374fc7197d6a0de468c968ae8ba3aadbf9315476fd39071831f5923662 = require('@daml.js/d14e08374fc7197d6a0de468c968ae8ba3aadbf9315476fd39071831f5923662');


exports.GlobalPermit = {
  templateId: 'bf996274a5704116fb57397a07c53706e61508b86316b925f48303054f09f257:Permit:GlobalPermit',
  keyDecoder: damlTypes.lazyMemo(function () { return damlTypes.lazyMemo(function () { return pkg40f452260bef3f29dede136108fc08a88d5a5250310281067087da6f0baddff7.DA.Types.Tuple2(damlTypes.Int, damlTypes.Party).decoder; }); }),
  keyEncode: function (__typed__) { return pkg40f452260bef3f29dede136108fc08a88d5a5250310281067087da6f0baddff7.DA.Types.Tuple2(damlTypes.Int, damlTypes.Party).encode(__typed__); },
  decoder: damlTypes.lazyMemo(function () { return jtv.object({id: damlTypes.Int.decoder, master: damlTypes.Party.decoder, readers: damlTypes.List(damlTypes.Party).decoder, citizenId: damlTypes.Int.decoder, club: damlTypes.Text.decoder, startDate: damlTypes.Time.decoder, endDate: damlTypes.Time.decoder, }); }),
  encode: function (__typed__) {
  return {
    id: damlTypes.Int.encode(__typed__.id),
    master: damlTypes.Party.encode(__typed__.master),
    readers: damlTypes.List(damlTypes.Party).encode(__typed__.readers),
    citizenId: damlTypes.Int.encode(__typed__.citizenId),
    club: damlTypes.Text.encode(__typed__.club),
    startDate: damlTypes.Time.encode(__typed__.startDate),
    endDate: damlTypes.Time.encode(__typed__.endDate),
  };
}
,
  Archive: {
    template: function () { return exports.GlobalPermit; },
    choiceName: 'Archive',
    argumentDecoder: damlTypes.lazyMemo(function () { return pkgd14e08374fc7197d6a0de468c968ae8ba3aadbf9315476fd39071831f5923662.DA.Internal.Template.Archive.decoder; }),
    argumentEncode: function (__typed__) { return pkgd14e08374fc7197d6a0de468c968ae8ba3aadbf9315476fd39071831f5923662.DA.Internal.Template.Archive.encode(__typed__); },
    resultDecoder: damlTypes.lazyMemo(function () { return damlTypes.Unit.decoder; }),
    resultEncode: function (__typed__) { return damlTypes.Unit.encode(__typed__); },
  },
};


damlTypes.registerTemplate(exports.GlobalPermit);



exports.Permit_Synchronize = {
  decoder: damlTypes.lazyMemo(function () { return jtv.object({readers: damlTypes.List(damlTypes.Party).decoder, }); }),
  encode: function (__typed__) {
  return {
    readers: damlTypes.List(damlTypes.Party).encode(__typed__.readers),
  };
}
,
};



exports.LocalPermit = {
  templateId: 'bf996274a5704116fb57397a07c53706e61508b86316b925f48303054f09f257:Permit:LocalPermit',
  keyDecoder: damlTypes.lazyMemo(function () { return damlTypes.lazyMemo(function () { return pkg40f452260bef3f29dede136108fc08a88d5a5250310281067087da6f0baddff7.DA.Types.Tuple2(damlTypes.Int, damlTypes.Party).decoder; }); }),
  keyEncode: function (__typed__) { return pkg40f452260bef3f29dede136108fc08a88d5a5250310281067087da6f0baddff7.DA.Types.Tuple2(damlTypes.Int, damlTypes.Party).encode(__typed__); },
  decoder: damlTypes.lazyMemo(function () { return jtv.object({id: damlTypes.Int.decoder, master: damlTypes.Party.decoder, issuer: damlTypes.Party.decoder, citizenId: damlTypes.Int.decoder, club: damlTypes.Text.decoder, startDate: damlTypes.Time.decoder, endDate: damlTypes.Time.decoder, }); }),
  encode: function (__typed__) {
  return {
    id: damlTypes.Int.encode(__typed__.id),
    master: damlTypes.Party.encode(__typed__.master),
    issuer: damlTypes.Party.encode(__typed__.issuer),
    citizenId: damlTypes.Int.encode(__typed__.citizenId),
    club: damlTypes.Text.encode(__typed__.club),
    startDate: damlTypes.Time.encode(__typed__.startDate),
    endDate: damlTypes.Time.encode(__typed__.endDate),
  };
}
,
  Archive: {
    template: function () { return exports.LocalPermit; },
    choiceName: 'Archive',
    argumentDecoder: damlTypes.lazyMemo(function () { return pkgd14e08374fc7197d6a0de468c968ae8ba3aadbf9315476fd39071831f5923662.DA.Internal.Template.Archive.decoder; }),
    argumentEncode: function (__typed__) { return pkgd14e08374fc7197d6a0de468c968ae8ba3aadbf9315476fd39071831f5923662.DA.Internal.Template.Archive.encode(__typed__); },
    resultDecoder: damlTypes.lazyMemo(function () { return damlTypes.Unit.decoder; }),
    resultEncode: function (__typed__) { return damlTypes.Unit.encode(__typed__); },
  },
  Permit_Synchronize: {
    template: function () { return exports.LocalPermit; },
    choiceName: 'Permit_Synchronize',
    argumentDecoder: damlTypes.lazyMemo(function () { return exports.Permit_Synchronize.decoder; }),
    argumentEncode: function (__typed__) { return exports.Permit_Synchronize.encode(__typed__); },
    resultDecoder: damlTypes.lazyMemo(function () { return damlTypes.ContractId(exports.GlobalPermit).decoder; }),
    resultEncode: function (__typed__) { return damlTypes.ContractId(exports.GlobalPermit).encode(__typed__); },
  },
};


damlTypes.registerTemplate(exports.LocalPermit);

