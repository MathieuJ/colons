function GameManager(size, InputManager, Actuator, StorageManager) {
  this.size = 6; // Size of the grid
  this.inputManager = new InputManager;
  this.storageManager = new StorageManager;
  this.actuator = new Actuator;

  this.startTiles = 27;
  this.xCursor = 0;
  this.yCursor = 0;
  this.inputManager.on("move", this.move.bind(this));
  this.inputManager.on("moveMan", this.moveMan.bind(this));
  this.inputManager.on("restart", this.restart.bind(this));
  this.setup();
}

//Restart the game
GameManager.prototype.restart = function() {
  this.storageManager.clearGameState();
  this.actuator.continueGame(); // Clear the game won/lost message
  this.setup();
};

GameManager.prototype.setup = function() {
  this.grid = new Grid(this.size);
  this.level = 1;
  this.score = 0;
  this.over = false;
  this.won = false;
  this.coupsRestants = 10;
  this.keepPlaying = false;
  this.nbCoups = [];
  this.nbCoup = 0;
  // Add the initial tiles
  this.addStartTiles();
  this.actuate();
}

GameManager.prototype.addStartTiles = function() {
  for ( var i = 0; i < this.startTiles; i++) {
    this.addRandomTile();
  }
};

//Adds a tile in a random position
GameManager.prototype.addRandomTile = function() {
  if (this.grid.cellsAvailable()) {
    var tile = new Tile(this.grid.randomAvailableCell(), this.getColorTile());
    this.grid.insertTile(tile);
  }
};

// sauve les "previousposition" des tiles
GameManager.prototype.prepareTiles = function() {
  this.grid.eachCell(function(x, y, tile) {
    if (tile) {
      tile.savePosition();
    }
  });
};

GameManager.prototype.move = function(direction) {
  if (this.actuator.keylock > 0) {
    console.log("trop de trucs en meme temps");
    return;
  }
  this.nbCoup++;
  this.grid.cleanOldTiles();
  // 0: up, 1: right, 2: down, 3: left
  var self = this;
  // console.log("place " + this.xCursor + " " + this.yCursor + " " +
  // this.startTiles);
  /*
   * for (var i = 0; i < 6; i++) { var aff = ""; for (var j = 0; j < 6; j++) { aff =
   * aff + j + "_" + i + "_"; if (self.grid.cells[j] && self.grid.cells[j][i]) {
   * aff = aff + self.grid.cells[j][i].x + "_" + self.grid.cells[j][i].y + " "; }
   * else { aff = aff + "___ ";} } console.log(aff); }
   */

  if (this.isGameTerminated()) {
    return; // Don't do anything if the game's over
  }
  var cell, tile, cellDerniereCaseDisponible;
  var moved = false;
  var vector = this.getVector(direction);
  this.prepareTiles();

  var listePositionCellulesATester = [];
  for (var  i = 0; i < self.size; i++) {
    if (vector.x != 0) {
      listePositionCellulesATester.push({x:i, y:self.yCursor});
    } else {
      listePositionCellulesATester.push({x:self.xCursor, y:i});
    }
  }
  if (vector.x === 1)
    listePositionCellulesATester = listePositionCellulesATester.reverse();
  if (vector.y === 1)
    listePositionCellulesATester = listePositionCellulesATester.reverse();
  var curseurDerniereCaseVide = 0;

  for (var i = 0; i < self.size; i++) {
    cell = {
        x : listePositionCellulesATester[i].x,
        y : listePositionCellulesATester[i].y
    };
    tile = self.grid.cellContent(cell);

    cellCible = {
        x : listePositionCellulesATester[curseurDerniereCaseVide].x,
        y : listePositionCellulesATester[curseurDerniereCaseVide].y
    };

    if (tile) {
//    console.log("affichage pour déplacer la tile aux coordonnees " +
//    listePositionCellulesATester[i].x + "_" +
//    listePositionCellulesATester[i].y + " qui a ses x y à " + tile.x
//    + "_" + tile.y +" vers " + cellCible.x + "," + cellCible.y);

      if (tile.x != cellCible.x || tile.y != cellCible.y) {
        moved = true;
        // console.log("moved");
        self.grid.removeTile(tile);
        tile.updatePosition(cellCible);
        self.grid.insertTile(tile);

      }
      curseurDerniereCaseVide ++;				
    } else {

    }

  }


  var listeRangeesATester = [];
  if (vector.x != 0) {
    for (var  colonne = 0; colonne < self.size; colonne++) {
      var rangee = [];
      var value = self.grid.cellValue({x:colonne, y:0});;
      var tilesIdentiques = true;
      for (var ligne = 1; ligne < self.size; ligne++) {
        if (value != self.grid.cellValue({x:colonne, y:ligne}) ) {
          tilesIdentiques = false;
        }
        value = self.grid.cellValue({x:colonne, y:ligne});
      }
      if (value != -1 && tilesIdentiques) {
        // console.log("tiles identiques " + value + " " + colonne);
        listeRangeesATester.push({dir : 'x', valeur : colonne});
      }
    }
  } else {
    for (var  ligne = 0; ligne < self.size; ligne++) {
      var rangee = [];
      var value = self.grid.cellValue({x:0, y:ligne});;
      var tilesIdentiques = true;
      for (var colonne = 1; colonne < self.size; colonne++) {
        if (value != self.grid.cellValue({x:colonne, y:ligne}) ) {
          tilesIdentiques = false;
        }
        value = self.grid.cellValue({x:colonne, y:ligne});
      }
      if (value != -1 && tilesIdentiques) {
        // console.log("tiles identiques " + value + " " + ligne);
        listeRangeesATester.push({dir : 'y', valeur : ligne});
      }
    }
  }
  var isMoving = false;
  for (var colonneASupprimer in listeRangeesATester) {
    isMoving = true;
    // console.log("Fini : del " + listeRangeesATester[colonneASupprimer]);
    if (listeRangeesATester[colonneASupprimer].dir == 'x') {
      for (var ligne = 0; ligne < 6; ligne++) {
        tile = self.grid.cellContent({x : listeRangeesATester[colonneASupprimer].valeur, y : ligne});
        console.log("cell content de " + listeRangeesATester[colonneASupprimer].valeur + ", " + ligne + " : " + tile);
        tile.vidage = 'x';
        self.grid.removeTile(tile);
      }
      for ( var i = 0; i < 6; i++) {
        this.addTile(true, listeRangeesATester[colonneASupprimer].valeur);
      }
      self.score++;
    }	
    else {
      for (var colonne = 0; colonne < 6; colonne++) {
        tile = self.grid.cellContent({x : colonne, y: listeRangeesATester[colonneASupprimer].valeur});
        console.log("cell content de " + listeRangeesATester[colonneASupprimer].valeur + ", " + colonne + " : " + tile);
        tile.vidage = 'y';
        self.grid.removeTile(tile);
      }
      for ( var i = 0; i < 6; i++) {
        this.addTile(false, listeRangeesATester[colonneASupprimer].valeur);
      }
      self.score++;
    }
  }
  if (isMoving) {
    if (self.score == 9 && self.level == 1|| self.score == 19 && self.level == 2) self.level++;
    switch(self.level) {
    case 1 : self.coupsRestants += 3; break;
    case 2 : self.coupsRestants += 4; break;
    case 3 : self.coupsRestants += 5; break;
    }

    self.nbCoups.push(self.nbCoup);
    self.nbCoup = 0;
    var total = 0;
    for (ind in self.nbCoups) {
      total += self.nbCoups[ind];
    }
    console.log("nb coups " + self.nbCoups + "| moyenne : " + (total / self.nbCoups.length));
  }
  if (moved) {
    self.coupsRestants--;
    this.actuate();
  }
  /*
   * for (var i = 0; i < 6; i++) { var aff = ""; for (var j = 0; j < 6; j++) {
   * aff = aff + j + "_" + i + "_"; if (self.grid.cells[j] &&
   * self.grid.cells[j][i]) { aff = aff + self.grid.cells[j][i].x + "_" +
   * self.grid.cells[j][i].y + " "; } else { aff = aff + "___ ";} }
   * console.log(aff); }
   */

}

GameManager.prototype.getColorTile = function() {
  var r = Math.random();
  if (this.level == 1) {
    if (r < 0.5) {
      return 1;
    }
    return 2;
  } else if (this.level == 2) {
    if (r < 0.333) return 1;
    if (r < 0.666) return 2;
    return 3;
  } else {
    if (r < 0.25) return 1;
    if (r < 0.5) return 2;
    if (r < 0.75) return 3;
    return 4;
  }

};

//colonne : vrai si sur la valeur-ème colonne, faux si sur valeur-ième ligne
GameManager.prototype.addTile = function(colonne, valeur) {
  if (colonne) {
    for (var ligne = 0; ligne < 6; ligne++) {
      var tile = new Tile({x : valeur, y : ligne}, this.getColorTile());
      tile.previousPosition = {x : valeur, y : -6 + ligne};
      this.grid.insertTile(tile);	
    }
  } else {
    for (var colonne = 0; colonne < 6; colonne++) {
      var tile = new Tile({x : colonne, y : valeur}, this.getColorTile());
      tile.previousPosition = {x : -6 + colonne, y : valeur};
      this.grid.insertTile(tile);	
    }
  }

};

GameManager.prototype.moveMan = function(direction) {

  // 0: up, 1: right, 2: down, 3: left
  var self = this;
  var vector = this.getVector(direction);
  // console.log("___" + self.xCursor + " " + vector.x + "___" +
  // self.yCursor + " "+ vector.y);
  if (self.xCursor + vector.x >= 0 && self.xCursor + vector.x < self.size && 
      self.yCursor + vector.y >= 0 && self.yCursor + vector.y < self.size) {
    self.xCursor += vector.x;
    self.yCursor += vector.y;
    this.actuator.actuateMan(direction);
  }
}

GameManager.prototype.getVector = function(direction) {
  // Vectors representing tile movement
  var map = {
      0 : {
        x : 0,
        y : -1
      }, // Up
      1 : {
        x : 1,
        y : 0
      }, // Right
      2 : {
        x : 0,
        y : 1
      }, // Down
      3 : {
        x : -1,
        y : 0
      }
      // Left
  };

  return map[direction];
};

GameManager.prototype.isGameTerminated = function() {
  if (this.over || (this.won && !this.keepPlaying)) {
    return true;
  } else {
    return false;
  }
};

//Sends the updated grid to the actuator
GameManager.prototype.actuate = function() {
  /*
   * if (this.storageManager.getBestScore() < this.score) {
   * this.storageManager.setBestScore(this.score); }
   */

  // Clear the state when the game is over (game over only, not win)
  /*
   * if (this.over) { this.storageManager.clearGameState(); } else {
   * this.storageManager.setGameState(this.serialize()); }
   */

  this.actuator.actuate(this.grid, {
    score : this.score,
    coupsRestants : this.coupsRestants,
    level : this.level,
    over : this.over,
    won : this.won,
    bestScore : this.storageManager.getBestScore(),
    terminated : this.isGameTerminated()
  });

};

//Move a tile and its representation
GameManager.prototype.moveTile = function(tile, cell) {
  this.grid.cells[tile.x][tile.y] = null;
  this.          grid.cells[cell.x][cell.y] = tile;
  tile.updatePosition(cell);
};

