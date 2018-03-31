var gameTable = document.querySelector(".gameTable table");
var turnsLeft = document.querySelector(".turnsLeft");
var scoreTrump = document.querySelector(".scoreTrump");
var MPTrump = document.querySelector(".MPTrump");
var capacityTrump = document.querySelector(".capacityTrump");
var scoreMelania = document.querySelector(".scoreMelania");
var MPMelania = document.querySelector(".MPMelania");
var capacityMelania = document.querySelector(".capacityMelania");
var victoryTrump = document.querySelector(".victoryTrump");
var victoryMelania = document.querySelector(".victoryMelania");
var menuDataIGPersTrump = document.querySelector(".menu-dataIG-pers-trump");
var menuDataIGPersMelania = document.querySelector(".menu-dataIG-pers-melania");

var trumpImg = "<img style='width:36px;height:36px;' src='./asset/img/trump.png' />";
var melaniaImg = "<img style='width:36px;height:36px;' src='./asset/img/melania.png' />";
var petiteImg = "<img style='width:36px;height:36px;' src='./asset/img/petite.png' />";

// var sexyTrump = "<video class='victoryTrumpVid' autoplay loop style='width:36px;height:36px;' src='./asset/img/sexyTrump.mp4' />";

var trumpPosX = 0;
var trumpPosY = 0;

var melaniaPosX = 23;
var melaniaPosY = 15;

var petitePosX = 2;
var petitePosY = 1;

var MP = 3;

var turn = 30;

var gameOver = (pers) => {
	if (pers === 'trump') {
		victoryTrump.style.display = "flex";
		return;
	}
	if (pers === 'melania') {
		victoryMelania.style.display = "flex";
		return;
	}
}

var moveTo = (posX, posY, pers) => {
	gameTable.rows[posY].cells[posX].innerHTML = pers;
};

var render = () => {
	for (var i = 0; i < 16; i++) {
		for (var j = 0; j < 24; j++) {
			gameTable.rows[i].cells[j].innerHTML = '';			
		}
	}
	
	if (MP === 0) {
		MP = 3;
		turn--;
		menuDataIGPersTrump.classList.toggle('currentPlayer');
		menuDataIGPersMelania.classList.toggle('currentPlayer');
	}

	moveTo(trumpPosX, trumpPosY, trumpImg);
	moveTo(melaniaPosX, melaniaPosY, melaniaImg);
	moveTo(petitePosX, petitePosY, petiteImg);
	turnsLeft.innerHTML = turn;

	if (trumpPosX === petitePosX && trumpPosY === petitePosY) {
		gameOver('trump');
		return;
	}
	if (turn === 0) {
		gameOver('melania');
		return;
	}
}


window.addEventListener('keyup', (e) => {
	let posX;
	let posY;

	// if (MP === 0) {
	// 	MP = 3;
	// 	turn--;
	// 	menuDataIGPersTrump.classList.toggle('currentPlayer');
	// 	menuDataIGPersMelania.classList.toggle('currentPlayer');
	// 	return;
	// }

	if (turn % 2 === 0) {
		posX = trumpPosX;
		posY = trumpPosY;
	} else {
		posX = melaniaPosX;
		posY = melaniaPosY;
	}

	if (e.keyCode === 39) {
		if (posX !== 23) {
			MP--;
		}
		posX = posX === 23 ? posX : posX + 1;
	}
	if (e.keyCode === 37) {
		if (posX !== 0) {
			MP--;
		}
		posX = posX === 0 ? posX : posX - 1;
	}
	if (e.keyCode === 38) {
		if (posY !== 0) {
			MP--;
		}
		posY = posY === 0 ? posY : posY - 1;
	}
	if (e.keyCode === 40) {
		if (posX !== 15) {
			MP--;
		}
		posY = posY === 15 ? posY : posY + 1;
	}

	if (turn % 2 === 0) {
		trumpPosX = posX;
		trumpPosY = posY;
	} else {
		melaniaPosX = posX;
		melaniaPosY = posY;
	}

	render();
})