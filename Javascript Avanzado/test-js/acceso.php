<?php
    
	$rut = $_POST['rut'];
	$razonSocial = $_POST['razonSocial'];
	$direccion = $_POST['direccion'];
	$codigoPostal = $_POST['codigoPostal'];
	$nombreDuenno = $_POST['nombreDuenno'];
	$ciDuenno = $_POST['ciDuenno'];
	$fechaNacimientoDuenno = $_POST['fechaNacimiento'];
	
	include('conection.php');
	
	$consult = new Conection();
	$consult -> consultNotReturn("INSERT INTO empresa(`rut`, `razonSocial`, `direccion`, `codigoPostal`, `nombreDuenno`, `ciDuenno`, `fechaNacimientoDuenno`) VALUES( null, '{$rut}', '{$razonSocial}', '{$direccion}', 
	'{$codigoPostal}', '{$nombreDuenno}', '{$ciDuenno}', '{$fechaNacimientoDuenno}' ) ");
	
	header("Location: login.php?true=1");
	echo "Te has registrado exitosamente. Ya puedes inciar tu sesión";
	
?>