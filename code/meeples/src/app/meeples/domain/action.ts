import { Meeple } from 'src/app/meeples/domain/meeple';
import { ProtoBatiment } from 'src/app/meeples/domain/batiment';


export enum TYPE_ACTION {
    TRAVAIL,
    RECOLTE,
    EXPLORATION,
    CHASSE,
    LOISIR,
    CONSTRUCTION
  }

export class Action {
    constructor(public meeple: Meeple,
                public typeAction: TYPE_ACTION,
                public description: string,
                public batiment: ProtoBatiment
    ) {}
  }

export class ProtoAction {
    constructor(public typeAction: TYPE_ACTION,
                public description: string,
                public batiment?: ProtoBatiment) {}
}
