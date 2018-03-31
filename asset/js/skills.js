var myTable = document.getElementById('myTable');

var melaniaBtn1 = document.querySelector('.MelaniaCacBtn');
var melaniaBtn2 = document.querySelector('.MelaniaRangeBtn');
var trumpBtn1 = document.querySelector('.TrumpCacBtn');
var trumpBtn2 = document.querySelector('.TrumpRangeBtn');
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

function comparePos(el1, el2) {
  if (el1.posX - 1 == el2.posX && el1.posY == el2.posY) {return true; pose = 'left';}
  if (el1.posX + 1 == el2.posX && el1.posY == el2.posY) {return true; pose = 'right';}
  if (el1.posX == el2.posX && el1.posY - 1 == el2.posY) {return true; pose = 'bottom';}
  if (el1.posX == el2.posX && el1.posY + 1 == el2.posY) {return true; pose = 'top';}
}

function melaniaCac() {
  comparePos();
  if (true) {
    data.trumpHP.value -= 20;
    if (pose == 'left') {
      data.TrumpX.value--;
    } else if (pose == 'right') {
      data.TrumpX.value++;
    } else if (pose == 'top') {
      data.TrumpY.value--;
    } else {
      data.TrumpY.value++;
    }

  } else {
    melaniaBtn1.className = 'nope';
  }
}

function melaniaRange() {
  for (var i = data.melaniaX.value - 2; i < data.melaniaX.value + 2; i++) {
    myTable.rows[i].cells[data.melaniaY.value].className = "range";
  }
  for (var i = data.melaniaY.value - 2; i < data.melaniaXY.value + 2; i++) {
    myTable.rows[data.melaniaX.value].cells[i].className = "range";
  }
}

function trumpCac() {

}

function trumpRange() {

}
