import {Injectable} from "@angular/core";


// 0 à max - 1
export function random(max: number) {
  return (Math.floor(Math.random() * max));
}

export function randomInArray(array: any[]) {
  return array[random(array.length)];
}

export class Enemy {
  public name: string;
  public level: number;

  constructor(name: string, level: number) {
    this.name = name;
    this.level = level;
  }
}

export class Environment {
  public name: string;
  public enemies: Enemy[];
  public personnagesTypes: string[];
  public tresorsTypes: string[];
  public armesTypes: string[];
  public lieuxTypes: string[];


  constructor(name: string, enemies: Enemy[], personnagesTypes: string[],
              tresorsTypes: string[],
              armesTypes: string[],
              lieuxTypes: string[]) {
    this.name = name;
    this.enemies = enemies;
    this.personnagesTypes = personnagesTypes;
    this.tresorsTypes = tresorsTypes;
    this.armesTypes = armesTypes;
    this.lieuxTypes = lieuxTypes;
  }
}

export enum ACTION {
  DEFENDRE, ATTAQUER, DETRUIRE, TROUVER
}

export enum CIBLE {
  TRESOR, PERSONNAGE, BATIMENT, ARME
}

export enum MISSION_TYPE {
  ARC,
}

export class MissionType {
  public nomCible: string;
  private syllabes = ["to", "fi", "ra", "um", "go", "sli", "oual", "bi", "dou", "su", "ko", "reu"];
  combat = false;
  constructor(public action: ACTION, public cible: CIBLE, public environment: Environment) {
    this.nomCible = this.generateRandomNom();
  }

  toLabel() {
    console.log("action", this.action, ACTION.DETRUIRE);
    switch (this.action) {
      case ACTION.DEFENDRE:
        switch (this.cible) {
          case CIBLE.TRESOR:
            return "Empêcher " + this.randomCible(this.cible) + " " + "\"" + this.nomCible + "\"" + " de se faire voler";
          case CIBLE.PERSONNAGE:
            this.combat = true;
            return "Protéger " + this.randomCible(this.cible) + " " + "\"" + this.nomCible + "\"" + " des attaques";
          case CIBLE.BATIMENT:
            this.combat = true;
            return "Protéger " + this.randomCible(this.cible) + " " + "\"" + this.nomCible + "\"" + " des attaques";
          case CIBLE.ARME:
            return "Ne pas se faire voler " + this.randomCible(this.cible) + " " + "\"" + this.nomCible + "\"";
        }
      case ACTION.ATTAQUER:
        switch (this.cible) {
          case CIBLE.TRESOR:
            return "Découvrir ce qu'est " + this.randomCible(this.cible) + " " + "\"" + this.nomCible + "\"";
          case CIBLE.PERSONNAGE:
            return "Engager ou convaincre " + this.randomCible(this.cible) + " " + this.nomCible + " de vous aider";
          case CIBLE.BATIMENT:
            return "Prendre contrôle de " + this.randomCible(this.cible) + " " + "\"" + this.nomCible + "\"";
          case CIBLE.ARME:
            return "Se battre avec " + this.randomCible(this.cible) + " " + "\"" + this.nomCible + "\"";
        }
      case ACTION.DETRUIRE:
        switch (this.cible) {
          case CIBLE.TRESOR:
            return "Utiliser (le pouvoir de) " + this.randomCible(this.cible) + " " + "\"" + this.nomCible + "\"";
          case CIBLE.PERSONNAGE:
            this.combat = true;
            return "Assassiner " + this.randomCible(this.cible) + " " + "\"" + this.nomCible + "\"";
          case CIBLE.BATIMENT:
            this.combat = true;
            return "Tout casser dans " + this.randomCible(this.cible) + " " + "\"" + this.nomCible + "\"";
          case CIBLE.ARME:
            this.combat = true;
            return "Se battre avec " + this.randomCible(this.cible) + " " + "\"" + this.nomCible + "\"";
        }
      case ACTION.TROUVER:
      default:
        switch (this.cible) {
          case CIBLE.TRESOR:
            return "Découvrir l'emplacement de " + this.randomCible(this.cible) + " " + "\"" + this.nomCible + "\"";
          case CIBLE.PERSONNAGE:
            return "Découvrir où se cache " + this.randomCible(this.cible) + " " + "\"" + this.nomCible + "\"";
          case CIBLE.BATIMENT:
            return "Trouver l'emplacement de " + this.randomCible(this.cible) + " " + "\"" + this.nomCible + "\"";
          case CIBLE.ARME:
            return "Se procurer " + this.randomCible(this.cible) + " " + "\"" + this.nomCible + "\"";
        }
    }
    return this.action + " " + this.randomCible(this.cible) + " " + this.nomCible + ".";
  }

  private generateRandomNom() {
    let res = "";
    for (let i = 0; i < random(3) + 2; i++) {
      res += this.syllabes[random(this.syllabes.length)];
    }
    return res;
  }

  private randomCible(cible: CIBLE): string {
    console.log("rando cible", this.environment.personnagesTypes, randomInArray(this.environment.personnagesTypes));
    switch (cible) {
      case CIBLE.PERSONNAGE:
        return randomInArray(this.environment.personnagesTypes);
      case CIBLE.ARME:
        return randomInArray(this.environment.armesTypes);
      case CIBLE.TRESOR:
        return randomInArray(this.environment.tresorsTypes);
      case CIBLE.BATIMENT:
      default:
        return randomInArray(this.environment.lieuxTypes);
    }
  }
}

export class Arc {
  public sousArcs: Arc[];
  public mission: MissionType;
  public ennemis: Enemy[] = [];

  constructor(sousArcs: Arc[], mission: MissionType, ennemis: Enemy[]) {
    this.sousArcs = sousArcs;
    this.mission = mission;
    this.ennemis = ennemis;
  }

  ennemisLabel() {
    return this.ennemis.map(e => e.name).join(", ");
  }
}

@Injectable()
export class RepoService {
  environments: Environment[];
  missionsType: MissionType[];

  constructor() {
    this.environments = [];
    this.environments.push(
      new Environment("Heroic-Fantasy", [
          new Enemy("Un Dragon", 3),
          new Enemy("Un Roi-Liche", 3),
          new Enemy("Un Gobelin Mage", 2),
          new Enemy("Un Chevalier de la mort", 2),
          new Enemy("Un Gobelin", 1),
          new Enemy("Un Zombie", 1),
          new Enemy("Un Loup", 1),
          new Enemy("Un Ours géant", 2),
          new Enemy("Un Léviathan", 3),
        ],
        ["Un Général", "Une Petite fille", "Un Guide", "Un Soigneur", "Un Paysan", "Un Forgeron", "Un Roi", "Un Maire", "Un Soldat", "Un Prêtre", "Un Voleur", "Un Assassin", "Un Petit garçon", "Un Bébé", "Une Grande prêtresse", "Un Marchande"],
        ["Le Coffre en or", "Le Sceptre en or", "3 Rubis", "La Couronne", "Un Orbe en cristal", "Un Anneau en 1 exemplaire"],
        ["Un Arc", "Une Epee", "Une Masse", "Un Kriss", "Un Fléau", "Une Hallebarde", "Une Baguette", "Un Bouclier en acier", "Un Sceptre qui brille"],
        ["Le Fort", "La Vieille cabane pourrie", "Le Manoir", "La Boulangerie", "Le Moulin", "La Maison du pont", "La Halle du marché", "Le Donjon", "La Petite ville sur la côte", "La Grotte humide", "La Ville géante au dessus d'un gouffre", "Le Désert", "La Ville fortifiée", "La Campagne bucolique"]));

    this.environments.push(
      new Environment("Space Opera", [
          new Enemy("Général des Astrobots", 3),
          new Enemy("Commandant des Astrobots", 2),
          new Enemy("Astrobot", 1),
          new Enemy("Reine Alien", 3),
          new Enemy("Alien", 2),
          new Enemy("Rat-alien", 1),
          new Enemy("Sarlacc", 3),
          new Enemy("Araignée à tentacules", 2),
          new Enemy("Guerrier-plouc", 1),
        ],
        ["Brigand de l'espace", "Wookie", "Gungan", "Ewok", "Hutt"],
        ["Cristal de Bouiboui", "Traité de paix", "Documents secrets", "Plan de l'étoile de la mort"],
        ["Sabre Laser", "Pistolet laser", "Marteau téléscopique", "BFG 9000", "Arbalete à explosifs", "Lance-roquettes"],
        ["Spatioport de 3ème zone", "Bar mal fréquenté", "Station sur astéroïde", "Planète désert", "Planète jungle"]));
    this.missionsType = [];
    /*this.missionsType.push(
      new MissionType(ACTION.ATTAQUER, CIBLE.BATIMENT)
    )*/
  }

  getEnvironments(): Environment[] {
    return this.environments;
  };

  getMissions(): MissionType[] {
    return [];//this.missions;
  }

  createRandomMission(env: Environment) {
    let action = randomInArray([ACTION.DEFENDRE, ACTION.DETRUIRE, ACTION.TROUVER, ACTION.ATTAQUER]);
    let cible = randomInArray([CIBLE.ARME, CIBLE.TRESOR, CIBLE.PERSONNAGE, CIBLE.BATIMENT]);

    return new MissionType(action, cible, env);
  }

  createRandomArc(): Arc[] {
    return [];
  }

  createHistoire(env: Environment): Arc {

    const arcHistoire = new Arc([
        new Arc([
            new Arc([], this.createRandomMission(env), this.createGroupe(env, 1)),
            new Arc([], this.createRandomMission(env), this.createGroupe(env, 1))],
          this.createRandomMission(env), this.createGroupe(env, 1)),
        new Arc([
            new Arc([], this.createRandomMission(env), this.createGroupe(env, 2)),
            new Arc([], this.createRandomMission(env), this.createGroupe(env, 2))
          ],
          this.createRandomMission(env), this.createGroupe(env, 1)),
        new Arc([
            new Arc([], this.createRandomMission(env), this.createGroupe(env, 2)),
            new Arc([], this.createRandomMission(env), this.createGroupe(env, 3))
          ],
          this.createRandomMission(env), this.createGroupe(env, 3))
      ],
      this.createRandomMission(env), this.createGroupe(env, 3));
    return arcHistoire;
  }

  createGroupe(env: Environment, niveau: number): Enemy[] {
    const res = [];
    if (niveau == 1) {
      res.push(this.randomEnemy(env, 1));
      res.push(this.randomEnemy(env, 1));
    }
    if (niveau == 2) {
      res.push(this.randomEnemy(env, 2));
      res.push(this.randomEnemy(env, 1));
      res.push(this.randomEnemy(env, 1));
    }
    if (niveau == 3) {
      res.push(this.randomEnemy(env, 3));
      res.push(this.randomEnemy(env, 2));
      res.push(this.randomEnemy(env, 1));
      res.push(this.randomEnemy(env, 1));
    }
    return res;
  }

  randomEnemy(env: Environment, level: number) {
    let sous = env.enemies.filter(e => e.level === level);
    return sous[random(sous.length)];
  }
}
