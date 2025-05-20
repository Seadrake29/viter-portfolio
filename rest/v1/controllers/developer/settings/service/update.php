<?php

//CHECK DATABASE CONNECTION

$conn = null;
$conn = checkDbConnection();


//USE MODELS
$service = new Service($conn);


$body = file_get_contents("php://input");
$data = json_decode($body, true);


if (array_key_exists('serviceid', $_GET)) {
    // check data
    checkPayload($data);
    // CHECKING DATA
    $service->service_aid = $_GET['serviceid'];
    $service->service_title = $data['service_title'];
    $service->service_description = $data['service_description'];
    $service->service_updated = date('Y-m-d H:i:s');

    $service_title_old = checkIndex($data, 'service_title_old');

    // VALIDATION
    checkId($service->service_aid);

    compareTitle($service, $service->service_title, $service_title_old);

    $query = checkUpdate($service);
    returnSuccess($service, 'service update', $query);
}

// exit if not available

checkEndPoint();
