let codigo_producto = document.getElementById("codigo_producto").value;
let nombre_producto = document.getElementById("nombre_producto").value;
let cantidad = document.getElementById("cantidad").value;
let precio_unitario = document.getElementById("precio_unitario").value;  

function ValidarDatos() {
    codigo_producto = document.getElementById("codigo_producto").value;
    nombre_producto = document.getElementById("nombre_producto").value;
    cantidad = document.getElementById("cantidad").value;
    precio_unitario = document.getElementById("precio_unitario").value;

    if (codigo_producto === "" || nombre_producto === "" || cantidad === "" || precio_unitario === "") {
        console.log("los datos son incorrectos");
    } else {
        if (isNaN(codigo_producto)) {
            console.log("los datos son incorrectos");
        }
        if (/\d/.test(nombre_producto)) {
            console.log("los datos son incorrectos");
        }
        if (isNaN(cantidad)) {
            console.log("los datos son incorrectos");
        }
        if (isNaN(precio_unitario)) {
            console.log("los datos son incorrectos");
        }
    }
}