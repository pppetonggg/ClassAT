<?php
// require 'vendor/autoload.php'; // include Composer's autoloader

// $client = new MongoDB\Client("mongodb://localhost:27017");
// $collection = $client->demo->beers;

// $result = $collection->insertOne( [ 'name' => 'Hinterland', 'brewery' => 'BrewDog' ] );

// echo "Inserted with Object ID '{$result->getInsertedId()}'";
?>

<?php
require '../vendor/autoload.php'; // include Composer's autoloader || include mongo db
header('Access-Control-Allow-Origin: *');  
header('Content-Type: application/json');
$client = new MongoDB\Client("mongodb://localhost:27017");
$collection = $client->demo->subject;

$result = $collection->find( );

$listSubjects = [];
// echo json_encode($result);
foreach ($result as $entry) {
    array_push($listSubjects,$entry);
}
echo json_encode($listSubjects);
?>