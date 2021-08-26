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


exports.GlobalPassage = {
  templateId: 'bf996274a5704116fb57397a07c53706e61508b86316b925f48303054f09f257:Passage:GlobalPassage',
  keyDecoder: damlTypes.lazyMemo(function () { return damlTypes.lazyMemo(function () { return pkg40f452260bef3f29dede136108fc08a88d5a5250310281067087da6f0baddff7.DA.Types.Tuple2(damlTypes.Int, damlTypes.Party).decoder; }); }),
  keyEncode: function (__typed__) { return pkg40f452260bef3f29dede136108fc08a88d5a5250310281067087da6f0baddff7.DA.Types.Tuple2(damlTypes.Int, damlTypes.Party).encode(__typed__); },
  decoder: damlTypes.lazyMemo(function () { return jtv.object({id: damlTypes.Int.decoder, master: damlTypes.Party.decoder, readers: damlTypes.List(damlTypes.Party).decoder, citizenId: damlTypes.Int.decoder, club: damlTypes.Text.decoder, passageDate: damlTypes.Time.decoder, permitId: damlTypes.Int.decoder, }); }),
  encode: function (__typed__) {
  return {
    id: damlTypes.Int.encode(__typed__.id),
    master: damlTypes.Party.encode(__typed__.master),
    readers: damlTypes.List(damlTypes.Party).encode(__typed__.readers),
    citizenId: damlTypes.Int.encode(__typed__.citizenId),
    club: damlTypes.Text.encode(__typed__.club),
    passageDate: damlTypes.Time.encode(__typed__.passageDate),
    permitId: damlTypes.Int.encode(__typed__.permitId),
  };
}
,
  Archive: {
    template: function () { return exports.GlobalPassage; },
    choiceName: 'Archive',
    argumentDecoder: damlTypes.lazyMemo(function () { return pkgd14e08374fc7197d6a0de468c968ae8ba3aadbf9315476fd39071831f5923662.DA.Internal.Template.Archive.decoder; }),
    argumentEncode: function (__typed__) { return pkgd14e08374fc7197d6a0de468c968ae8ba3aadbf9315476fd39071831f5923662.DA.Internal.Template.Archive.encode(__typed__); },
    resultDecoder: damlTypes.lazyMemo(function () { return damlTypes.Unit.decoder; }),
    resultEncode: function (__typed__) { return damlTypes.Unit.encode(__typed__); },
  },
};


damlTypes.registerTemplate(exports.GlobalPassage);



exports.Passage_Synchronize = {
  decoder: damlTypes.lazyMemo(function () { return jtv.object({readers: damlTypes.List(damlTypes.Party).decoder, }); }),
  encode: function (__typed__) {
  return {
    readers: damlTypes.List(damlTypes.Party).encode(__typed__.readers),
  };
}
,
};



exports.LocalPassage = {
  templateId: 'bf996274a5704116fb57397a07c53706e61508b86316b925f48303054f09f257:Passage:LocalPassage',
  keyDecoder: damlTypes.lazyMemo(function () { return damlTypes.lazyMemo(function () { return pkg40f452260bef3f29dede136108fc08a88d5a5250310281067087da6f0baddff7.DA.Types.Tuple2(damlTypes.Int, damlTypes.Party).decoder; }); }),
  keyEncode: function (__typed__) { return pkg40f452260bef3f29dede136108fc08a88d5a5250310281067087da6f0baddff7.DA.Types.Tuple2(damlTypes.Int, damlTypes.Party).encode(__typed__); },
  decoder: damlTypes.lazyMemo(function () { return jtv.object({id: damlTypes.Int.decoder, master: damlTypes.Party.decoder, issuer: damlTypes.Party.decoder, citizenId: damlTypes.Int.decoder, club: damlTypes.Text.decoder, passageDate: damlTypes.Time.decoder, permitId: damlTypes.Int.decoder, }); }),
  encode: function (__typed__) {
  return {
    id: damlTypes.Int.encode(__typed__.id),
    master: damlTypes.Party.encode(__typed__.master),
    issuer: damlTypes.Party.encode(__typed__.issuer),
    citizenId: damlTypes.Int.encode(__typed__.citizenId),
    club: damlTypes.Text.encode(__typed__.club),
    passageDate: damlTypes.Time.encode(__typed__.passageDate),
    permitId: damlTypes.Int.encode(__typed__.permitId),
  };
}
,
  Archive: {
    template: function () { return exports.LocalPassage; },
    choiceName: 'Archive',
    argumentDecoder: damlTypes.lazyMemo(function () { return pkgd14e08374fc7197d6a0de468c968ae8ba3aadbf9315476fd39071831f5923662.DA.Internal.Template.Archive.decoder; }),
    argumentEncode: function (__typed__) { return pkgd14e08374fc7197d6a0de468c968ae8ba3aadbf9315476fd39071831f5923662.DA.Internal.Template.Archive.encode(__typed__); },
    resultDecoder: damlTypes.lazyMemo(function () { return damlTypes.Unit.decoder; }),
    resultEncode: function (__typed__) { return damlTypes.Unit.encode(__typed__); },
  },
  Passage_Synchronize: {
    template: function () { return exports.LocalPassage; },
    choiceName: 'Passage_Synchronize',
    argumentDecoder: damlTypes.lazyMemo(function () { return exports.Passage_Synchronize.decoder; }),
    argumentEncode: function (__typed__) { return exports.Passage_Synchronize.encode(__typed__); },
    resultDecoder: damlTypes.lazyMemo(function () { return damlTypes.ContractId(exports.GlobalPassage).decoder; }),
    resultEncode: function (__typed__) { return damlTypes.ContractId(exports.GlobalPassage).encode(__typed__); },
  },
};


damlTypes.registerTemplate(exports.LocalPassage);

