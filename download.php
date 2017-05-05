<?php
$file = $_GET['file'];
//zecht tegen php dat het een img is
header('Content-type: image/png');
//zecht tegen php dat het een attachment is
header("Content-disposition: attachment; filename=canvasoutput.png");
//stuurt file
readfile($file);

?>