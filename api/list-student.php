<?php
require '../vendor/autoload.php'; // include Composer's autoloader
header('Access-Control-Allow-Origin: *');  
header('Content-Type: application/json');
$client = new MongoDB\Client("mongodb://localhost:27017");
$collection = $client->demo->students;

$result = $collection->find();
$listStudent = [];

foreach($result as $entry){
    array_push($listStudent,$entry);
}
echo json_encode($listStudent);
?>