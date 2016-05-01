angular.module('starter.services')
    .service('Ludotheque', function(Jeu, JoueurJeu, Compte, localStorageService, $q) {
        var MES_JEUX = 'mesjeux';
        var mesJeux = localStorageService.get(MES_JEUX);
        console.log("localstorage : ", mesJeux);
        if (!mesJeux) {
            //mesjeux = [];
        }
        return {
            addJeu: function(jeu) {
                var dataJeu = {
                    possede: true,
                    pretable: null,
                    dateFinPret: null,
                    infos: null,
                    wishlist: null,
                    vendable: null,
                    prix: null,
                    nomJeu: jeu.nomTrouve ? jeu.nomTrouve : jeu.nom,
                    jeu: jeu,
                    favori: null,
                    note: null,
                    id: null
                };
                mesJeux.push({possede : true, idbgg : jeu.idbgg});

                return JoueurJeu.addMonJeu(dataJeu, function(res) {
                    console.log(res);
                    return res;
                }, function(err) {
                    return "";
                });
            },
            chercheNomsIds: function(requete) {
                var defer = $q.defer();
                /*Jeu.searchBGG({
                    "requete": requete
                }, function(res) {
                    defer.resolve(res);
                }, function(res) {
                    console.log("erreur ", res);
                    defer.reject(res);
                });*/
                defer.resolve([{"type":"boardgame","id":13,"name":{"type":"alternate","value":"Les Colons de Catane"},"year":{"value":"1995"}},{"type":"boardgame","id":278,"name":{"type":"alternate","value":"Les Colons de Catane"},"year":{"value":"1996"}},{"type":"boardgame","id":21817,"name":{"type":"alternate","value":"Les Colons de Catane: Extension Artistes et Mécènes"},"year":{"value":"2006"}},{"type":"boardgame","id":12543,"name":{"type":"alternate","value":"Les Colons de Catane: Extension Barbares et Négociants"},"year":{"value":"2003"}},{"type":"boardgame","id":29718,"name":{"type":"alternate","value":"Les Colons de Catane: Extension Chevaliers et Marchands"},"year":{"value":"1999"}},{"type":"boardgame","id":29715,"name":{"type":"alternate","value":"Les Colons de Catane: Extension Commerce et Evolution"},"year":{"value":"1999"}},{"type":"boardgame","id":29714,"name":{"type":"alternate","value":"Les Colons de Catane: Extension Magiciens et Dragons"},"year":{"value":"1999"}},{"type":"boardgame","id":29716,"name":{"type":"alternate","value":"Les Colons de Catane: Extension Politique et Intrigue"},"year":{"value":"1999"}},{"type":"boardgame","id":29717,"name":{"type":"alternate","value":"Les Colons de Catane: Extension Sciences et Progrès"},"year":{"value":"1999"}},{"type":"boardgame","id":38845,"name":{"type":"alternate","value":"Les Colons de Catane: Le jeu de dés"},"year":{"value":"2007"}},{"type":"boardgame","id":325,"name":{"type":"alternate","value":"Les Colons de Catane: Les Marins de Catane"},"year":{"value":"1997"}},{"type":"boardgame","id":19343,"name":{"type":"alternate","value":"Les Colons de Catane: Pêcheurs"},"year":{"value":"2005"}},{"type":"boardgame","id":926,"name":{"type":"alternate","value":"Les Colons de Catane: Villes et Chevaliers"},"year":{"value":"1998"}}]);


                return defer.promise;
            },
            getDetails: function(ids) {
                /*return Jeu.getBGGDetails({
                    ids: ids
                }, function(res) {
                    return res;
                }, function(error) {
                    return error;
                }).$promise;*/
                var defer = $q.defer();
                defer.resolve(
                [{"id":154,"idBgg":13,"nom":"Catan","autresNoms":"Catan|Catan Telepesei|Catan: Das Spiel|Catan: Gra planszowa|Catan: Il Gioco|Catan: Landnemarnir|Catan: O Jogo|Catane|Catanin Uudisasukkaat|I Coloni di Catan|I Coloni di Katan|Coloniștii din Catan|Colonizadores de Catan|Los Colonos de Catán|Les Colons","nbJoueursMin":3,"nbJoueursMax":4,"tempsJeuMin":120,"tempsJeuMax":120,"minAge":10,"tempsRegles":null,"thumbnail":"//cf.geekdo-images.com/images/pic2419375_t.jpg","image":"//cf.geekdo-images.com/images/pic2419375.jpg","bestFor":null,"annee":null,"categories":"Negotiation","mecaniques":"Dice Rolling|Hand Management|Modular Board|Route/Network Building|Trading","jeutype":"Boardgame","extensions":"167903|178656|104774|26352|176966|86008|60134|149857|173651|131362|39093|32270|187366|186395|131958|86669|110794|189097|167573|2807|183139|926|4101|73809|20038|135378|144419|54528|143249|132481|101942|325|4103|169486|27760|34691|42147|128751|91061|95940|89606|21101|41161|21097|21443|21100|21098|21099|144851|90100|22598|19343|20247|10817|21046|1137|84977|26079|167836|306|1361|167841|31933|37690|56"},{"id":155,"idBgg":278,"nom":"Catan Card Game","autresNoms":"Catan Card Game|Catan Telepesei: Kártyajáték|Catan το παιχνίδι με κάρτες|Catan: Das Duell|Catanin uudisasukkaat: Korttipeli|I Coloni di Catan: Gioco di Carte|Colonistii din Catan jocul de carti|Los colonos de Catán: El juego de cartas|Les Colons de C","nbJoueursMin":2,"nbJoueursMax":2,"tempsJeuMin":90,"tempsJeuMax":90,"minAge":10,"tempsRegles":null,"thumbnail":"//cf.geekdo-images.com/images/pic135066_t.jpg","image":"//cf.geekdo-images.com/images/pic135066.jpg","bestFor":null,"annee":null,"categories":"Card Game|City Building|Territory Building","mecaniques":"Card Drafting|Dice Rolling|Hand Management|Trading","jeutype":"Boardgame","extensions":"21817|12543|2915|37774|122250|97596|97594|97593|97591|97590|97541|97540|5227|29715|155354|154961|29716|29718|29717|29714"},{"id":156,"idBgg":21817,"nom":"Catan Card Game: Artisans & Benefactors","autresNoms":"Catan Card Game: Artisans & Benefactors|Les Colons de Catane: Extension Artistes et Mécènes|De Kolonisten van Catan: Het Kaartspel – Kunstenaars & Weldoeners|Die Siedler von Catan: Kartenspiel – Künstler & Wohltäter","nbJoueursMin":2,"nbJoueursMax":2,"tempsJeuMin":90,"tempsJeuMax":90,"minAge":10,"tempsRegles":null,"thumbnail":"//cf.geekdo-images.com/images/pic508907_t.jpg","image":"//cf.geekdo-images.com/images/pic508907.jpg","bestFor":null,"annee":null,"categories":"Card Game|Civilization|Expansion for Base-game","mecaniques":"Dice Rolling|Trading","jeutype":"Extension","extensions":"278"},{"id":157,"idBgg":12543,"nom":"Catan Card Game: Barbarians & Traders Upgrade Kit","autresNoms":"Catan Card Game: Barbarians & Traders Upgrade Kit|Les Colons de Catane: Extension Barbares et Négociants|De Kolonisten van Catan: Het Kaartspel – Barbaren & Handelsheren|Die Siedler von Catan: Kartenspiel – Barbaren & Handelsherren","nbJoueursMin":2,"nbJoueursMax":2,"tempsJeuMin":120,"tempsJeuMax":120,"minAge":10,"tempsRegles":null,"thumbnail":"//cf.geekdo-images.com/images/pic998166_t.jpg","image":"//cf.geekdo-images.com/images/pic998166.jpg","bestFor":null,"annee":null,"categories":"Card Game|Civilization|Expansion for Base-game","mecaniques":"Trading","jeutype":"Extension","extensions":"278"},{"id":158,"idBgg":29718,"nom":"Die Siedler von Catan: Kartenspiel – Ritter & Händler","autresNoms":"Die Siedler von Catan: Kartenspiel – Ritter & Händler|I Coloni di Catan: Il Gioco di Carte – Cavalieri & Mercanti|Les Colons de Catane: Extension Chevaliers et Marchands|De Kolonisten van Catan: Het Kaartspel – Ridders en kooplieden|The Settlers of C","nbJoueursMin":2,"nbJoueursMax":2,"tempsJeuMin":90,"tempsJeuMax":90,"minAge":12,"tempsRegles":null,"thumbnail":"//cf.geekdo-images.com/images/pic1493732_t.jpg","image":"//cf.geekdo-images.com/images/pic1493732.jpg","bestFor":null,"annee":null,"categories":"Card Game|Civilization|Expansion for Base-game","mecaniques":"Dice Rolling|Trading","jeutype":"Extension","extensions":"278"},{"id":159,"idBgg":29715,"nom":"Die Siedler von Catan: Kartenspiel – Handel & Wandel","autresNoms":"Die Siedler von Catan: Kartenspiel – Handel & Wandel|I Coloni di Catan: Il Gioco di Carte – Commercio & Sviluppo|Les Colons de Catane: Extension Commerce et Evolution|De Kolonisten van Catan: Het Kaartspel – Handel & Wandel|The Settlers of Catan Card","nbJoueursMin":2,"nbJoueursMax":2,"tempsJeuMin":90,"tempsJeuMax":90,"minAge":12,"tempsRegles":null,"thumbnail":"//cf.geekdo-images.com/images/pic1493727_t.jpg","image":"//cf.geekdo-images.com/images/pic1493727.jpg","bestFor":null,"annee":null,"categories":"Card Game|Civilization|Expansion for Base-game","mecaniques":"Dice Rolling|Trading","jeutype":"Extension","extensions":"278"},{"id":160,"idBgg":29714,"nom":"Die Siedler von Catan: Kartenspiel – Zauberer & Drachen","autresNoms":"Die Siedler von Catan: Kartenspiel – Zauberer & Drachen|I Coloni di Catan: Il Gioco di Carte – Stregoni & Draghi|Les Colons de Catane: Extension Magiciens et Dragons|De Kolonisten van Catan: Het Kaartspel – Tovenaars & Draken|The Settlers of Catan Ca","nbJoueursMin":2,"nbJoueursMax":2,"tempsJeuMin":90,"tempsJeuMax":90,"minAge":12,"tempsRegles":null,"thumbnail":"//cf.geekdo-images.com/images/pic1493733_t.jpg","image":"//cf.geekdo-images.com/images/pic1493733.jpg","bestFor":null,"annee":null,"categories":"Card Game|Civilization|Expansion for Base-game|Fantasy","mecaniques":"Dice Rolling|Trading","jeutype":"Extension","extensions":"278"},{"id":161,"idBgg":29716,"nom":"Die Siedler von Catan: Kartenspiel – Politik & Intrige","autresNoms":"Die Siedler von Catan: Kartenspiel – Politik & Intrige|I Coloni di Catan: Il Gioco di Carte – Politica & Intrighi|Les Colons de Catane: Extension Politique et Intrigue|De Kolonisten van Catan: Het Kaartspel – Politiek & Intrige|The Settlers of Catan ","nbJoueursMin":2,"nbJoueursMax":2,"tempsJeuMin":90,"tempsJeuMax":90,"minAge":12,"tempsRegles":null,"thumbnail":"//cf.geekdo-images.com/images/pic1493730_t.jpg","image":"//cf.geekdo-images.com/images/pic1493730.jpg","bestFor":null,"annee":null,"categories":"Card Game|Civilization|Expansion for Base-game","mecaniques":"Dice Rolling|Trading","jeutype":"Extension","extensions":"278"},{"id":162,"idBgg":29717,"nom":"Die Siedler von Catan: Kartenspiel – Wissenschaft & Fortschritt","autresNoms":"Die Siedler von Catan: Kartenspiel – Wissenschaft & Fortschritt|I Coloni di Catan: Il Gioco di Carte – Scienza & Progresso|Les Colons de Catane: Extension Sciences et Progrès|De Kolonisten van Catan: Het Kaartspel – Wetenschap & Vooruitgang|The Settl","nbJoueursMin":2,"nbJoueursMax":2,"tempsJeuMin":90,"tempsJeuMax":90,"minAge":12,"tempsRegles":null,"thumbnail":"//cf.geekdo-images.com/images/pic1493726_t.jpg","image":"//cf.geekdo-images.com/images/pic1493726.jpg","bestFor":null,"annee":null,"categories":"Card Game|Civilization|Expansion for Base-game","mecaniques":"Dice Rolling|Trading","jeutype":"Extension","extensions":"278"},{"id":163,"idBgg":38845,"nom":"Catan Dice Game Plus","autresNoms":"Catan Dice Game Plus|Les Colons de Catane: Le jeu de dés|Osadnicy z Catanu: Gra Kościana Plus|Die Siedler von Catan: Das Würfelspiel \"plus\"","nbJoueursMin":2,"nbJoueursMax":4,"tempsJeuMin":30,"tempsJeuMax":30,"minAge":0,"tempsRegles":null,"thumbnail":"//cf.geekdo-images.com/images/pic505434_t.jpg","image":"//cf.geekdo-images.com/images/pic505434.jpg","bestFor":null,"annee":null,"categories":"Dice|Expansion for Base-game|Print & Play","mecaniques":"Dice Rolling|Paper-and-Pencil|Set Collection","jeutype":"Extension","extensions":"27710"},{"id":164,"idBgg":325,"nom":"Catan: Seafarers","autresNoms":"Catan: Seafarers|Catan: Navegantes|Catan: Seefahrer|Catan: Sæfararnir|Catan: Tengeri utazó|Catan: Żeglarze|Catan: Θαλασσοπόροι|Catane: Marins|Catanin uudisasukkaat: Merenkävijät|I Coloni di Catan: Marinai|Colonistii din Catan: Navigatorii|Les Colons ","nbJoueursMin":3,"nbJoueursMax":4,"tempsJeuMin":90,"tempsJeuMax":90,"minAge":10,"tempsRegles":null,"thumbnail":"//cf.geekdo-images.com/images/pic2420293_t.jpg","image":"//cf.geekdo-images.com/images/pic2420293.jpg","bestFor":null,"annee":null,"categories":"Civilization|Expansion for Base-game|Exploration|Nautical|Negotiation","mecaniques":"Dice Rolling|Hand Management|Memory|Modular Board|Route/Network Building|Trading","jeutype":"Extension","extensions":"86669|4103|42147|21101|21443|90100|134277|13"},{"id":165,"idBgg":19343,"nom":"The Settlers of Catan: The Fishermen of Catan","autresNoms":"The Settlers of Catan: The Fishermen of Catan|Les Colons de Catane: Pêcheurs|Die Fischer von Catan|The Fishermen of Catan|De Kolonisten van Catan: De Vissers|Kolonisten van Catan: De Vissers van Catan|Les Pêcheurs de Catane","nbJoueursMin":3,"nbJoueursMax":4,"tempsJeuMin":60,"tempsJeuMax":60,"minAge":10,"tempsRegles":null,"thumbnail":"//cf.geekdo-images.com/images/pic154599_t.jpg","image":"//cf.geekdo-images.com/images/pic154599.jpg","bestFor":null,"annee":null,"categories":"Economic|Expansion for Base-game|Negotiation","mecaniques":"Dice Rolling|Modular Board|Trading","jeutype":"Extension","extensions":"13"},{"id":166,"idBgg":926,"nom":"Catan: Cities & Knights","autresNoms":"Catan: Cities & Knights|Catan telepesei: Lovagok és Városok|Catan: Borgir og riddarar|Catan: Ciudades y Caballeros|Catan: Kaupungit ja Ritarit|Catan: Lovagok és városok|Catan: Miasta i Rycerze|Catan: Städte & Ritter|The Cities and Knights of Catan|I ","nbJoueursMin":3,"nbJoueursMax":4,"tempsJeuMin":90,"tempsJeuMax":90,"minAge":12,"tempsRegles":null,"thumbnail":"//cf.geekdo-images.com/images/pic2420315_t.jpg","image":"//cf.geekdo-images.com/images/pic2420315.jpg","bestFor":null,"annee":null,"categories":"Expansion for Base-game|Medieval|Negotiation","mecaniques":"Dice Rolling|Hand Management|Memory|Modular Board|Route/Network Building|Trading","jeutype":"Extension","extensions":"4101|42147|91061|89606|90100|13"}]
                );
                return defer.promise;
            },
            getMesJeux: function() {
                if (!!mesJeux) {
                    console.log("on a deja les jeux", mesJeux);
                    var defered = $q.defer();
                    defered.resolve(mesJeux);//resolve the promise with the data found
                    //or setTimeout(defered.resolve.bind(promise, 5)); if you want to maintain the async nature
                    return defered;//return a promise
                }
                return JoueurJeu.getMesJeux({},
                        function(res) {
                            console.log("ok get ms jeux ", res);
                            mesJeux = res;
                            return res;
                        })
                    .$promise;
            },
            getJeux: function(joueur) {
                return JoueurJeu.getJeux({
                            joueur: joueur
                        },
                        function(res) {
                            console.log("ok get jeux", res);
                            return res;
                        })
                    .$promise;
            },
            preteJeu: function(idJoueur, date) {
                return JoueurJeu.prete({
                        idJoueur: idJoueur,
                        date: date
                    },
                    function(res) {
                        console.log("ok jeu preté");

                    }).$promise;

            },
            supprimeJeu : function(jjeuId) {
                console.log("supprime ", jjeuId);
                return JoueurJeu.supprime({id : jjeuId}, function(res) {
                    console.log("res suppression jeu", res);
                }).$promise;
            },
            getMonJeu: function(id) {
                return JoueurJeu.get({
                            id: id
                        },
                        function(res) {
                            console.log("ok get mon jeux ", res);
                            return res;
                        })
                    .$promise;
            },
            getMesAmis: function() {
                return Compte.getMesAmis().$promise;
            },
            ajouteAmi: function(pseudonyme) {
                return Compte.ajouteAmi({
                            'pseudonyme': pseudonyme
                        }, {},
                        function(res) {
                            return res;
                        })
                    .$promise;
            },
            addCollection: function(collection) {
                var _this = this;
                angular.forEach(collection, function(item) {
                    _this.getJeux().push(item);
                });
                //localStorageService.set(MES_JEUX, mesjeux);
            }
        }
    });