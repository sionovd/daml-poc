// Generated from Passage.daml
/* eslint-disable @typescript-eslint/camelcase */
/* eslint-disable @typescript-eslint/no-namespace */
/* eslint-disable @typescript-eslint/no-use-before-define */
import * as jtv from '@mojotech/json-type-validation';
import * as damlTypes from '@daml/types';
/* eslint-disable-next-line @typescript-eslint/no-unused-vars */
import * as damlLedger from '@daml/ledger';

import * as pkg40f452260bef3f29dede136108fc08a88d5a5250310281067087da6f0baddff7 from '@daml.js/40f452260bef3f29dede136108fc08a88d5a5250310281067087da6f0baddff7';
import * as pkgd14e08374fc7197d6a0de468c968ae8ba3aadbf9315476fd39071831f5923662 from '@daml.js/d14e08374fc7197d6a0de468c968ae8ba3aadbf9315476fd39071831f5923662';

export declare type GlobalPassage = {
  id: damlTypes.Int;
  master: damlTypes.Party;
  readers: damlTypes.Party[];
  citizenId: damlTypes.Int;
  club: string;
  passageDate: damlTypes.Time;
  permitId: damlTypes.Int;
};

export declare const GlobalPassage:
  damlTypes.Template<GlobalPassage, GlobalPassage.Key, 'bf996274a5704116fb57397a07c53706e61508b86316b925f48303054f09f257:Passage:GlobalPassage'> & {
  Archive: damlTypes.Choice<GlobalPassage, pkgd14e08374fc7197d6a0de468c968ae8ba3aadbf9315476fd39071831f5923662.DA.Internal.Template.Archive, {}, GlobalPassage.Key>;
};

export declare namespace GlobalPassage {
  export type Key = pkg40f452260bef3f29dede136108fc08a88d5a5250310281067087da6f0baddff7.DA.Types.Tuple2<damlTypes.Int, damlTypes.Party>
  export type CreateEvent = damlLedger.CreateEvent<GlobalPassage, GlobalPassage.Key, typeof GlobalPassage.templateId>
  export type ArchiveEvent = damlLedger.ArchiveEvent<GlobalPassage, typeof GlobalPassage.templateId>
  export type Event = damlLedger.Event<GlobalPassage, GlobalPassage.Key, typeof GlobalPassage.templateId>
  export type QueryResult = damlLedger.QueryResult<GlobalPassage, GlobalPassage.Key, typeof GlobalPassage.templateId>
}



export declare type Passage_Synchronize = {
  readers: damlTypes.Party[];
};

export declare const Passage_Synchronize:
  damlTypes.Serializable<Passage_Synchronize> & {
  }
;


export declare type LocalPassage = {
  id: damlTypes.Int;
  master: damlTypes.Party;
  issuer: damlTypes.Party;
  citizenId: damlTypes.Int;
  club: string;
  passageDate: damlTypes.Time;
  permitId: damlTypes.Int;
};

export declare const LocalPassage:
  damlTypes.Template<LocalPassage, LocalPassage.Key, 'bf996274a5704116fb57397a07c53706e61508b86316b925f48303054f09f257:Passage:LocalPassage'> & {
  Archive: damlTypes.Choice<LocalPassage, pkgd14e08374fc7197d6a0de468c968ae8ba3aadbf9315476fd39071831f5923662.DA.Internal.Template.Archive, {}, LocalPassage.Key>;
  Passage_Synchronize: damlTypes.Choice<LocalPassage, Passage_Synchronize, damlTypes.ContractId<GlobalPassage>, LocalPassage.Key>;
};

export declare namespace LocalPassage {
  export type Key = pkg40f452260bef3f29dede136108fc08a88d5a5250310281067087da6f0baddff7.DA.Types.Tuple2<damlTypes.Int, damlTypes.Party>
  export type CreateEvent = damlLedger.CreateEvent<LocalPassage, LocalPassage.Key, typeof LocalPassage.templateId>
  export type ArchiveEvent = damlLedger.ArchiveEvent<LocalPassage, typeof LocalPassage.templateId>
  export type Event = damlLedger.Event<LocalPassage, LocalPassage.Key, typeof LocalPassage.templateId>
  export type QueryResult = damlLedger.QueryResult<LocalPassage, LocalPassage.Key, typeof LocalPassage.templateId>
}


