<?php
$filecontent = shell_exec('cd ..; ls -a');

echo "<pre>$filecontent</pre>";

?>
