<?php
$rut = $_POST['rut'];
include('conection.php');
$consult = new Conection();
$rut = $consult -> consultReturn("SELECT rut FROM empresa WHERE rut = '{$rut}' ");
if( $rut -> num_rows > 0 ) {
	echo "Este rut ya se encuentra registrado";
}
?>