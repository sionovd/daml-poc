// Generated from Permit.daml
/* eslint-disable @typescript-eslint/camelcase */
/* eslint-disable @typescript-eslint/no-namespace */
/* eslint-disable @typescript-eslint/no-use-before-define */
import * as jtv from '@mojotech/json-type-validation';
import * as damlTypes from '@daml/types';
/* eslint-disable-next-line @typescript-eslint/no-unused-vars */
import * as damlLedger from '@daml/ledger';

import * as pkg40f452260bef3f29dede136108fc08a88d5a5250310281067087da6f0baddff7 from '@daml.js/40f452260bef3f29dede136108fc08a88d5a5250310281067087da6f0baddff7';
import * as pkgd14e08374fc7197d6a0de468c968ae8ba3aadbf9315476fd39071831f5923662 from '@daml.js/d14e08374fc7197d6a0de468c968ae8ba3aadbf9315476fd39071831f5923662';

export declare type GlobalPermit = {
  id: damlTypes.Int;
  master: damlTypes.Party;
  readers: damlTypes.Party[];
  citizenId: damlTypes.Int;
  club: string;
  startDate: damlTypes.Time;
  endDate: damlTypes.Time;
};

export declare const GlobalPermit:
  damlTypes.Template<GlobalPermit, GlobalPermit.Key, 'bf996274a5704116fb57397a07c53706e61508b86316b925f48303054f09f257:Permit:GlobalPermit'> & {
  Archive: damlTypes.Choice<GlobalPermit, pkgd14e08374fc7197d6a0de468c968ae8ba3aadbf9315476fd39071831f5923662.DA.Internal.Template.Archive, {}, GlobalPermit.Key>;
};

export declare namespace GlobalPermit {
  export type Key = pkg40f452260bef3f29dede136108fc08a88d5a5250310281067087da6f0baddff7.DA.Types.Tuple2<damlTypes.Int, damlTypes.Party>
  export type CreateEvent = damlLedger.CreateEvent<GlobalPermit, GlobalPermit.Key, typeof GlobalPermit.templateId>
  export type ArchiveEvent = damlLedger.ArchiveEvent<GlobalPermit, typeof GlobalPermit.templateId>
  export type Event = damlLedger.Event<GlobalPermit, GlobalPermit.Key, typeof GlobalPermit.templateId>
  export type QueryResult = damlLedger.QueryResult<GlobalPermit, GlobalPermit.Key, typeof GlobalPermit.templateId>
}



export declare type Permit_Synchronize = {
  readers: damlTypes.Party[];
};

export declare const Permit_Synchronize:
  damlTypes.Serializable<Permit_Synchronize> & {
  }
;


export declare type LocalPermit = {
  id: damlTypes.Int;
  master: damlTypes.Party;
  issuer: damlTypes.Party;
  citizenId: damlTypes.Int;
  club: string;
  startDate: damlTypes.Time;
  endDate: damlTypes.Time;
};

export declare const LocalPermit:
  damlTypes.Template<LocalPermit, LocalPermit.Key, 'bf996274a5704116fb57397a07c53706e61508b86316b925f48303054f09f257:Permit:LocalPermit'> & {
  Archive: damlTypes.Choice<LocalPermit, pkgd14e08374fc7197d6a0de468c968ae8ba3aadbf9315476fd39071831f5923662.DA.Internal.Template.Archive, {}, LocalPermit.Key>;
  Permit_Synchronize: damlTypes.Choice<LocalPermit, Permit_Synchronize, damlTypes.ContractId<GlobalPermit>, LocalPermit.Key>;
};

export declare namespace LocalPermit {
  export type Key = pkg40f452260bef3f29dede136108fc08a88d5a5250310281067087da6f0baddff7.DA.Types.Tuple2<damlTypes.Int, damlTypes.Party>
  export type CreateEvent = damlLedger.CreateEvent<LocalPermit, LocalPermit.Key, typeof LocalPermit.templateId>
  export type ArchiveEvent = damlLedger.ArchiveEvent<LocalPermit, typeof LocalPermit.templateId>
  export type Event = damlLedger.Event<LocalPermit, LocalPermit.Key, typeof LocalPermit.templateId>
  export type QueryResult = damlLedger.QueryResult<LocalPermit, LocalPermit.Key, typeof LocalPermit.templateId>
}


