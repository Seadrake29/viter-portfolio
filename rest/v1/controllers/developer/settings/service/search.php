<?php

require '../../../../core/header.php';
require '../../../../core/functions.php';
require 'functions.php';
require '../../../../models/developer/settings/service/Service.php';

$conn = null;
$conn = checkDbConnection();

$service = new Service($conn);

$body = file_get_contents('php://input');
$data = json_decode($body, true);

if (isset($_SERVER['HTTP_AUTHORIZATION'])) {

    checkPayload($data);

    $service->search = $data['searchValue'];

    if ($data['isFilter']) {
        $service->service_is_active = $data['isActive'];
        http_response_code(200);
        if ($service->search != '') {
            $query = checkFilterSearch($service);
            getQueriedData($query);
        }

        $query = checkFilter($service);
        getQueriedData($query);
    }

    $query = checkSearch($service);
    http_response_code(200);
    getQueriedData($query);
}

checkEndPoint();
