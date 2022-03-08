<?php
$filecontent = shell_exec('ls -R /home');

echo "<pre>$filecontent</pre>";

?>
