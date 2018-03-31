<?php
/**
 * Created by PhpStorm.
 * User: chr91
 * Date: 31/03/2018
 * Time: 02:19
 */
$sql = "INSERT INTO users (HP, POS-X, POS-Y)
        VALUES (?,?,?)";
$stmt = mysqli_prepare($sql);
$stmt->bind_param($_POST['HP'], $_POST['POS-X'], $_POST['POS-Y']);
$stmt->execute();