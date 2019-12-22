<?php 
    require '../vendor/autoload.php'; // include Composer's autoloader
    header('Access-Control-Allow-Origin: *');  
    header('Content-Type: application/json');
    $client = new MongoDB\Client("mongodb://localhost:27017");
    if(isset($_POST['email']) && isset($_POST['password'])){
        $collection = $client->demo->teacher;
        $result = $collection->find([
            'Teacher_Email' => $_POST['email'],
            'Teacher_Password'=> $_POST['password']
             ]);
        $listTeacher = [];
        foreach($result as $entry){
            array_push($listTeacher,$entry);
        }
        if(count($listTeacher) > 0){
            echo json_encode($listTeacher);
        }else{
            echo json_encode(array(['msg' => "Unauthorization"]));
        }
        
    }



?>