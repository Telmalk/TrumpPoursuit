<?php
/**
 * Created by PhpStorm.
 * User: cleme
 * Date: 31/03/2018
 * Time: 02:09
 */
require_once "./include/header.php"
?>

<body>
	<main>
        <div class="victoryTrump">
            <h2 class="victoryTrumpTitle">YOU WON !</h2>
            <video class='victoryTrumpVid' autoplay loop src='./asset/img/sexyTrump.mp4' />
        </div>
        <div class="victoryMelania">
            <h2 class="victoryMelaniaTitle">YOU WON !</h2>
            <img class='victoryMelaniaVid' autoplay loop src='./asset/img/melania.gif' />
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
        require_once "./include/menu.php";
        ?>
	</main>
</body>
<script src="./asset/js/data.js"></script>
<script src="./asset/js/movement.js"></script>
<script src="./asset/js/skills.js"></script>
</html>