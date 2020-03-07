import { Meeple } from 'src/app/meeples/domain/meeple';
import { ProtoBatiment } from 'src/app/meeples/domain/batiment';
import { Cout } from 'src/app/meeples/domain/cout';
import { TYPE_CELLULE } from 'src/app/meeples/domain/cellule';


export enum TYPE_ACTION {
    TRAVAIL,
    RECOLTE,
    EXPLORATION,
    CHASSE,
    PECHE,
    LOISIR,
    CONSTRUCTION
}

export class Action {
    constructor(public meeple: Meeple,
        public typeAction: TYPE_ACTION,
        public description: string,
        public batiment: ProtoBatiment
    ) { }
}

export class ProtoAction {
    constructor(public typeAction: TYPE_ACTION,
        public description: string,
        public objet: any,
        public cout: Cout,
        public energie: number,
        public terrain: TYPE_CELLULE,
        public batiment: ProtoBatiment,

    ) { }
}

export enum TYPE_PROTOACTION {
    CHASSE_1, PECHE, EXPLORATION, RECOLTE,
}

export const PROTOACTIONS = {
    EXPLORATION_1: new ProtoAction(TYPE_ACTION.EXPLORATION, 'Explorer les environs', null, Cout.from(''), 1, null, null),
    EXPLORATION_2: new ProtoAction(TYPE_ACTION.EXPLORATION, 'Explorer mieux les environs', null, Cout.from(''), 2, null, null),
    TRAVAIL: new ProtoAction(TYPE_ACTION.TRAVAIL, 'Travailler dans le bâtiment', null, Cout.from(''), 1, null, null),
    REPARATION: new ProtoAction(TYPE_ACTION.CONSTRUCTION, 'Réparer le bâtiment', null, Cout.from(''), 1, null, null),
    // PLAINE
    CHASSE_P_1: new ProtoAction(TYPE_ACTION.CHASSE,
        'Ramassage de larves. E: 3 nourritures', null, Cout.from(''), 1, TYPE_CELLULE.PLAINE, null),
    CHASSE_P_2: new ProtoAction(TYPE_ACTION.CHASSE,
        'Collets pour lièvres. E: 6 nourritures', null, Cout.from('h'), 1, TYPE_CELLULE.PLAINE, null),
    CHASSE_P_3: new ProtoAction(TYPE_ACTION.CHASSE,
        'Collets pour lièvres. EE: 9 nourritures', null, Cout.from('h'), 2, TYPE_CELLULE.PLAINE, null),
    RECOLTE_P_1: new ProtoAction(TYPE_ACTION.RECOLTE,
        'Récolte. E: 2 herbes', null, Cout.from(''), 1, TYPE_CELLULE.PLAINE, null),
    RECOLTE_P_2: new ProtoAction(TYPE_ACTION.RECOLTE,
        'Récolte. EE: 3 herbes, 2 baies', null, Cout.from(''), 1, TYPE_CELLULE.PLAINE, null),
    // FORET
    CHASSE_F_1: new ProtoAction(TYPE_ACTION.CHASSE,
        'Recherche d\'oeufs. E: 3 nourritures', null, Cout.from(''), 1, TYPE_CELLULE.FORET, null),
    RECOLTE_F_1: new ProtoAction(TYPE_ACTION.RECOLTE,
        'Récolte de bois. E: 2 bois', null, Cout.from(''), 1, TYPE_CELLULE.FORET, null),
    RECOLTE_F_2: new ProtoAction(TYPE_ACTION.CHASSE,
        'Recherche d\'oeufs. E: 3 nourritures', null, Cout.from(''), 1, TYPE_CELLULE.FORET, null),
    // EAU
    PECHE_E_1: new ProtoAction(TYPE_ACTION.PECHE,
        'Recherche de langoustes. E: 3 nourritures', null, Cout.from(''), 1, TYPE_CELLULE.EAU, null),
    PECHE_E_2: new ProtoAction(TYPE_ACTION.PECHE,
        'Pose de pièges à poissons. E: 10 nourritures', null, Cout.from('hh'), 1, TYPE_CELLULE.EAU, null),
    CONSTRUCTION_E_1: new ProtoAction(TYPE_ACTION.CONSTRUCTION,
        'Construction de carrière d\'argile. E: 10 nourritures', null, Cout.from('hh'), 1, TYPE_CELLULE.EAU, null),
};
