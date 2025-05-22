<?php

require '../../../../core/header.php';
require '../../../../core/functions.php';


require '../../../../models/developer/settings/service/Service.php';

$conn = null;
$conn = checkDbConnection();

$service = new Service($conn);

if (isset($_SERVER['HTTP_AUTHORIZATION'])) {

    if (array_key_exists('start', $_GET)) {
        $service->service_start = $_GET['start'];
        $service->service_total = 3;

        $query = checkReadLimit($service);
        $total_result = checkReadAll($service);
        http_response_code(200);

        checkReadQuery(
            $query,
            $total_result,
            $service->service_total,
            $service->service_start
        );
    }
}

checkEndPoint();
