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
        console.log("los datos son incorrectos");
    } else {
        if (isNaN(ventas)) {
            console.log("los datos son incorrectos");
        }
        if (isNaN(ingresos)) {
            console.log("los datos son incorrectos");
        }
        if (isNaN(egresos)) {
            console.log("los datos son incorrectos");
        }
        if (/\d/.test(concepto)) {
            console.log("los datos son incorrectos");
        }
        if (isNaN(valor)) {
            console.log("los datos son incorrectos");
        }
    }
}

