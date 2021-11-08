<?php

include("class_resize.php");

$resizer = new ImageResize();

$resizer->resize("sloth.jpg", "output_file.jpg");

?>