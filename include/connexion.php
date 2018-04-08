<?php
/**
 * Created by PhpStorm.
 * User: cleme
 * Date: 03/04/2018
 * Time: 20:10
 */

try {
    $conne = new PDO('mysql:dbname=trumppoursuit;host=localhost', 'root', 'wFo(pZt<');
    $conne->exec("DET NAMES UTF8");
} catch (PDOException $exception) {
    die ($exception->getMessage());
}
