<?php
/**
 * Created by PhpStorm.
 * User: cleme
 * Date: 03/04/2018
 * Time: 20:10
 */

try {
    $conn = new PDO('mysql:dbname=trumppoursuit;host=localhost', 'root', '');
    $conn->exec("DET NAMES UTF8");
} catch (PDOException $exception) {
    die ($exception->getMessage());
}
