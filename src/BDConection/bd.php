<?php

function conection()
{
    $user = "root";
    $senha = "";
    $dsn = "mysql:host=localhost;dbname=Personal";
    $conn = new PDO($dsn, $user, $senha);
    $conn->setAttribute(
        PDO::ATTR_ERRMODE,
        PDO::ERRMODE_EXCEPTION
    );

    return $conn;
}
