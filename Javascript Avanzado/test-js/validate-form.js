(function () {

  window.addEventListener('load', start, false);

  function start () {
    var nombre = document.getElementById('nombre'),
    rut = document.getElementById('rut'),
    direccion = document.getElementById('direccion'),
    ciudad = document.getElementById('ciudad'),
    codigoPostal = document.getElementById('codigoPostal'),
    nombreDueno = document.getElementById('nombreDueno'),
    ci = document.getElementById('ci'),
    dia = document.getElementById('dia'),
    mes = document.getElementById('mes'),
    anno = document.getElementById('anno'),
    form = document.getElementById('formulario1'),
    submit = document.getElementById('submit');

    function putRequired(){
      for(var x = 0;  x < form.elements.length; x++ ){
        form.elements[x].setAttribute('required', 'true');
      }
    }

    function putOffAutoComplete(){
      for(var x = 0;  x < form.elements.length; x++ ){
        form.elements[x].setAttribute('autocomplete', 'off');
      }
    }

    function values(evt) {
      for(var x = 0;  x < form.elements.length; x++ ){
        if(!form.elements[x].value){
          evt.preventDefault();
          return false;
        }
      }
    }

    function searchNumber(texto, evt, div) {
	  var pattern = /^[a-zA-Z ]+$/;
		if( pattern.test(texto.value) ) {
			div.style.backgroundColor = 'green';
		} else {
			div.style.backgroundColor = 'red';
		  if(evt != undefined){
			evt.preventDefault();
		  }
		}
	  }

    function searchSting(texto, evt, div) {
		var pattern = /^[0-9]+$/;
		  if( pattern.test(texto.value) ) {
			if(evt == undefined){
			  div.style.backgroundColor = 'green';
			}
		  } else {
			  div.style.backgroundColor = 'red';
			if(evt != undefined){
			  evt.preventDefault();
			}
		  }
		}

	function verifyAddress(texto, evt, div) {
	  var pattern = /^[a-zA-Z0-9 ]+$/;
		if( pattern.test(texto.value) ) {
			div.style.backgroundColor = 'green';
		} else {
			div.style.backgroundColor = 'red';
		  if(evt != undefined){
			evt.preventDefault();
		  }
		}
	  }

	function verifyRut(texto, evt, div) {
		// Flag green.
		var green = function () { div.style.backgroundColor = 'green'; }
		// Flag Red.
		var red = function() { div.style.backgroundColor = 'red'; }

		if(texto.value != "" && !isNaN(texto.value) ){
			//Validar digito verificador.
			var patternRut = new Array();
			var textArray = new Array();
			var textArrayM = new Array();
			var productArray = new Array();

			//Digitos para comprobar codigo verificador del rut.
			patternRut.push(4,3,2,9,8,7,6,5,4,3,2);
			// textArrayM contiene el array completo incluido el digito verificador.
			for(var s = 0; s < 12; s++) {
				textArrayM.push( texto.value.charAt( s ) );
			}
			//Retornar array con cada digito del input
			//Crear array con los valores introducidos en el input.
			for(var s = 0; s < 11; s++) {
				textArray.push( texto.value.charAt( s ) );
			}
			//Multiplicar cada elemento con elementos de patternRut.
			for( var z in textArray ) {
				productArray[z] = textArray[z] * patternRut[z];
			}
			//Sumo los elementos del producto.
			var product = 0;
			for( var d in productArray ){
				product += productArray[d];
			}
			// Producto sobre 11.
			var total = product % 11;
			if( total == 0 ) {
				if( textArrayM.pop() == 0 ){
					green();
				}else{
					red();
					if(evt != undefined){
						evt.preventDefault();
					}
				}
			} else {
				var endP = 11 - total;
				if( endP == textArrayM.pop() ){
					green();
				} else {
					red();
					if(evt != undefined){
						evt.preventDefault();
					}
				}
			}
		} else {
			red();
			if(evt != undefined){
				evt.preventDefault();
			}
		}
	}

	 function verifyCP(texto, evt, div) {
		if( isNaN(texto.value) || texto.value.length < 5){
			div.style.backgroundColor = 'red';
			if(evt != undefined){
				evt.preventDefault();
			}
		} else {
			div.style.backgroundColor = 'green';
		}
	}

	function verifyCI(texto, evt, div) {
		if( isNaN(texto.value) || texto.value.length < 8){
			div.style.backgroundColor = 'red';
			if(evt != undefined){
				evt.preventDefault();
			}
		} else {
			div.style.backgroundColor = 'green';
		}
	}

	function addDays() {

		for( var i = 1; i <= 31 ; i++ ) {
			var optionsDay = document.createElement( "option" );
			optionsDay.setAttribute( "value" , i );
			textNodeDay = document.createTextNode( i );
			optionsDay.appendChild( textNodeDay );
			dia.appendChild( optionsDay );
		}

	}

	function addYears() {
		var dateD = new Date();
		var Year = dateD.getFullYear();
		var minYear = Year - 110;
		var yearArray = new Array();
		var arrayPos = 0;
		var textNode = new Array();

		for( var i = Year; i >= minYear ; i-- ) {
			yearArray[arrayPos] = i;
			arrayPos += 1;
		}

		var options = undefined;
		var textNode = undefined;

		for( var a = Year ; a > minYear ; a-- ) {
			textNode = document.createTextNode ( a );
			options = document.createElement( "option" );
			options.appendChild( textNode );
			options.setAttribute( "value" , a );
			anno.appendChild ( options );
		}
	}

	function validateDateD(texto, evt, div) {
		if(  !texto.value || isNaN( texto.value ) ){
			div.style.backgroundColor = 'red';
			if(evt != undefined){
				div.style.backgroundColor = 'red';
				evt.preventDefault();
			}
		} else {
			div.style.backgroundColor = 'green';
		}
	}

	function validateDateM(texto, evt, div) {

		if(  !texto.value || isNaN( texto.value ) ){
			div.style.backgroundColor = 'red';
			if(evt != undefined){
				div.style.backgroundColor = 'red';
				evt.preventDefault();
			}
		} else {
			div.style.backgroundColor = 'green';
		}
	}
	function validateDateY(texto, evt, div) {
		 var date = new Date();
		 var year = date.getFullYear();
		 if( !texto.value || isNaN( texto.value ) ){
			div.style.backgroundColor = 'red';
			if( evt != undefined ){
				div.style.backgroundColor = 'red';
				evt.preventDefault();
			}
		 } else {
			div.style.backgroundColor = 'green';
		 }
	}

	function verifyDate(evt){

		function daysInMonth(humanMonth, year) {
			return new Date(year || new Date().getFullYear(), humanMonth, 0).getDate();
		}
		var valueMonth = parseInt( mes.value );
		var valueYear = parseInt( mes.value );
		var daysOfMonth = daysInMonth( valueMonth, valueYear );

		if( ( ( anno.value % 4 ) == 0 ) && ( ( anno.value % 100 != 0 ) || ( anno.value % 400 == 0 ) ) ){
			if( mes.value == 2 ){
				daysOfMonth = 29;
			}
		}

		if( dia.value <= daysOfMonth ) {
			divDia.style.backgroundColor = 'green';
			divMes.style.backgroundColor = 'green';
			divAnno.style.backgroundColor = 'green';
		} else {
			if( evt != undefined ){
				divDia.style.backgroundColor = 'red';
				divMes.style.backgroundColor = 'red';
				divAnno.style.backgroundColor = 'red';
				evt.preventDefault();
			}
		}
	}

  putOffAutoComplete();
  //putRequired();
  addYears();
  addDays();

	form.addEventListener('submit', function(evt){
		values(evt);
		searchSting(anno, evt, divAnno);
		searchSting(mes, evt, divMes);
		searchSting(dia, evt, divDia);
		searchSting(ci, evt, divCI);
		searchNumber(nombreDueno, evt, divNombreD);
		verifyCP(codigoPostal, evt, divCP);
		searchNumber(ciudad, evt, divCiudad);
		verifyAddress(direccion, evt, divDireccion);
		verifyRut(rut, evt, divRut);
		searchNumber(nombre, evt, divName);
    verifyCI(ci, evt, divCI);
		verifyDate(evt);
  } ,false);

	  nombre.addEventListener('blur', function(){ searchNumber(nombre, undefined, divName) } , false);
	  rut.addEventListener('blur', function(){ verifyRut(rut, undefined, divRut) } , false);
	  direccion.addEventListener('blur', function(){ verifyAddress(direccion, undefined, divDireccion) } , false);
	  ciudad.addEventListener('blur', function(){ searchNumber(ciudad, undefined, divCiudad) } , false);
	  codigoPostal.addEventListener('blur', function(){ verifyCP(codigoPostal, undefined, divCP) } , false);
	  nombreDueno.addEventListener('blur', function(){ searchNumber(nombreDueno, undefined, divNombreD) } , false);
	  ci.addEventListener('blur', function(){ verifyCI(ci, undefined, divCI) } , false);
	  dia.addEventListener('blur', function(){ validateDateD(dia, undefined, divDia) } , false);
	  mes.addEventListener('blur', function(){ validateDateM(mes, undefined, divMes) } , false);
	  anno.addEventListener('blur', function(){ validateDateY(anno, undefined, divAnno) } , false);

  }
}());
