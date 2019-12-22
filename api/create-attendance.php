<?php 
    require '../vendor/autoload.php'; // include Composer's autoloader
    header('Access-Control-Allow-Origin: *');  
    header('Content-Type: application/json');
    $client = new MongoDB\Client("mongodb://localhost:27017");
    $collection = $client->demo->attendance;

    if(isset($_POST['status'])&&isset($_POST['Subject_ID'])&&isset($_POST['Std_ID'])){
        $result = $collection->insertOne([
            'status' => $_POST['status'],
            'Subject_ID' => $_POST['Subject_ID'],
            'Std_ID' => $_POST['Std_ID'],
            'date_time' => date("d/m/Y")
            ]);
            echo json_encode(array(['msg' => 'created']));
    }
    

?>