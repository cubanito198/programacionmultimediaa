window.onload = function(){
	fetch("http://localhost/segundo/supercontrolador/endpointpublico/")
	.then(function(result){
		return result.json()
	})
	.then(function(datos){
	console.log(datos)
	let contenedor = document.querySelector("body")
	let plantilla = document.querySelector("#plantillacoche")
		datos.forEach(function(dato){
			let instancia = plantilla.content.cloneNode(true)
			instancia.querySelector("h3").textContent = dato.nombre
			instancia.querySelector(".descripcion").textContent = dato.descripcion
			instancia.querySelector(".precio").textContent = dato.precio
			contenedor.appendChild(instancia)
		})
	})
}	
