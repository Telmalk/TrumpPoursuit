var gameTable = document.querySelector(".gameTable table");

var trumpImg = "<img style='width:36px;height:36px;' src='./asset/img/trump.png' />";
var melaniaImg = "<img style='width:36px;height:36px;' src='./asset/img/melania.png' />";

var moveTo = (posX, posY, pers) => {
	gameTable.rows[posY].cells[posX].innerHTML = pers;
};

var trumpPosX = 0;
var trumpPosY = 0;

var melaniaPosX = 23;
var melaniaPosY = 15;

var MP = 3;

var turn = 30;

var render = () => {
	for (var i = 0; i < 16; i++) {
		for (var j = 0; j < 24; j++) {
			gameTable.rows[i].cells[j].innerHTML = '';			
		}
	}

	moveTo(trumpPosX, trumpPosY, trumpImg);
	moveTo(melaniaPosX, melaniaPosY, melaniaImg);
}


window.addEventListener('keyup', (e) => {
	let posX;
	let posY;

	if (MP === 0) {
		MP = 3;
		turn--;
		return;
	}

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