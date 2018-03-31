var myTable = document.getElementById('myTable');

var melaniaBtn1 = document.querySelector('.MelaniaCacBtn');
var melaniaBtn2 = document.querySelector('.MelaniaRangeBtn');
var melaniaSkill1 = 1;

// var trumpImg = document.querySelector('.trumpImg');
var trumpBtn1 = document.querySelector('.TrumpCacBtn');
var trumpBtn2 = document.querySelector('.TrumpRangeBtn');
var trumpSkill1 = 1;

var HPTrump = document.querySelector(".HPTrump");
var HPMelania = document.querySelector(".HPMelania");

var pose = '';

melaniaBtn1.addEventListener('click', function() {
  melaniaCac();
});

melaniaBtn2.addEventListener('click', function() {
  melaniaRange();
});

trumpBtn1.addEventListener('click', function() {
  trumpCac();
});

trumpBtn2.addEventListener('click', function() {
  trumpRange();
});

// function comparePos(el1, el2, el3, el4) {
//   // Retourne true si les deux elements se trouvent sur une case adjacente
//   // var pose contient le côté où se trouve l'élément comparé
//   if (el1.posX - 1 == el2.posX && el3.posY == el4.posY) {
//     pose = 'left';
//     return true;
//   }
//   if (el1.posX + 1 == el2.posX && el3.posY == el4.posY) {
//     pose = 'right';
//     return true;
//   }
//   if (el1.posX == el2.posX && el3.posY - 1 == el4.posY) {
//     pose = 'bottom';
//     return true;
//   }
//   if (el1.posX == el2.posX && el3.posY + 1 == el4.posY) {
//     pose = 'top';
//     return true;
//   }
//   return false;
// }
function comparePos(el1, el2, el3, el4) {
  // Retourne true si les deux elements se trouvent sur une case adjacente
  // var pose contient le côté où se trouve l'élément comparé
  if (turn % 2 === 1) {
    if (el1 - 1 == el2 && el3 == el4) {
      pose = 'left';
      return true;
    }
    if (el1 + 1 == el2 && el3 == el4) {
      pose = 'right';
      return true;
    }
    if (el1 == el2 && el3 + 1 == el4) {
      pose = 'bottom';
      return true;
    }
    if (el1 == el2 && el3 - 1 == el4) {
      pose = 'top';
      return true;
    }
  }
  return false;
}

// function melaniaCac() {
//   comparePos(posXMela, posXTrump, posYMela, posYTrump);
//   if (true) {
//     datas.hpTrump -= 20;
//     if (pose == 'left') {
//       datas.posXtrump--;
//     } else if (pose == 'right') {
//       datas.posXTrump++;
//     } else if (pose == 'top') {
//       datas.posYMela--;
//     } else {
//       datas.posYMela++;
//     }

//   } else {
//     // Faire l'anim d'action impossible
//     melaniaBtn1.className = 'nope';
//   }
// }

function melaniaCac() {
  if (comparePos(melaniaPosX, trumpPosX, melaniaPosY, trumpPosY)) {
    datas.hpTrump -= 20;
    hpTrump -= 20;
    // HPTrump.innerHTML = hpTrump;
    if (pose == 'left') {
      trumpPosX--;
    } else if (pose == 'right') {
      trumpPosX++;
    } else if (pose == 'top') {
      trumpPosY--;
    } else {
      trumpPosY++;
    }

    melaniaSkill1 = 0;

    render();

    melaniaSkill1 = 1;

  } else {
    melaniaSkill1 = 0;

    render();

    melaniaSkill1 = 1;
    // Faire l'anim d'action impossible
    // melaniaBtn1.className = 'nope';
  }
}

function melaniaRange() {
  for (var i = datas.melaniaX.value - 2; i < datas.melaniaX.value + 2; i++) {
    myTable.rows[i].cells[datas.melaniaY.value].className = "range";
  }
  for (var i = datas.melaniaY.value - 2; i < datas.melaniaXY.value + 2; i++) {
    myTable.rows[datas.melaniaX.value].cells[i].className = "range";
  }
}

function trumpHealth() {

}

function trumpCac() {
  if (turn % 2 === 0) {
    dollars.push([Math.floor(Math.random() * 16),Math.floor(Math.random() * 24)]);
    MP = 0;
  }

  trumpSkill1 = 0;

  render();
  trumpSkill1 = 1;
}

window.addEventListener('keyup', (e) => {
  if (e.keyCode === 65) {
    trumpCac();
  }
  if (e.keyCode === 76) {
    melaniaCac();
  }
})
