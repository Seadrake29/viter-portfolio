<?php

require '../../../core/header.php';
require '../../../core/functions.php';


require '../../../models/developer/service/MainService.php';

$conn = null;
$conn = checkDbConnection();

$mainservice = new MainService($conn);

if (isset($_SERVER['HTTP_AUTHORIZATION'])) {

    if (array_key_exists('start', $_GET)) {
        $mainservice->start = $_GET['start'];
        $mainservice->total = 3;

        $query = checkReadLimit($mainservice);
        $total_result = checkReadAll($mainservice);
        http_response_code(200);

        checkReadQuery(
            $query,
            $total_result,
            $mainservice->total,
            $mainservice->start
        );
    }
}

checkEndPoint();
