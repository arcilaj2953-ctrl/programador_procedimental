let ventas = document.getElementById("ventas").value;
let fecha = document.getElementById("fecha").value;
let ingresos = document.getElementById("ingresos").value;
let egresos = document.getElementById("egresos").value;
let concepto = document.getElementById("concepto").value;
let valor = document.getElementById("valor").value;
let usuario = JSON.parse(localStorage.getItem("usuario"));

function ValidarDatos() {
    ventas = document.getElementById("ventas").value;
    fecha = document.getElementById("fecha").value;
    ingresos = document.getElementById("ingresos").value;
    egresos = document.getElementById("egresos").value;
    concepto = document.getElementById("concepto").value;
    valor = document.getElementById("valor").value;

    if (ventas === "" || fecha === "" || ingresos === "" || egresos === "" || concepto === "" || valor === "") {
        Swal.fire({
            title: "¡Campos vacíos!",
            text: "Por favor, completa todos los campos del registro contable.",
            icon: "warning"
        });
    } else {
        if (isNaN(ventas)) {
            Swal.fire({
                title: "Ventas inválidas",
                text: "El valor de ventas debe ser un número.",
                icon: "error"
            });
        }
        if (isNaN(ingresos)) {
            Swal.fire({
                title: "Ingresos inválidos",
                text: "El valor de ingresos debe ser un número.",
                icon: "error"
            });
        }
        if (isNaN(egresos)) {
            Swal.fire({
                title: "Egresos inválidos",
                text: "El valor de egresos debe ser un número.",
                icon: "error"
            });
        }
        if (/\d/.test(concepto)) {
            Swal.fire({
                title: "Concepto inválido",
                text: "El concepto no debe contener números.",
                icon: "error"
            });
        }
        if (isNaN(valor)) {
            Swal.fire({
                title: "Valor inválido",
                text: "El valor ingresado debe ser numérico.",
                icon: "error"
            });
        }
    }
}

