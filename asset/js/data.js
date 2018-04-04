var generateDatas = function() {
    var posXTrump = document.querySelector(".posXTrump");
    var posYTrul = document.querySelector(".posYtrump");
    var hpTrump = document.querySelector(".hpTrump");
    var hpMexican = document.querySelector(".hpMela");
    var posXMela = document.querySelector(".posXMela");
    var posYMela = document.querySelector(".posYMela");
    var hpMela = document.querySelector(".hpMeka");
    var pmTrump = document.querySelector('.pmTrump');
    var pmMexican = document.querySelector(".pmMexican");
    var spell1Trump = document.querySelector('.spell1TrumpCouldDown');
    var spell2Trump = document.querySelector('.spell2TrumpCouldDown');
    var spell1Mexican = document.querySelector('.spell1MexicanCouldDown');
    var spell2Mexican = document.querySelector(".spell2MexicanCouldDown");
    var turnLeft = document.querySelector('.turnLeft');
    var finalPosX = document.querySelector(".finalPosX");
    var finalPosY = document.querySelector(".finalPosY");

    // var datas = {
    //     "posXTrump": posXTrump.value,
    //     "posYTrump": posYTrump.value,
    //     "hpTrump": hpTrump.value,
    //     "posXMela": posXMela.value,
    //     "posYMela": posYMela.value,
    //     "hpMela": hpMela.value,
    //     "finalPosX": finalPosX.value,
    //     "finalPosY": finalPosY.value,
    //     "turn": 30,
    //     "MP": 3
    // }
    var datas = {
        "posXTrump": 0,
        "posYTrump": 0,
        "hpTrump": 100,
        "posXMela": 23,
        "posYMela": 15,
        "hpMela": 100,
        "finalPosX": 10,
        "finalPosY": 10,
        "turn": 30,
        "MP": 3
    }
    return datas;
}

datas = generateDatas();
