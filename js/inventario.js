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
        Swal.fire({
            title: "¡Campos vacíos!",
            text: "Por favor, complete todos los campos del inventario.",
            icon: "warning"
        });
    } else {
        if (isNaN(codigo_producto)) {
            Swal.fire({
                title: "Código inválido",
                text: "El código del producto debe ser un valor numérico.",
                icon: "error"
            });
        }
        if (/\d/.test(nombre_producto)) {
            Swal.fire({
                title: "Nombre inválido",
                text: "El nombre del producto no debe contener números.",
                icon: "error"
            });
        }
        if (isNaN(cantidad)) {
            Swal.fire({
                title: "Cantidad inválida",
                text: "La cantidad del producto debe ser un número entero o decimal.",
                icon: "error"
            });
        }
        if (isNaN(precio_unitario)) {
            Swal.fire({
                title: "Precio inválido",
                text: "El precio unitario debe ser un valor numérico.",
                icon: "error"
            });
        }
    }
}