var app = angular.module('codenames', []);

app.controller('CodenamesCtrl', function($scope, $location) {
    $scope.setRole = function(role) {
        $scope.role = role;
        $scope.seed = "ma graine " + Math.floor(Math.random() * 1000);
    }
    
    $scope.reset = function() {
        $scope.demarree = false;
        $scope.role = undefined;
        $scope.seed = "ma graine " + Math.floor(Math.random() * 1000);
        $scope.tableauIndices = [];
        $scope.tableauMots = [];
    }
       
    
    $scope.dico = 1;
    $scope.generateRandomFonction = function(seed) {
        /*Math.random = function() {
            seed = Math.sin(seed) * 10000;
            return seed - Math.floor(seed);
        };*/
        
        var m_w  = 987654321 + seed;
        var m_z  = 98123456789 - seed;
        var mask = 0xffffffff;

        Math.random = function() {
          m_z = (36969 * (m_z & 65535) + (m_z >> 16)) & mask;
          m_w = (18000 * (m_w & 65535) + (m_w >> 16)) & mask;

          var result = ((m_z << 16) + m_w) & mask;
          result /= 4294967296;

          return result + 0.5;
        }
    }

    function getGraineEspion(graineMaitre) {
        return inthash($scope.seed);
    }

    $scope.generateMaitre = function() {
        $scope.generateRandomFonction(inthash($scope.graineMaitre));
        $scope.tableauIndices = getIndices();
        $scope.graineEspion = Math.floor(Math.random() * 10000);
        $scope.generateRandomFonction($scope.graineEspion);
        $scope.tableauMots = getMots($scope.dico);
        $scope.demarree = true;
        console.log("resultat : ", $scope.tableauIndices, $scope.tableauMots);
        for (var i = 0; i < 5; i++) {
            for (var j = 0; j < 5; j++) {
                switch ($scope.tableauIndices[i][j]) {
                    case 'R' : $scope.tableauMots[i][j].style = 'rouge'; break;
                    case 'B' : $scope.tableauMots[i][j].style = 'bleu'; break;
                    case ' ' : $scope.tableauMots[i][j].style = 'marron'; break;
                    case 'X' : $scope.tableauMots[i][j].style = 'noir'; break;
               }
            }
        }
    }
    
    $scope.generateEspion = function() {
        console.log($scope.graineEspion);
        $scope.generateRandomFonction($scope.graineEspion);
        
        $scope.tableauMots = getMots($scope.dico);
        $scope.demarree = true;
        console.log("resultat : ", $scope.tableauMots);
    }
    
    $scope.generateDuel = function(){
        $scope.generateRandomFonction(+$scope.graineEspion);
        
        $scope.tableauIndices = getIndices();
        console.log("essais de random : ", Math.random(), Math.random(), Math.random());
        $scope.tableauMots = getMots($scope.dico);
        $scope.demarree = true;
        console.log("resultat : ", $scope.tableauMots)
    }

    function getMots(dico) {
        var mots;
        if (dico == 2) {
            mots = "javascript - javaEE - beans - spring - docker - container - servlet - refacto - test - unitaire - tdd - clavier - écran - bug - régression - " +
                "touche - python - php - cms - struts - développeur - chef de projet - product owner - scrum master - agile - post-it - lunettes - portable - scala - classe - pattern - unix - windows - apple - macbook - mobile - interface - " +
                "css - html - site - backoffice - front - fullstack - xebia - cap gemini - ippon - octo - rooftop - babyfoot - paris - bordeaux - lyon - richmond - intelliJ - eclipse - atom - notepad - tomcat - jetty - membre - champ - fatigue - rtt - prime - cooptation - unité centrale - prise - " +
                "fauteuil - DSI - costume - cravate - wifi - password - login - code smell - chiffrement - token - autorisation - authentification - Amazon - " +
                "session - afk - kata - kanban - jira - commit - merge - problème - git - unicode - cvs - subversion - linus - " +
                "maven - ant - hibernate - jpa - ansible - oracle - mysql - cassandra - bdd - nosql - mongodb - fonction - breakpoint - " +
                "validation - use case - schéma - lisp - nolife - café - sandwich - brownbaglunch - devoxx - angularJs - emberJs - jquery - " +
                "yolo - fonctionnalité - ajax - url - algorithme - applet - archive - entrée - sortie - flux - browser - cache - cookie - " +
                "console";
        } else if (dico == 1) {
            mots = "france - espagne - japon - allemagne - etats-unis - bretagne - sud - est - nord - ouest - angle - armoire - banc - bureau - cabinet - carreau - chaise - classe - clé - coin - couloir - dossier - eau - " +
                "normandie - angleterre - chine - afrique - asie - paris - école - écriture - entrée - escalier - étagère - étude - extérieur - fenêtre - intérieur - lavabo - lecture - lit - " +
                "marche - matelas - meuble - mousse - mur - peluche - placard - plafond - porte - portemanteau - poubelle - " +
                "rentrée - rideau - robinet - salle - savon - serrure - serviette - siège - sieste - " +
                "silence - sol - sommeil - sonnette - sortie - table - tableau - tabouret - tapis - tiroir - toilette - vitre - w.-c. - " +
                "feutre - pointe - mine - gomme - dessin - coloriage - rayure - peinture - pinceau - " +
                "couleur - papier - feuille -carton - ciseaux - découpage - pliage - pli - colle - affaire - " +
                "boîte - caisse - jouet - jeu - dé - cube - perle - " +
                "carré - rond - tampon - livre - histoire - bibliothèque - image - album - titre - BD - " +
                "conte - dictionnaire - magazine - catalogue - page - ligne - mot - enveloppe - étiquette - " +
                "appareil - cédé - cédérom - chanson - chiffre - contraire - différence - " +
                "doigt - écran - écriture - film - fois - idée - instrument - intrus - lettre - liste - magnétoscope - main - micro - " +
                "modèle - musique - nom - nombre - orchestre - ordinateur - photo - point - poster - pouce - prénom - question - radio - " +
                "sens - tambour - télécommande - téléphone - télévision - trait - trompette - voix - zéro - ami - attention - " +
                "camarade - colère - copain - coquin - dame - directeur - droit - effort - élève - enfant - fatigue - faute - " +
                "fille - garçon - gardien - madame - maître - maîtresse - mensonge - ordre - personne - retard - sourire - travail - " +
                "arrosoir - assiette - balle - bateau - boîte - bouchon - bouteille - bulles - canard - casserole - cuillère - cuvette - " +
                "douche - blanc - vert - noir - rouge - bleu - gouttes - litre - moulin - pluie - poisson - pont - pot - roue - " +
                "saladier - seau - trou - verre - arc - bagage - baguette - barbe - bonnet - " +
                "botte - bouton - bretelle - casque - ceinture - chapeau - chaussure - " +
                "chemise - cigarette - col - collant - couronne - cravate - culotte - épée - fée - flèche - fusil - gant - " +
                "habit - jean - jupe - lacet - linge - lunettes - magie - maillot - manche - manteau - " +
                "moufle - nœud - paire - pantalon - pied - poche - prince - pull-over - pyjama - reine - robe - roi - ruban - semelle - " +
                "soldat - sorcière - tache - taille - talon - tissu - uniforme - valise - veste - vêtement - aiguille - ampoule - " +
                "avion - bois - bout - bricolage - bruit - cabane - carton - clou - colle - crochet - élastique - ficelle - fil - " +
                "marionnette - marteau - métal - mètre - morceau - moteur - objet - outil - peinture - pinceau - planche - plâtre - scie - " +
                "tournevis - vis - voiture - accident - aéroport - auto - camion - engin - feu - frein - fusée - garage - gare - grue - " +
                "hélicoptère - moto - panne - parking - pilote - pneu - quai - train - virage - vitesse - voyage - wagon - zigzag - " +
                "acrobate - arrêt - arrière - barre - bord - bras - chaise - cheville - chute - cœur - corde - " +
                "corps - côté - cou - coude - cuisse - danger - doigts - dos - échasses - échelle - épaule - équipe - escabeau - fesse - " +
                "filet - fond - genou - gymnastique - hanche - jambes - jeu - mains - milieu - montagne - escalade - muscle - numéro - " +
                "ongle - parcours - pas - passerelle - pente - peur - pieds - plongeoir - poignet - poing - " +
                "saut - serpent - sport - suivant - tête - tour - trampoline - tunnel - " +
                "ventre - bagarre - ballon - bande - bicyclette - bille - cadenas - château - " +
                "coup - cour - course - échasse - flaque - paix - pardon - partie - pédale - pelle - pompe - préau - raquette - rayon - " +
                "récréation - sable - sifflet - signe - tas - tricycle - tuyau - vélo - filet - allumette - anniversaire - appétit - " +
                "beurre - coquille - crêpes - croûte - dessert - envie - faim - four - galette - gâteau - goût - invitation - " +
                "langue - lèvres - liquide - louche - mie - moitié - moule - odeur - œuf - part - pâte - pâtisserie - recette - rouleau - " +
                "sel - soif - tarte - tranche - yaourt - glaçon - jus - kiwi - lame - mûre - noyau - paille - pamplemousse - râpe - " +
                "arête - femme - frite - gobelet - jambon - os - poulet - purée - radis - restaurant - sole - animal - bébés - bouche - " +
                "cage - câlin - caresse - foin - graines - lapin - maison - nez - œil - oreille - patte - " +
                "toit - yeux - légume - abeille - agneau - aile - âne - arbre - bain - barque - bassin - bébé - bec - bête - bœuf - " +
                "boue - bouquet - bourgeon - branche - caillou - campagne - car - champ - chariot - chat - cheminée - " +
                "cheval - chèvre - chien - cochon - colline - coq - coquelicot - crapaud - départ - dindon - escargot - étang - " +
                "ferme - fermier - feuille - flamme - fleur - fontaine - fumée - grain - grenouille - herbe - " +
                "hérisson - insecte - jardin - miel - mouche - mouton - oie - oiseau - pierre - " +
                "pigeon - plante - plume - poney - poule - poussin - prairie - rat - rivière - route - tortue - tracteur - tulipe - " +
                "vache - aigle - animaux - aquarium - bêtes - cerf - chouette - crocodile - dauphin - éléphant - " +
                "lion - loup - ours - phoque - renard - requin - " +
                "rhinocéros - singe - tigre - zèbre - zoo - épingle - bâton - bêtise - bonhomme - bottes - canne - cauchemar - cri - " +
                "danse - déguisement - dinosaure - drapeau - fête - figure - géant - gens - grand-mère - grand-père - joie - " +
                "joue - journaux - maquillage - masque - monsieur - moustache - ogre - princesse - rue - trottoir - Noël - boule - " +
                "cadeau - chance - cube - humeur - papillon - spectacle - surprise - trou - visage - âge - " +
                "an - année - après-midi - calendrier - début - dimanche - été - étoile - fin - heure - hiver - " +
                "horloge - jeudi - jour - journée - lumière - lundi - lune - mardi - matin - mercredi - midi - minuit - minute - mois - " +
                "moment - montre - nuit - ombre - pendule - retour - réveil - saison - samedi - semaine - soir - soleil - temps - univers - " +
                "vacances - vendredi - air - arc-en-ciel - brouillard - ciel - éclair - flocon - goutte - hirondelle - luge - neige - " +
                "nuage - orage - ouragan - parapluie - parasol - ski - tempête - tonnerre - traîneau - vent - assiette - " +
                "balai - biscuit - boisson - bol - bonbon - céréale - confiture - couteau - couvercle - couvert - cuillère - " +
                "cuisine - cuisinière - désordre - dînette - éponge - évier - four - fourchette - lait - lave-linge - lessive - machine - " +
                "nappe - pain - pile - plat - plateau - poêle - réfrigérateur - repas - tartine - torchon - vaisselle - argent - aspirateur - " +
                "bague - barrette - bijou - bracelet - brosse - cadre - canapé - chambre - cheveu - chiffon - cil - coffre - " +
                "collier - couette - coussin - couverture - dent - dentifrice - drap - fauteuil - feràrepasser - frange - glace - lampe - " +
                "lit - ménage - or - oreiller - parfum - peigne - pouf - poupée - poussette - poussière - shampoing - sourcil - trésor - " +
                "tube - vase - adulte - album - amour - baiser - biberon - bisou - caprice - cimetière - " +
                "fils - frère - grand-parent - homme - jumeau - maman - mari - mariage - mère - papa - parent - père - " +
                "rasoir - sœur - ambulance - bosse - champignon - dentiste - docteur - fièvre - front - " +
                "gorge - infirmier - jambe - larme - médecin - mine - pansement - peau - piqûre - " +
                "poison - sang - santé - squelette - trousse - araignée - brouette - chenille - fourmi - herbe - " +
                "lézard - râteau - souris - taupe - terrain - terre - terrier - tige - ver - portière - sac - " +
                "billet - caisse - farce - grimace - grotte - pays - ticket - camp - chasseur - " +
                "chemin - chêne - corbeau - écorce - écureuil - forêt - gourde - lac - loupe - marron - mûre - moustique - " +
                "nid - paysage - pin - rocher - sapin - sommet - tente - adresse - appartement - ascenseur - balcon - boucherie - " +
                "boulangerie - boutique - bus - caniveau - caravane - carrefour - cave - charcuterie - cinéma - cirque - " +
                "cloche - clocher - clown - coiffeur - courrier - croix - église - embouteillage - endroit - enveloppe - " +
                "essence - facteur - fleuriste - foire - hôpital - hôtel - immeuble - incendie - laisse - magasin - manège - médicament - " +
                "moineau - monde - monument - ouvrier - palais - panneau - paquet - parc - passage - pharmacie - pharmacien - piscine - " +
                "place - police - policier - pompier - poste - quartier - timbre - travaux - usine - village - ville - " +
                "voisin - volet - abricot - ail - aliment - ananas - banane - bifteck - café - carotte - chocolat - chou - citron - " +
                "citrouille - concombre - coquillage - corbeille - crabe - crevette - endive - farine - fraise - " +
                "fromage - fruit - gâteau - haricot - huile - légume - marchand - melon - monnaie - navet - noisette - noix - nourriture - " +
                "oignon - orange - panier - pâtes - pêche - poire - poireau - pomme - prix - prune - " +
                "queue - raisin - riz - salade - sucre - thé - tomate - viande - vin - baleine - bouée - île - jumelles - marin - mer - " +
                "mouette - navire - pêcheur - plage - poisson - port - sardine - serviette - vague - voile";
        } else { 
            mots = "Dan - Yannick - Alain - Mejdi - Séverine - Agnès - Junior - Totocaca - " +
                "ordinateur - recette - algorithme - calcul - serveur - programmation - interface - " + 
                "plat - rôti - salade - concombre - diététique - micro-ondes - surgelé - eau - sucre - sel - poivre - assiette - couteau - fourchette - " + 
                "fodmaps - vitamine A - vitamine C - fer - carence - allergie - gluten - blé - farine - part - " + 
                "femme enceinte - pharmacien - selles molles - selles dures - digestion - menu - " + 
                "Mogador - grec - 5ème étage - ascenseur - bobun - pizza - crêpe - sandwich - thé - ";
        }
        mots = mots.split(' - ');
        shuffle(mots);
        var sousgroupe = _.first(mots, 25);
        sousgroupe = _.map(sousgroupe, function(m) {
            return {
                mot: m,
                style: "rien"
            };
        });
        return decoupe(sousgroupe, 5);
    }
    
    function getIndices() {
        var tableau = [];
        for (var i = 0; i < 9; i++) {
            tableau.push("R");
        }
        for (var i = 0; i < 8; i++) {
            tableau.push("B");
        }
        for (var i = 0; i < 7; i++) {
            tableau.push(" ");
        }
        tableau.push("X");

        shuffle(tableau);
        return decoupe(tableau, 5);
    }

    function getIndices2Joueurs() {
        var tableau = [];
        for (var i = 0; i < 6; i++) {
            tableau.push("R");
        }
        for (var i = 0; i < 3; i++) {
            tableau.push("RB");
        }
        for (var i = 0; i < 6; i++) {
            tableau.push("B");
        }
        for (var i = 0; i < 7; i++) {
            tableau.push(" ");
        }
        tableau.push("X");

        shuffle(tableau);
        return decoupe(tableau, 5);
    }

    function inthash(str) {
        var hash = 5381;
        for (i = 0; i < str.length; i++) {
            char = str.charCodeAt(i);
            hash = ((hash << 5) + hash) + char; /* hash * 33 + c */
        }
        return hash;
    }

    function decoupe(tab, n) {
        return _.chain(tab).groupBy(function(element, index) {
                return Math.floor(index / n);
            }).toArray()
            .value();
    }

    function shuffle(a) {
        var j, x, i;
        for (i = a.length; i; i--) {
            j = Math.floor(Math.random() * i);
            x = a[i - 1];
            a[i - 1] = a[j];
            a[j] = x;
        }
    }

    $scope.modifyStyle = function(cell) {
        console.log("role", $scope.role);
        if ($scope.role == 'M') {
            cell.checked = !cell.checked;
        } else {
            switch (cell.style) {
                case 'rien':
                    cell.style = 'rouge';
                    break;
                case 'rouge':
                    cell.style = 'bleu';
                    break;
                case 'bleu':
                    cell.style = 'marron';
                    break;
                case 'marron':
                    cell.style = 'noir';
                    break;
                default:
                    cell.style = 'rien';
                    break;
            }
        }
    }
});
