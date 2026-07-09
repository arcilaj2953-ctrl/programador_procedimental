let nombre = document.getElementById("nombre").value;
let apellido = document.getElementById("apellido").value;
let tipo_documento = document.getElementById("tipo_documento").value;
let numero_documento = document.getElementById("numero_documento").value;
let telefono = document.getElementById("telefono").value;
let correo = document.getElementById("correo").value;
let genero = document.getElementById("genero").value;
let cargo = document.getElementById("cargo").value;
let fecha_nacimiento = document.getElementById("fecha_nacimiento").value;
let contraseña = document.getElementById("contraseña").value;

function ValidarDatos() {
    nombre = document.getElementById("nombre").value;
    apellido = document.getElementById("apellido").value;
    numero_documento = document.getElementById("numero_documento").value;
    telefono = document.getElementById("telefono").value;
    correo = document.getElementById("correo").value;

    if (nombre === "" || apellido === "" || numero_documento === "" || telefono === "" || correo === "") {
        Swal.fire({
            title: "¡Campos vacíos!",
            text: "Por favor, completa los campos requeridos para el usuario.",
            icon: "warning"
        });
    } else {
        if (/\d/.test(nombre)) {
            Swal.fire({
                title: "Nombre inválido",
                text: "El nombre del usuario no debe contener números.",
                icon: "error"
            });
        }
        if (/\d/.test(apellido)) {
            Swal.fire({
                title: "Apellido inválido",
                text: "El apellido del usuario no debe contener números.",
                icon: "error"
            });
        }
        if (isNaN(numero_documento)) {
            Swal.fire({
                title: "Documento inválido",
                text: "El número de documento debe ser numérico.",
                icon: "error"
            });
        }
        if (isNaN(telefono) || telefono.length > 10) {
            Swal.fire({
                title: "Teléfono inválido",
                text: "El teléfono debe ser numérico y no superar los 10 dígitos.",
                icon: "error"
            });
        }
        if (!correo.includes('@')) {
            Swal.fire({
                title: "Correo inválido",
                text: "Por favor, ingresa una dirección de correo electrónico válida (debe incluir '@').",
                icon: "error"
            });
        }
    }
}