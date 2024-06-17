//Consumiendo el Api para acceder a los datos de la BD 

let url="http://localhost:8080/storeapi/v1/producto"

let peticion={
    method:"GET",
    headers:{}
}

fetch(url,peticion)
.then(function(respuesta){
    return respuesta.json()
})
.then(function(respuesta){
    console.log(respuesta)
    //recorriendo la respuesta para hacer render
    let fila=document.getElementById("fila")
    respuesta.forEach(function(producto){
        let columna=document.createElement("div")
        columna.classList.add("col")
        let tarjeta=document.createElement("div")
        tarjeta.classList.add("card","shadow","h-100")
        let imagen=document.createElement("img")
        imagen.classList.add("img-fluid")
        imagen.src=producto.foto

        let nombreProducto=document.createElement("h3")
        nombreProducto.classList.add("text-center")
        nombreProducto.textContent=producto.nombre

        let precioProducto=document.createElement("h4")
        precioProducto.classList.add("text-center")
        precioProducto.textContent=producto.precio

        tarjeta.appendChild(imagen)
        tarjeta.appendChild(nombreProducto)
        tarjeta.appendChild(precioProducto)
        columna.appendChild(tarjeta)
        fila.appendChild(columna)

    })
})
.catch(function(respuesta){
    console.log(respuesta)
})
