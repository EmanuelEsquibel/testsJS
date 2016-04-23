$(document).ready(startDocument);

function startDocument() {

	var form = $("#formulario1"),
			url = "verifyRut.php",
			method = "POST",
			rut = $("#rut"),
			onSub = false;

	$("#rutError").hide();

	function startAjax(){
		$.ajax({
			url: url,
			type: method,
			data: { rut: rut.val() },
			success: function( values ){
				if ( values ){
					//rut.addClass('rutClass');
					$("#rutError").show();
					onSub = true;
				} else {
					//rut.removeClass('rutClass');
					$("#rutError").hide();
					onSub = false;
				}
			},
			error: function( jqXHR, s, error ){
				console.log( jqXHR );
				console.log( s );
				console.log( error );
			}
		})
	}

	function impedir( evt ) {
		if ( onSub == true ){
			evt.preventDefault();
		}
	}

	$('#rut').blur( startAjax );
	form.on( 'submit', function( evt ){
	  impedir( evt );
		startAjax();
  });
}
