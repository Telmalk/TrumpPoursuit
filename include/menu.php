<?php
/**
 * Created by PhpStorm.
 * User: cleme
 * Date: 31/03/2018
 * Time: 02:32
 */?>

<div class="menu">
    <div class="menu-btns">
        <div class="menu-btns-saveReset">

            <?php
                form();
            ?>
            <button class="save">SAVE</button>
            <button class="reset">RESET</button>
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
