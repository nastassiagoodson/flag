<?php
$filecontent = shell_exec('cd ..; ls -l');

echo "<pre>$filecontent</pre>";

?>
