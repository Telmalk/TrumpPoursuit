<?php
/**
 * Created by PhpStorm.
 * User: chr91
 * Date: 31/03/2018
 * Time: 02:19
 */
$sql = "SELECT
    'HP',
    'POS-X',
    'POS-Y'
FROM
    'president'
WHERE
    'id' = :id 
;";