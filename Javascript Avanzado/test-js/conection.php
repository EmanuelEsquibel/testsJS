<?php
	class Conection {
		private $datos = array(
			"host" => "localhost",
			"user" => "root",
			"pass" => "",
			"db" => "mydb"
		);
		
		private $conex;
		
		public function __construct() {
			$this -> conex = new mysqli( 
			$this -> datos['host'],
			$this -> datos['user'], 
			$this -> datos['pass'],
			$this -> datos['db']);
		}
		
		public function consultNotReturn($sql) {
			$this -> conex -> query($sql);
		}
		public function consultReturn($sql) {
			$data = $this -> conex -> query($sql);
			return $data;
		}
	}
?>