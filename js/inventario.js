function ValidarInventario() {
    let codigo_producto = document.getElementById("codigo_producto").value;
    let nombre_producto = document.getElementById("nombre_producto").value;
    let cantidad = document.getElementById("cantidad_producto").value;
    let marca_producto = document.getElementById("marca_producto").value;

    if (codigo_producto == "" || nombre_producto == "" || cantidad == "" || marca_producto == "") {
        Swal.fire({
            icon: "error",
            title: "Algo salió mal",
            text: "Por favor complete todos los datos.",
        });
    }
    else {
        if (!/^[0-9]+$/.test(codigo_producto)) {
            Swal.fire({
                icon: "error",
                title: "Algo salió mal",
                text: "El código del producto debe contener solo números.",
            });
            return;
        }

        if (!/^[a-zA-Z][0-9]+$/.test(nombre_producto)) {
            Swal.fire({
                icon: "error",
                title: "Algo salió mal",
                text: "El nombre del producto contiene caracteres inválidos.",
            });
            return;
        }

        if (!/^[0-9]+$/.test(cantidad)) {
            Swal.fire({
                icon: "error",
                title: "Algo salió mal",
                text: "La cantidad debe contener solo números.",
            });
            return;
        }

        if (!/^[a-zA-Z][0-9]+$/.test(marca_producto)) {
            Swal.fire({
                icon: "error",
                title: "Algo salió mal",
                text: "La marca del producto contiene caracteres inválidos.",
            });
            return;
        }

        Swal.fire({
            icon: "success",
            title: "Éxito",
            text: "El producto se ha agregado correctamente.",
        });
    }

}

document.getElementById("guardar").onclick = ValidarInventario;