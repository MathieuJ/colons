function HTMLActuator() {
	this.tileContainer = document.querySelector(".tile-container");
	this.hitsContainer = document.querySelector(".hits-container");
  this.scoreContainer = document.querySelector(".score-container");
  this.coupsRestantsContainer = document.querySelector(".coupsRestants-container");
  this.levelContainer = document.querySelector(".level-container");
  this.bestContainer = document.querySelector(".best-container");
	this.messageContainer = document.querySelector(".game-message");
	this.verticalMan = document.querySelector(".verticalMan");
	this.horizontalMan = document.querySelector(".horizontalMan");

	this.score = 0;
	this.coupsRestants = 3;
	this.level = 1;
	this.sizeTile = 80;
	this.marginTile = 0;
	this.keylock = 0;  
	this.delai = 200;

}

HTMLActuator.prototype.actuate = function(grid, metadata) {
	var self = this;
	window.requestAnimationFrame(function() {
		self.clearContainer(self.tileContainer);
    //console.log("_________________________________________");

		grid.cells.forEach(function(column) {
			column.forEach(function(tonneau) {
				if (tonneau) {
					//console.log("tonneau" + tonneau.x + " " + tonneau.y);
					self.addTonneau(tonneau);
				}
			});
		});
		grid.oldTiles.forEach(function(tonneau) {
			self.addTonneau(tonneau);
      //console.log("tonneau" + tonneau.x + " " + tonneau.y);
		});

		
		self.updateScore(metadata.score);
		self.updateBestScore(metadata.bestScore);
		self.updateLevel(metadata.level);
		self.updateCoupsRestants(metadata.coupsRestants);
		if (metadata.terminated) {
			if (metadata.over) {
				self.message(false); // You lose
			} else if (metadata.won) {
				self.message(true); // You win!
			}
		}

	});
};

HTMLActuator.prototype.actuateMan = function(direction) {
	var self = this;

	window.requestAnimationFrame(function() {
		var left = 0;
		var top = 0;
		var taille = self.sizeTile;
		if (direction == 0) {
			$('.horizontal-man').animate({
				"left" : "+=" + 0 + "px",
				"top" : "-=" + self.sizeTile + "px"
			}, 200, 'linear');
		}
		if (direction == 2) {
			$('.horizontal-man').animate({
				"left" : "+=" + 0 + "px",
				"top" : "+=" + self.sizeTile + "px"
			}, 200, 'linear');
		}
		if (direction == 1) {
			$('.vertical-man').animate({
				"left" : "+=" + self.sizeTile + "px",
				"top" : "+=" + "0" + "px"
			}, 200, 'linear');
		}
		if (direction == 3) {
			$('.vertical-man').animate({
				"left" : "-=" + self.sizeTile + "px",
				"top" : "+=" + "0" + "px"
			}, 200, 'linear');
		}
	});
};

// Continues the game (both restart and keep playing)
HTMLActuator.prototype.continueGame = function() {
	this.clearMessage();
};

HTMLActuator.prototype.clearContainer = function(container) {
	while (container.firstChild) {
		container.removeChild(container.firstChild);
	}
};

HTMLActuator.prototype.addTonneau = function(tonneau) {
	var self = this;

	var wrapper = document.createElement("div");
	var inner = document.createElement("img");
	var position = tonneau.previousPosition || {
		x : tonneau.x,
		y : tonneau.y
	};

	wrapper.setAttribute("class", "tile tile-" + tonneau.value);
	var posDepartLeft = tonneau.x * this.sizeTile;
	var posDepartTop = tonneau.y * this.sizeTile;
	if (tonneau.previousPosition) {
		posDepartLeft = this.marginTile + (tonneau.previousPosition.x * this.sizeTile);
		posDepartTop = this.marginTile + (tonneau.previousPosition.y * this.sizeTile);
	}

	wrapper.setAttribute("style", "left:" + posDepartLeft + "px;top:" + posDepartTop + "px;");
	switch(tonneau.value) {
	case 1 :   inner.setAttribute("src", "img/fraise.gif");break;
  case 2 :   inner.setAttribute("src", "img/orange.gif");break;
  case 3 :   inner.setAttribute("src", "img/pomme.gif");break;
  case 4 :   inner.setAttribute("src", "img/raisin.gif");break;

	}
	//inner.textContent = tonneau.value;
	
	if (tonneau.previousPosition) {
		var diffx = (tonneau.x - tonneau.previousPosition.x) * self.sizeTile;
		var diffy = (tonneau.y - tonneau.previousPosition.y) * self.sizeTile;
		var nbCases = Math.abs((tonneau.x - tonneau.previousPosition.x) + (tonneau.y - tonneau.previousPosition.y));
		// console.log(nbCases);
		self.keylock++;
		// vidage vers le bas : on déplace vertical  puis vidage horizontalement
		if (tonneau.vidage == 'y') {
			//console.log("vidate y");
			$(wrapper).animate({
				"top" : "+=" + diffy + "px"
			}, nbCases * self.delai, 'linear')
			.animate({
				"left" : "+=" + (6 - tonneau.x) * self.sizeTile + "px"
			}, (6 - tonneau.x) * self.delai, 'linear', function() {
				self.keylock--;
			}).animate({ // on descend jusqu'au coin
			  "top" : "+=" + (6 - tonneau.y) * self.sizeTile + "px"
			}, (6 - tonneau.y) * self.delai, 'linear')
			.animate({ // on revient en bas à gauche
        "left" : "+=" + (-7) * self.sizeTile + "px"
      }, (7) * self.delai, 'linear').animate({ // on revient en bas à gauche
        "width" : "0px", "height" : "0px"
      }, self.delai, 'linear');
			
		} else if (tonneau.vidage == 'x') {
			//console.log("vidate x");
			$(wrapper).animate({
				"left" : "+=" + diffx + "px",
				"top" : "+=" + diffy + "px"
			}, nbCases * self.delai, 'linear')
			.animate({
				"top" : "+=" + (6 - tonneau.y) * self.sizeTile + "px"
			}, (6 - tonneau.y) * self.delai, 'linear', function() {
				self.keylock--;
			})
			.animate({
			  "left" : "-=" + (tonneau.x + 1) * self.sizeTile + "px"
			}, (tonneau.x) * self.delai, 'linear');

		} else {
			$(wrapper).animate({
				"left" : "+=" + diffx + "px",
				"top" : "+=" + diffy + "px"
			}, nbCases * self.delai, 'linear', function() {
				self.keylock--;
			});
		}
	}

	wrapper.appendChild(inner);
	this.tileContainer.appendChild(wrapper);
};

HTMLActuator.prototype.updateScore = function(score) {
	this.clearContainer(this.scoreContainer);

	var difference = score - this.score;
	this.score = score;

	this.scoreContainer.textContent = this.score;

	if (difference > 0) {
		var addition = document.createElement("div");
		addition.classList.add("score-addition");
		addition.textContent = "+" + difference;

		this.scoreContainer.appendChild(addition);
	}
};

HTMLActuator.prototype.updateBestScore = function(bestScore) {
	this.bestContainer.textContent = bestScore;
};

HTMLActuator.prototype.updateCoupsRestants = function(coupsRestants) {
  this.coupsRestantsContainer.textContent = coupsRestants;
};

HTMLActuator.prototype.updateLevel = function(level) {
  this.levelContainer.textContent = level;
};

HTMLActuator.prototype.message = function(won) {
	var type = won ? "game-won" : "game-over";
	var message = won ? "You win!" : "Game over!";

	this.messageContainer.classList.add(type);
	this.messageContainer.getElementsByTagName("p")[0].textContent = message;
};

HTMLActuator.prototype.clearMessage = function() {
	// IE only takes one value to remove at a time.
	this.messageContainer.classList.remove("game-won");
	this.messageContainer.classList.remove("game-over");
};
