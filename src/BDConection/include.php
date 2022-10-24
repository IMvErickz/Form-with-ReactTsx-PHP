<?php

include_once './bd.php';

$myBank = conection();

$CPF = filter_input(INPUT_GET, "cpf", FILTER_SANITIZE_NUMBER_INT);
$name = filter_input(INPUT_GET, "name");
$lastName = filter_input(INPUT_GET, "lastName");

$sql = "insert into person(pes_id, pes_name, pes_lastName)"
. "values('$CPF', '$name', '$lastName')";


$myBank->exec($sql);

header("location:'/src/App.tsx'");


