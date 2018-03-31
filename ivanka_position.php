<?php
/**
 * Created by PhpStorm.
 * User: chr91
 * Date: 31/03/2018
 * Time: 02:30
 */
$sql = "INSERT INTO 
          users 
          (POS-X, POS-Y)
        VALUES
         (:posx, :posy)
         ;";

$stmt = $con->prepare($sql); //mysqli_prepare($sql);
$stmt->bind_value(':posx', $_POST['POS-X']);
$stmt->bind_value(':posy', $_POST['POS-Y']);
$stmt->execute();