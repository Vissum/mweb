function comprobarClave(){
			clave1 = document.f1.clave1.value
			clave2 = document.f1.clave2.value

			if (clave1 =="admin" && clave2 == "conejo"){
				alert("Los Datos Coinciden..\n Bienvenido");
				var href = "html/principal.html";
				window.location=href;
                }
		else {

			alert("Las dos claves son distintas...\n Intentelo Nuevamente");
			var href="index.html";
			window.location=href;
		     };

		}