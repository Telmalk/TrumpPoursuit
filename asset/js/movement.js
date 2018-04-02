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
var HPTrump = document.querySelector(".HPTrump");
var HPMelania = document.querySelector(".HPMelania");

var trumpImg = "<img style='width:36px;height:36px;' src='./asset/img/trump.png' />";
var melaniaImg = "<img style='width:36px;height:36px;' src='./asset/img/melania.png' />";
var petiteImg = "<img style='width:36px;height:36px;' src='./asset/img/petite.png' />";

// var sexyTrump = "<video class='victoryTrumpVid' autoplay loop style='width:36px;height:36px;' src='./asset/img/sexyTrump.mp4' />";

var trumpPosX = 0;
var trumpPosY = 0;
var hpTrump = 100;
var scoreTrumpData = 0;
scoreTrump.innerHTML = scoreTrumpData;

var melaniaPosX = 23;
var melaniaPosY = 15;
var hpMela = 100;

var petitePosX = 2;
var petitePosY = 1;

var dollars = [];

var MP = 3;

var turn = 30;

HPTrump.innerHTML = hpTrump;
HPMelania.innerHTML = hpMela;

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
	if (trumpPosX === petitePosX && trumpPosY === petitePosY) {
		gameOver('trump');
		return;
	}
	if (turn === 0) {
		gameOver('melania');
		return;
	}

	MP = MP < 0 ? 0 : MP;

	if ((trumpSkill1 === 0 && turn % 2 === 0) || (melaniaSkill1 === 0 && turn % 2 === 1)) {
		MP = 3;
		turn--;
		menuDataIGPersTrump.classList.toggle('currentPlayer');
		menuDataIGPersMelania.classList.toggle('currentPlayer');
	}

	if ((MP === 0 && trumpSkill1 && turn % 2 === 0) || (MP === 0 && melaniaSkill1 && turn % 2 === 1)) {
		for (var i = 0; i < 16; i++) {
			for (var j = 0; j < 24; j++) {
				gameTable.rows[i].cells[j].innerHTML = '';
			}
		}
		HPTrump.innerHTML = hpTrump;
		HPMelania.innerHTML = hpMela;
		moveTo(trumpPosX, trumpPosY, trumpImg);
		moveTo(melaniaPosX, melaniaPosY, melaniaImg);
		moveTo(petitePosX, petitePosY, petiteImg);
		turnsLeft.innerHTML = turn;
		for (var k = 0; k < dollars.length; k++) {
			gameTable.rows[dollars[k][0]].cells[dollars[k][1]].innerHTML = '$';
			if (dollars[k][0] === trumpPosY && dollars[k][1] === trumpPosX) {
				gameTable.rows[dollars[k][0]].cells[dollars[k][1]].innerHTML = trumpImg;
				scoreTrumpData++;
				dollars.splice(k, 1);
			}
		}
		scoreTrump.innerHTML = scoreTrumpData;
		if (melaniaSkill2 > 1) {
			melaniaRange();
		}
		return;
	}

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

	HPTrump.innerHTML = hpTrump;
	HPMelania.innerHTML = hpMela;
	moveTo(trumpPosX, trumpPosY, trumpImg);
	moveTo(melaniaPosX, melaniaPosY, melaniaImg);
	moveTo(petitePosX, petitePosY, petiteImg);
	turnsLeft.innerHTML = turn;
	for (var k = 0; k < dollars.length; k++) {
		gameTable.rows[dollars[k][0]].cells[dollars[k][1]].innerHTML = '$';
		if (dollars[k][0] === trumpPosY && dollars[k][1] === trumpPosX) {
			gameTable.rows[dollars[k][0]].cells[dollars[k][1]].innerHTML = trumpImg;
			scoreTrumpData++;
			dollars.splice(k, 1);
		}
	}
	scoreTrump.innerHTML = scoreTrumpData;

	if (trumpPosX === petitePosX && trumpPosY === petitePosY) {
		gameOver('trump');
		return;
	}
	if (turn === 0) {
		gameOver('melania');
		return;
	}

	// for (var i = 0; i < dollars.length; i++) {
	// 	dollars[i]
	// }
}

window.addEventListener('keyup', (e) => {
	if (MP <= 0) {
		return;
	}
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

	if (turn % 2 === 0) {
		if (e.keyCode === 68) {
			if (posX !== 23) {
				MP--;
			}
			posX = posX === 23 ? posX : posX + 1;
		}
		if (e.keyCode === 81) {
			if (posX !== 0) {
				MP--;
			}
			posX = posX === 0 ? posX : posX - 1;
		}
		if (e.keyCode === 90) {
			if (posY !== 0) {
				MP--;
			}
			posY = posY === 0 ? posY : posY - 1;
		}
		if (e.keyCode === 83) {
			if (posX !== 15) {
				MP--;
			}
			posY = posY === 15 ? posY : posY + 1;
		}
	}
	if (turn % 2 === 1) {
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

window.addEventListener('contextmenu', function(ev) {
    ev.preventDefault();
    alert('NOPE');
    return false;
}, false);