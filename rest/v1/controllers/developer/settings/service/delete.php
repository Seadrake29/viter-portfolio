<?php


$conn = null;
$conn = checkDbConnection();

$service = new Service($conn);

$body = file_get_contents("php://input");


if (array_key_exists('serviceid', $_GET)) {
    $service->service_aid = $_GET['serviceid'];
    checkId($service->service_aid);

    $query = checkDelete($service);
    returnSuccess($service, 'service delete', $query);
}

checkEndPoint();
