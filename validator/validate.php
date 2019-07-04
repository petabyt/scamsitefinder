<?php
$file = $_GET['site'];
$file_headers = @get_headers($file);
$ip = $file['SERVER_ADDR'];
$html = file_get_contents($file);
$encodedhtml = base64_encode($html);
if ($file_headers) {
 	echo "siteExists(true, '" . @get_headers($file, 0)[0] . "', '" . $encodedhtml . "');";

} else {
    echo "siteExists(false, '" . @get_headers($file, 0)[0] . "');";
}
?>
