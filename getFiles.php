<?php

header('Content-Type: application/json; charset=utf-8');
$directory = "Lyrics";
$files = glob($directory.'/*.{lrc}', GLOB_BRACE);

echo json_encode(array("files"=>$files, "directory" => $directory));
?>