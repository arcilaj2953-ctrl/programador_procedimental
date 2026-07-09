let nombre_usuario = document.getElementById("nombre_usuario").value;
let telefono_usuario = document.getElementById("telefono_usuario").value;
let direccion_usuario = document.getElementById("direccion_usuario").value;
let producto = document.getElementById("producto").value;
let cantidad = document.getElementById("cantidad").value;
let metodo_pago = document.getElementById("metodo_pago").value;

function ValidarDatos() {
    nombre_usuario = document.getElementById("nombre_usuario").value;
    telefono_usuario = document.getElementById("telefono_usuario").value;
    direccion_usuario = document.getElementById("direccion_usuario").value;
    producto = document.getElementById("producto").value;
    cantidad = document.getElementById("cantidad").value;
    metodo_pago = document.getElementById("metodo_pago").value;

    if (nombre_usuario === "" || telefono_usuario === "" || direccion_usuario === "" || producto === "" || cantidad === "" || metodo_pago === "") {
        Swal.fire({
            title: "¡Campos vacíos!",
            text: "Por favor, completa todos los campos del pedido.",
            icon: "warning"
        });
    } else {
        if (/\d/.test(nombre_usuario)) {
            Swal.fire({
                title: "Nombre inválido",
                text: "El nombre de usuario no debe contener números.",
                icon: "error"
            });
        }
        if (isNaN(telefono_usuario)) {
            Swal.fire({
                title: "Teléfono inválido",
                text: "El número de teléfono del usuario debe ser numérico.",
                icon: "error"
            });
        }
        if (isNaN(cantidad)) {
            Swal.fire({
                title: "Cantidad inválida",
                text: "La cantidad del pedido debe ser un número.",
                icon: "error"
            });
        }
    }
}
