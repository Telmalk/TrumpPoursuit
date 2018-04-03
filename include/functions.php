<?php
/**
 * Created by PhpStorm.
 * User: cleme
 * Date: 31/03/2018
 * Time: 02:10
 */

function my_header()
{
    ?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Trump Pursuit</title>
    <link rel="stylesheet" href="./asset/css/reset.css">
    <link rel="stylesheet" href="./asset/css/style.css">
</head>
<?php
}

function menu()
{
    ?>
<div class="menu">
    <div class="menu-btns">
        <div class="menu-btns-saveReset">
            <?php
            form("save.php", "SAVE", "save");
            form("reset.php","RESET", "reset");
            ?>
        </div>
        <div class="menu-btns-scoresDiv">
            <h2 class="menu-btns-scoresDiv-title">Highscores:</h2>
        </div>
    </div>
    <div class="menu-dataIG">
        <div class="menu-dataIG-turns">
            <p>Turns left: <span class="turnsLeft"></span></p>
        </div>

        <div class="menu-dataIG-pers">
            <div class="menu-dataIG-pers-trump currentPlayer">
                <h3>TRUMP</h3>
                <p>Score: <span class="scoreTrump"></span></p>
                <p>MP: <span class="MPTrump"></span></p>
                <p>HP: <span class="HPTrump"></span></p>
                <p>Capacity: <span class="capacityTrump"></span></p>
                <button class="TrumpCacBtn">CAC</button>
                <button class="TrumpRangeBtn">RANGE</button>
            </div>

            <div class="menu-dataIG-pers-melania">
                <h3>MELANIA</h3>
                <p>Score: <span class="scoreMelania"></span></p>
                <p>MP: <span class="MPMelania"></span></p>
                <p>HP: <span class="HPMelania"></span></p>
                <p>Capacity: <span class="capacityMelania"></span></p>
                <button class="MelaniaCacBtn">CAC</button>
                <button class="MelaniaRangeBtn">RANGE</button>
            </div>
        </div>
    </div>
</div>
<?php
}

function contain()
{

?>
    <body>
<main>
    <div class="victoryTrump">
        <h2 class="victoryTrumpTitle">YOU WON !</h2>
        <video class='victoryTrumpVid' autoplay loop src='../asset/img/sexyTrump.mp4' />
    </div>
    <div class="victoryMelania">
        <h2 class="victoryMelaniaTitle">YOU WON !</h2>
        <img class='victoryMelaniaVid' autoplay loop src='../asset/img/melania.gif' />
    </div>
    <div class="gameTable">
        <table>
            <?php
            $tr = 16;
            $td = 24;
            $i = 0;
            while ($i < $tr) : ?>
<tr class="column">
    <?php
    $j = 0;
    while ($j < $td): ?>
        <td class="line"></td>
        <?php
        $j++;
    endwhile; ?>
</tr>
<?php
$i++;
endwhile;
?>
</table>
</div>
<?php
menu();
?>
</main>
</body>
<script src="../asset/js/data.js"></script>
<script src="../asset/js/movement.js"></script>
<script src="../asset/js/skills.js"></script>
</html>
<?php
}


/**
 * @param string $action
 * @param string $nameButton
 * @param string $classButton
 * return void
 */
function form(string $action, string $nameButton, string $classButton) : void
{
    ?>
    <form action="./include/<?=$action?>" method="post">
        <button class="<?=$classButton?>"><?=$nameButton?></button>
        <input hidden name="posXtrump" type="text">
        <input hidden name="posYtrump" type="text">
        <input hidden name="posXmexican" type="text">
        <input hidden name="posYmexican" type="text">
        <input hidden name="pmTrump" type="text">
        <input hidden name="pmMexican" type="text">
        <input hidden name="spell1TrumpCouldDown" type="text">
        <input hidden name="spell2TrumpCouldDown" type="text">
        <input hidden name="spell1MexicanCouldDown" type="text">
        <input hidden name="spell2MexicanCouldDown" type="text">
        <input hidden name="turnLeft" type="text">
    </form>
<?php
}