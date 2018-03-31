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
</html>