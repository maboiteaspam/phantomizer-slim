<?php

$slim_path      = __DIR__."/../vendors/Slim/Slim.php";
$routes_path    = __DIR__."/../routes.php";

require($slim_path);

\Slim\Slim::registerAutoloader();

$app = new \Slim\Slim();
if( file_exists(__DIR__."/../routes.php")){
    include($routes_path);
}
$app->run();
