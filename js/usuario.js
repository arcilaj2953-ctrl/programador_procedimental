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
        console.log("los datos son incorrectos");
    } else {
        if (/\d/.test(nombre)) {
            console.log("los datos son incorrectos");
        }
        if (/\d/.test(apellido)) {
            console.log("los datos son incorrectos");
        }
        if (isNaN(numero_documento)) {
            console.log("los datos son incorrectos");
        }
        if (isNaN(telefono) || telefono.length > 10) {
            console.log("los datos son incorrectos");
        }
        if (!correo.includes('@')) {
            console.log("los datos son incorrectos");
        }
    }
}