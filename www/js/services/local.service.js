angular.module('starter.services')
    .service('Local', function(localStorageService, $q) {
        var MES_JEUX = 'mesjeux';
        var jeux = localStorageService.get(MES_JEUX);

        console.log("localstorage : ", jeux);
        if (!jeux) {
            jeux = {};
        }
        return {
            getJeu: function(jeu.idbgg) {
                if (jeux[jeu.idbgg]) {
                    return jeux[jeu.idbgg];
                } else {
                    return null;
                }
            },
            addJeu: function(jeu) {
                var monjeu = {possede : true, jeu : jeu};
                if (getJeu(jeu.idbgg)) {
                    console.log("deja ajoute");
                }
                jeux[jeu.idbgg] = monjeu;
                saveJeux();
            },
            saveJeux: function() {
                localStorageService.set(MES_JEUX, jeux);
            },
            wishJeu : function(jeu) {
                jeux[jeu.idbgg] = {souhaite : true, jeu : jeu};
                saveJeux();
            },
            removeJeu : function(jeu) {
                delete jeux[jeu.idbgg];
            },
            preteJeu : function(jeu, nom, date) {
                if ( !jeux[jeu.idbgg])) {
                    console.log("trouve pas");
                }
                jeux[jeu.idbgg].prete = true;
                jeux[jeu.idbgg].emprunteur = nom;
                jeux[jeu.idbgg].date = date;
            },
            getJeuxPossedes : function() {

                return jeux;
            }
        }
    });