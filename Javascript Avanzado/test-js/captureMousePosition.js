(function(){
	window.addEventListener("load", start, false);

	function start() {

		var div = document.getElementById("div1");

		function getPos(evt){
			//Posicion inicial del cursor
			initialPosOfMouseX = evt.clientX + window.scrollX;
			initialPosOfMouseY = evt.clientY + window.scrollY;
			document.addEventListener("mousemove", function(evt) { movement(evt); }, true);
			//Posicion inicial del div
			style = window.getComputedStyle( div );
			initialPosOfDivX = style.getPropertyValue('left');
			initialPosOfDivX = parseInt( initialPosOfDivX );
			//initialPosOfDivY = parseInt( div.style.top );
		}

		function movement(evt){

			var xActual, yActual;

			var xActual = evt.clientX + window.scrollX;
			//yActual = evt.clientX + window.scrollX;
			//yActual = parseInt( yActual );

			div.style.left = ( initialPosOfDivX + xActual - initialPosOfMouseX ) + "px";
			//div.style.top = ( initialPosOfDivY + yActual - initialPosOfMouseY ) + "px";

		}

		div.addEventListener("click", function(evt) { getPos( evt ); }, false);

		// function startMove(event, p) {
		// 	div.style.left = ( initialPosOfDivX + xActual - cursorComienzoX ) + "px";
		// 	div.style.top = ( initialPosOfDivY + yActual - cursorComienzoY ) + "px";
		// }
		//
		// 	document.addEventListener("mouseup", function() {
		//
		// 		inProcess = false;
		//
		// 	}, false);

	}
}());

// div.addEventListener("mouseover", function(){
// 			this.style.cursor = 'move';
// 		}, false );
