function ValidarDatos() {

    let ventas = document.getElementById("ventas").value;
    let fecha = document.getElementById("fecha").value;
    let ingresos = document.getElementById("ingresos").value;
    let egresos = document.getElementById("egresos").value;
    let concepto = document.getElementById("concepto").value;
    let valor = document.getElementById("valor").value;

    if (ventas === "" || fecha === "" || ingresos === "" || egresos === "" || concepto === "" || valor === "") {
        Swal.fire({
            icon: "error",
            title: "Algo salió mal",
            text: "Por favor complete todos los datos.",
        });
        return;
    }

    if (!/^[0-9]+$/.test(ventas)) {
        Swal.fire({
            icon: "error",
            title: "Algo salió mal",
            text: "El número de ventas debe contener solo números.",
        });
        return;
    }

    if (!/^[0-9]+$/.test(ingresos)) {
        Swal.fire({
            icon: "error",
            title: "Algo salió mal",
            text: "Los ingresos deben contener solo números.",
        });
        return;
    }

    if (!/^[0-9]+$/.test(egresos)) {
        Swal.fire({
            icon: "error",
            title: "Algo salió mal",
            text: "Los egresos deben contener solo números.",
        });
        return;
    }

    if (!/^[a-zA-Z][0-9]+$/.test(concepto)) {
        Swal.fire({
            icon: "error",
            title: "Algo salió mal",
            text: "El concepto debe contener solo letras y números.",
        });
        return;
    }

    if (!/^[0-9]+$/.test(valor)) {
        Swal.fire({
            icon: "error",
            title: "Algo salió mal",
            text: "El valor debe contener solo números.",
        });
        return;
    }

    Swal.fire({
        icon: "success",
        title: "Éxito",
        text: "El registro se ha agregado correctamente.",
    });
}

document.getElementById("guardar").onclick = ValidarDatos;