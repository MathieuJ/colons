import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hex',
  templateUrl: './hex.component.html',
  styleUrls: ['./hex.component.scss']
})
export class HexComponent implements OnInit {
  g = document.getElementById('monSvg');

  size = 40;
  sr3sur2 = this.size * 0.866;

  mapDecalageX = 0;
  mapDecalageY = 4;

  centre1 = [-this.size / 2, this.sr3sur2];
  centre2 = [this.size / 2, this.sr3sur2];
  centre3 = [this.size, 0];
  centre4 = [this.size / 2, -this.sr3sur2];
  centre5 = [-this.size / 2, -this.sr3sur2];
  centre6 = [-this.size, 0];

  constructor() { }

  ngOnInit() {
  }


  /*
    rotPt(centre, pt, angle) {
      return [
        centre[0] + Math.cos(angle) * (pt[0] - centre[0]) - Math.sin(angle) * (pt[1] - centre[1]),
        centre[1] + Math.sin(angle) * (pt[0] - centre[0]) + Math.cos(angle) * (pt[1] - centre[1])
      ];
    }
  
    const tuileVide = {
      nom:"vide",
      ouvertures: [true, true, true, true, true, true], points: [
        centre1, centre2, centre3, centre4, centre5, centre6] };
  
    const tuileCentrale = {
      nom :"centrale",
      ouvertures: [true, true, true, true, true, true], points: [
        [-size / 2 - size / 10, sr3sur2 - sr3sur2 / 5],
        rotPt(centre1, [-size / 2 - size / 10, sr3sur2 - sr3sur2 / 5], 1 * Math.PI / 9),
        rotPt(centre1, [-size / 2 - size / 10, sr3sur2 - sr3sur2 / 5], 2 * Math.PI / 9),
        rotPt(centre1, [-size / 2 - size / 10, sr3sur2 - sr3sur2 / 5], 3 * Math.PI / 9),
        rotPt(centre1, [-size / 2 - size / 10, sr3sur2 - sr3sur2 / 5], 4 * Math.PI / 9),
        rotPt(centre1, [-size / 2 - size / 10, sr3sur2 - sr3sur2 / 5], 5 * Math.PI / 9),
        rotPt(centre1, [-size / 2 - size / 10, sr3sur2 - sr3sur2 / 5], 6 * Math.PI / 9),
  
        [size / 2 - size / 5, sr3sur2],
        rotPt(centre2, [size / 2 - size / 5, sr3sur2], 1 * Math.PI / 9),
        rotPt(centre2, [size / 2 - size / 5, sr3sur2], 2 * Math.PI / 9),
        rotPt(centre2, [size / 2 - size / 5, sr3sur2], 3 * Math.PI / 9),
        rotPt(centre2, [size / 2 - size / 5, sr3sur2], 4 * Math.PI / 9),
        rotPt(centre2, [size / 2 - size / 5, sr3sur2], 5 * Math.PI / 9),
        rotPt(centre2, [size / 2 - size / 5, sr3sur2], 6 * Math.PI / 9),
  
        [size - size / 10, sr3sur2 / 5],
        rotPt(centre3, [size - size / 10, sr3sur2 / 5], 1 * Math.PI / 9),
        rotPt(centre3, [size - size / 10, sr3sur2 / 5], 2 * Math.PI / 9),
        rotPt(centre3, [size - size / 10, sr3sur2 / 5], 3 * Math.PI / 9),
        rotPt(centre3, [size - size / 10, sr3sur2 / 5], 4 * Math.PI / 9),
        rotPt(centre3, [size - size / 10, sr3sur2 / 5], 5 * Math.PI / 9),
        rotPt(centre3, [size - size / 10, sr3sur2 / 5], 6 * Math.PI / 9),
  
        [size / 2 + size / 10, -sr3sur2 + sr3sur2 / 5],
        rotPt(centre4, [size / 2 + size / 10, -sr3sur2 + sr3sur2 / 5], 1 * Math.PI / 9),
        rotPt(centre4, [size / 2 + size / 10, -sr3sur2 + sr3sur2 / 5], 2 * Math.PI / 9),
        rotPt(centre4, [size / 2 + size / 10, -sr3sur2 + sr3sur2 / 5], 3 * Math.PI / 9),
        rotPt(centre4, [size / 2 + size / 10, -sr3sur2 + sr3sur2 / 5], 4 * Math.PI / 9),
        rotPt(centre4, [size / 2 + size / 10, -sr3sur2 + sr3sur2 / 5], 5 * Math.PI / 9),
        rotPt(centre4, [size / 2 + size / 10, -sr3sur2 + sr3sur2 / 5], 6 * Math.PI / 9),
  
        [-size / 2 + size / 5, -sr3sur2],
        rotPt(centre5, [-size / 2 + size / 5, -sr3sur2], 1 * Math.PI / 9),
        rotPt(centre5, [-size / 2 + size / 5, -sr3sur2], 2 * Math.PI / 9),
        rotPt(centre5, [-size / 2 + size / 5, -sr3sur2], 3 * Math.PI / 9),
        rotPt(centre5, [-size / 2 + size / 5, -sr3sur2], 4 * Math.PI / 9),
        rotPt(centre5, [-size / 2 + size / 5, -sr3sur2], 5 * Math.PI / 9),
        rotPt(centre5, [-size / 2 + size / 5, -sr3sur2], 6 * Math.PI / 9),
  
  
        [-size + size / 10, -sr3sur2 / 5],
        rotPt(centre6, [-size + size / 10, -sr3sur2 / 5], 1 * Math.PI / 9),
        rotPt(centre6, [-size + size / 10, -sr3sur2 / 5], 2 * Math.PI / 9),
        rotPt(centre6, [-size + size / 10, -sr3sur2 / 5], 3 * Math.PI / 9),
        rotPt(centre6, [-size + size / 10, -sr3sur2 / 5], 4 * Math.PI / 9),
        rotPt(centre6, [-size + size / 10, -sr3sur2 / 5], 5 * Math.PI / 9),
        rotPt(centre6, [-size + size / 10, -sr3sur2 / 5], 6 * Math.PI / 9)
  
      ].join(" ")
    };
  
    var tuileY = {
      nom : "y",
      ouvertures: [false, true, false, true, false, true], points: [
        [-size / 2 - size / 10, sr3sur2 - sr3sur2 / 5],
        rotPt(centre1, [-size / 2 - size / 10, sr3sur2 - sr3sur2 / 5], 1 * Math.PI / 9),
        rotPt(centre1, [-size / 2 - size / 10, sr3sur2 - sr3sur2 / 5], 2 * Math.PI / 9),
        rotPt(centre2, [size / 2 - size / 5, sr3sur2], 4 * Math.PI / 9),
        rotPt(centre2, [size / 2 - size / 5, sr3sur2], 5 * Math.PI / 9),
        rotPt(centre2, [size / 2 - size / 5, sr3sur2], 6 * Math.PI / 9),
  
        [size - size / 10, sr3sur2 / 5],
        rotPt(centre3, [size - size / 10, sr3sur2 / 5], 1 * Math.PI / 9),
        rotPt(centre3, [size - size / 10, sr3sur2 / 5], 2 * Math.PI / 9),
        rotPt(centre4, [size / 2 + size / 10, -sr3sur2 + sr3sur2 / 5], 4 * Math.PI / 9),
        rotPt(centre4, [size / 2 + size / 10, -sr3sur2 + sr3sur2 / 5], 5 * Math.PI / 9),
        rotPt(centre4, [size / 2 + size / 10, -sr3sur2 + sr3sur2 / 5], 6 * Math.PI / 9),
  
        [-size / 2 + size / 5, -sr3sur2],
        rotPt(centre5, [-size / 2 + size / 5, -sr3sur2], 1 * Math.PI / 9),
        rotPt(centre5, [-size / 2 + size / 5, -sr3sur2], 2 * Math.PI / 9),
        rotPt(centre6, [-size + size / 10, -sr3sur2 / 5], 4 * Math.PI / 9),
        rotPt(centre6, [-size + size / 10, -sr3sur2 / 5], 5 * Math.PI / 9),
        rotPt(centre6, [-size + size / 10, -sr3sur2 / 5], 6 * Math.PI / 9)
  
      ].join(" ")
    };
  
    var tuileM = {
      nom : "m",
      ouvertures: [false, false, false, true, true, true], points: [
        [-size / 2 - size / 10, sr3sur2 - sr3sur2 / 5],
        rotPt(centre1, [-size / 2 - size / 10, sr3sur2 - sr3sur2 / 5], 1 * Math.PI / 9),
        rotPt(centre1, [-size / 2 - size / 10, sr3sur2 - sr3sur2 / 5], 2 * Math.PI / 9),
  
        [0, sr3sur2 - sr3sur2 / 5],
        rotPt([0, 0], [0, sr3sur2 - sr3sur2 / 5], - 1 * Math.PI / 9),
        rotPt([0, 0], [0, sr3sur2 - sr3sur2 / 5], - 2 * Math.PI / 9),
        rotPt([0, 0], [0, sr3sur2 - sr3sur2 / 5], - 3 * Math.PI / 9),
        rotPt([0, 0], [0, sr3sur2 - sr3sur2 / 5], - 4 * Math.PI / 9),
        rotPt([0, 0], [0, sr3sur2 - sr3sur2 / 5], - 5 * Math.PI / 9),
        rotPt([0, 0], [0, sr3sur2 - sr3sur2 / 5], - 6 * Math.PI / 9),
  
        rotPt(centre4, [size / 2 + size / 10, -sr3sur2 + sr3sur2 / 5], 4 * Math.PI / 9),
        rotPt(centre4, [size / 2 + size / 10, -sr3sur2 + sr3sur2 / 5], 5 * Math.PI / 9),
        rotPt(centre4, [size / 2 + size / 10, -sr3sur2 + sr3sur2 / 5], 6 * Math.PI / 9),
  
        [-size / 2 + size / 5, -sr3sur2],
        rotPt(centre5, [-size / 2 + size / 5, -sr3sur2], 1 * Math.PI / 9),
        rotPt(centre5, [-size / 2 + size / 5, -sr3sur2], 2 * Math.PI / 9),
        rotPt(centre5, [-size / 2 + size / 5, -sr3sur2], 3 * Math.PI / 9),
        rotPt(centre5, [-size / 2 + size / 5, -sr3sur2], 4 * Math.PI / 9),
        rotPt(centre5, [-size / 2 + size / 5, -sr3sur2], 5 * Math.PI / 9),
        rotPt(centre5, [-size / 2 + size / 5, -sr3sur2], 6 * Math.PI / 9),
  
        [-size + size / 10, -sr3sur2 / 5],
        rotPt(centre6, [-size + size / 10, -sr3sur2 / 5], 1 * Math.PI / 9),
        rotPt(centre6, [-size + size / 10, -sr3sur2 / 5], 2 * Math.PI / 9),
        rotPt(centre6, [-size + size / 10, -sr3sur2 / 5], 3 * Math.PI / 9),
        rotPt(centre6, [-size + size / 10, -sr3sur2 / 5], 4 * Math.PI / 9),
        rotPt(centre6, [-size + size / 10, -sr3sur2 / 5], 5 * Math.PI / 9),
        rotPt(centre6, [-size + size / 10, -sr3sur2 / 5], 6 * Math.PI / 9)
  
      ].join(" ")
    };
  
    var tuileOYO = {
      nom : "oyo",
      ouvertures: [false, true, false, true, true, true], points: [
        [-size / 2 - size / 10, sr3sur2 - sr3sur2 / 5],
        rotPt(centre1, [-size / 2 - size / 10, sr3sur2 - sr3sur2 / 5], 1 * Math.PI / 9),
        rotPt(centre1, [-size / 2 - size / 10, sr3sur2 - sr3sur2 / 5], 2 * Math.PI / 9),
  
        rotPt(centre2, [size / 2 - size / 5, sr3sur2], 4 * Math.PI / 9),
        rotPt(centre2, [size / 2 - size / 5, sr3sur2], 5 * Math.PI / 9),
        rotPt(centre2, [size / 2 - size / 5, sr3sur2], 6 * Math.PI / 9),
  
        [size - size / 10, sr3sur2 / 5],
        rotPt(centre3, [size - size / 10, sr3sur2 / 5], 1 * Math.PI / 9),
        rotPt(centre3, [size - size / 10, sr3sur2 / 5], 2 * Math.PI / 9),
  
  
        rotPt(centre4, [size / 2 + size / 10, -sr3sur2 + sr3sur2 / 5], 4 * Math.PI / 9),
        rotPt(centre4, [size / 2 + size / 10, -sr3sur2 + sr3sur2 / 5], 5 * Math.PI / 9),
        rotPt(centre4, [size / 2 + size / 10, -sr3sur2 + sr3sur2 / 5], 6 * Math.PI / 9),
  
        [-size / 2 + size / 5, -sr3sur2],
        rotPt(centre5, [-size / 2 + size / 5, -sr3sur2], 1 * Math.PI / 9),
        rotPt(centre5, [-size / 2 + size / 5, -sr3sur2], 2 * Math.PI / 9),
        rotPt(centre5, [-size / 2 + size / 5, -sr3sur2], 3 * Math.PI / 9),
        rotPt(centre5, [-size / 2 + size / 5, -sr3sur2], 4 * Math.PI / 9),
        rotPt(centre5, [-size / 2 + size / 5, -sr3sur2], 5 * Math.PI / 9),
        rotPt(centre5, [-size / 2 + size / 5, -sr3sur2], 6 * Math.PI / 9),
  
  
        [-size + size / 10, -sr3sur2 / 5],
        rotPt(centre6, [-size + size / 10, -sr3sur2 / 5], 1 * Math.PI / 9),
        rotPt(centre6, [-size + size / 10, -sr3sur2 / 5], 2 * Math.PI / 9),
        rotPt(centre6, [-size + size / 10, -sr3sur2 / 5], 3 * Math.PI / 9),
        rotPt(centre6, [-size + size / 10, -sr3sur2 / 5], 4 * Math.PI / 9),
        rotPt(centre6, [-size + size / 10, -sr3sur2 / 5], 5 * Math.PI / 9),
        rotPt(centre6, [-size + size / 10, -sr3sur2 / 5], 6 * Math.PI / 9)
  
      ].join(" ")
    };
  
    var tuileN = {
      nom : "n",
      ouvertures: [false, true, true, false, true, true], points: [
        [-size / 2 - size / 10, sr3sur2 - sr3sur2 / 5],
        rotPt(centre1, [-size / 2 - size / 10, sr3sur2 - sr3sur2 / 5], 1 * Math.PI / 9),
        rotPt(centre1, [-size / 2 - size / 10, sr3sur2 - sr3sur2 / 5], 2 * Math.PI / 9),
        rotPt(centre2, [size / 2 - size / 5, sr3sur2], 4 * Math.PI / 9),
        rotPt(centre2, [size / 2 - size / 5, sr3sur2], 5 * Math.PI / 9),
        rotPt(centre2, [size / 2 - size / 5, sr3sur2], 6 * Math.PI / 9),
  
        [size - size / 10, sr3sur2 / 5],
        rotPt(centre3, [size - size / 10, sr3sur2 / 5], 1 * Math.PI / 9),
        rotPt(centre3, [size - size / 10, sr3sur2 / 5], 2 * Math.PI / 9),
        rotPt(centre3, [size - size / 10, sr3sur2 / 5], 3 * Math.PI / 9),
        rotPt(centre3, [size - size / 10, sr3sur2 / 5], 4 * Math.PI / 9),
        rotPt(centre3, [size - size / 10, sr3sur2 / 5], 5 * Math.PI / 9),
        rotPt(centre3, [size - size / 10, sr3sur2 / 5], 6 * Math.PI / 9),
  
        [size / 2 + size / 10, -sr3sur2 + sr3sur2 / 5],
        rotPt(centre4, [size / 2 + size / 10, -sr3sur2 + sr3sur2 / 5], 1 * Math.PI / 9),
        rotPt(centre4, [size / 2 + size / 10, -sr3sur2 + sr3sur2 / 5], 2 * Math.PI / 9),
  
        rotPt(centre5, [-size / 2 + size / 5, -sr3sur2], 4 * Math.PI / 9),
        rotPt(centre5, [-size / 2 + size / 5, -sr3sur2], 5 * Math.PI / 9),
        rotPt(centre5, [-size / 2 + size / 5, -sr3sur2], 6 * Math.PI / 9),
  
  
        [-size + size / 10, -sr3sur2 / 5],
        rotPt(centre6, [-size + size / 10, -sr3sur2 / 5], 1 * Math.PI / 9),
        rotPt(centre6, [-size + size / 10, -sr3sur2 / 5], 2 * Math.PI / 9),
        rotPt(centre6, [-size + size / 10, -sr3sur2 / 5], 3 * Math.PI / 9),
        rotPt(centre6, [-size + size / 10, -sr3sur2 / 5], 4 * Math.PI / 9),
        rotPt(centre6, [-size + size / 10, -sr3sur2 / 5], 5 * Math.PI / 9),
        rotPt(centre6, [-size + size / 10, -sr3sur2 / 5], 6 * Math.PI / 9)
  
      ].join(" ")
    };
  
    var tabsize = 10;
    var tabCells = [];
    for (var x = 0; x < tabsize; x++) {
      for (var y = 0; y < tabsize; y++) {
        tabCells.push({tuile: tuileVide, x: x, y: y, rotation: 0, valide: true});
      }
    }
  
    function setCell(x, y, rotation, tuile) {
      var cell = tabCells[toPosTab(x, y)];
      cell.rotation = rotation;
      cell.tuile = tuile;
      cell.couleur = "brown";
    }
  
    setCell(5, 5, 0, tuileCentrale);
  
    function getTuile() {
      switch(Math.floor(Math.random() * 7)) {
        case 0 :
        case 1 : return tuileN;
        case 2 :
        case 3 : return tuileM;
        case 4 :
        case 5 : return tuileOYO;
        case 6 :return tuileY;
        default :
          return tuileY;
      }
    }
  
    $scope.mode = "depot";
    $scope.nextTuile = getTuile();
    $scope.nbTuiles= 3;
    $scope.couleurCourante = "#DDAADD";
    setCell(5, 5, 0, tuileCentrale);
    setCell(6, 5, 3 , tuileOYO);
    setCell(5, 4, 5, tuileOYO);
    setCell(4, 6, 1, tuileOYO);
  
    function getCell(x, y) {
      return tabCells[toPosTab(x, y)];
    }
    function getCellVoisine(x, y, direction) {
      switch(direction){
        case 0 : return getCellVoisineIJK(x, y, 1, 0, 0);
        case 1 : return getCellVoisineIJK(x, y, 0, 1, 0);
        case 2 : return getCellVoisineIJK(x, y, 0, 0, 1);
        case 3 : return getCellVoisineIJK(x, y, -1, 0, 0);
        case 4 : return getCellVoisineIJK(x, y, 0, -1, 0);
        case 5 : return getCellVoisineIJK(x, y, 0, 0, -1);
      }
    }
  
    function getCellVoisineIJK(x, y, i, j, k) {
      return tabCells[toPosTab(x + j + k, y + i - k)];
    }
  
    function checkAllPossible(x, y, tuile, rotation) {
      return checkPossible(x, y, tuile, rotation, 0) &&
        checkPossible(x, y, tuile, rotation, 1) &&
        checkPossible(x, y, tuile, rotation, 2) &&
        checkPossible(x, y, tuile, rotation, 3) &&
        checkPossible(x, y, tuile, rotation, 4) &&
        checkPossible(x, y, tuile, rotation, 5);
    }
  
    function checkPossible(x, y, tuile, rotation, direction) {
      var cellVoisine = getCellVoisine(x, y, direction);
      if (!cellVoisine) {
        return true;
      }
      if (cellVoisine.tuile.nom === "vide") {
        return true;
      }
      return cellVoisine.tuile.ouvertures[(direction + 3 + 6 - cellVoisine.rotation) % 6] ===
        tuile.ouvertures[(direction + 6 - rotation) % 6];
    }
  
    function toPosTab(x, y) {
      return x * tabsize + y;
    }
  
    function mOver(d) {
      var m = $(this);
  
      if (d.tuile.nom === "vide") {
        return;
      }
      if (checkAllPossible(d.x, d.y, d.tuile, d.rotation)) {
        m.attr("fill",  d.couleur);
      }
      else {
        m.attr("fill", "#EEEEEE");
      }
    }
  
    function mOut(d) {
      var m = $(this);
      m.attr("fill", tuileVersCouleur(d));
    }
  
    function tentativePlaceSurCell(d) {
      if (!checkAllPossible(d.x, d.y, $scope.nextTuile, 0) &&
        !checkAllPossible(d.x, d.y, $scope.nextTuile, 1) &&
        !checkAllPossible(d.x, d.y, $scope.nextTuile, 2) &&
        !checkAllPossible(d.x, d.y, $scope.nextTuile, 3) &&
        !checkAllPossible(d.x, d.y, $scope.nextTuile, 4) &&
        !checkAllPossible(d.x, d.y, $scope.nextTuile, 5)
      ) {
        console.log("impossible");
      } else {
        console.log(d.x, d.y);
        d.tuile = $scope.nextTuile;
        d.couleur = $scope.couleurCourante;
        $scope.cellCourante = d;
        if (checkAllPossible(d.x, d.y, $scope.nextTuile, 0)) {
          console.log("rot0 possible, test 1");
          d.rotation = 0;
        } else if (checkAllPossible(d.x, d.y, $scope.nextTuile, 1)) {
          console.log("rot0 pas possible, test 2");
          d.rotation = 1;
        } else if (checkAllPossible(d.x, d.y, $scope.nextTuile, 2)) {
          console.log("rot0 pas possible, test 3");
          d.rotation = 2;
        } else if (checkAllPossible(d.x, d.y, $scope.nextTuile, 3)) {
          console.log("rot0 pas possible, test 4");
          d.rotation = 3;
        } else if (checkAllPossible(d.x, d.y, $scope.nextTuile, 4)) {
          console.log("rot0 pas possible, test 5");
          d.rotation = 4;
        } else {
          d.rotation = 5;
        }
      }
    }
  
    function mClick(d, i) {
      if (d.tuile === tuileVide) {
        if ($scope.cellCourante) {
          $scope.cellCourante.tuile = tuileVide;
        }
        tentativePlaceSurCell(d);
      } else if (d.x === $scope.cellCourante.x && d.y === $scope.cellCourante.y) {
          d.rotation = (d.rotation + 1) % 6;
        } else {
          // ya deja une tuile ici..
        }
      update(tabCells);
    }
  
    $scope.valideTuile = function() {
      $scope.mode = "depot";
      $scope.nextTuile = getTuile();
      $scope.cellCourante = null;
      $scope.nbTuiles++;
      switch ($scope.nbTuiles % 3){
        case 0 : $scope.couleurCourante = "#DDAADD"; break;
        case 1 : $scope.couleurCourante = "#AADDDD"; break;
        case 2 : $scope.couleurCourante = "#DDDDAA"; break;
      }
    };
  
    $scope.invalideTuile = function() {
      $scope.mode = "depot";
      $scope.cellCourante.tuile = tuileVide;
  
      update(tabCells);
    };
  
  
    function tuileVersCouleur(d) {
      if (d.tuile.nom === "vide") {
        return "white";
      }
      if (checkAllPossible(d.x, d.y, d.tuile, d.rotation)) {
        return d.couleur;
      }
      return "#EEEEEE";
    }
  
    function tuileVersPoints(d) {
      if (!d.tuile) {
        return [];
      }
      return d.tuile.points;
    }
  
    var svg = d3.select("#monSvg").append("svg:svg").attr("width", 600).attr("height", 600);
  
    function update(data) {
      var monHolder = svg.selectAll("polygon")
        .data(data);
  
      monHolder
        .transition()
        .attr("transform", function(d) {
          return "translate(" + (d.x * size * 1.5) + ", " + ((d.y - mapDecalageY) * sr3sur2 * 2 + sr3sur2 * d.x) + ")rotate(" + (-d.rotation * 60) + ")";
        })
        .attr("fill", tuileVersCouleur)
        .attr("points", tuileVersPoints)
        ;
  
      monHolder.enter()
        .append("polygon")
        .attr("stroke", "black")
        .attr("transform", function(d) {
          return "translate(" + (d.x * size * 1.5) + ", " + ((d.y - mapDecalageY) * sr3sur2 * 2 + sr3sur2 * d.x) + ")rotate(" + (-d.rotation * 60) + ")";
        })
        .attr("fill", tuileVersCouleur)
        .attr("points", tuileVersPoints)
        .on("mouseover", mOver)
        .on("mouseout", mOut)
        .on("click", mClick)
      ;
      monHolder.exit()
        .attr("class", "exit")
        .transition()
        .duration(750)
        .attr("y", 60)
        .style("fill-opacity", 1e-6)
        .remove();
    }
    update(tabCells);
  
 */ 
}
