function ValidarPedido() {

    let usuario = document.getElementById("nombre_usuario").value;
    let telefono = document.getElementById("telefono_usuario").value;
    let direccion = document.getElementById("direccion_usuario").value;
    let producto = document.getElementById("producto").value;
    let cantidad = document.getElementById("cantidad").value;
    let metodo_pago = document.getElementById("metodo_pago").value;

    if (producto === "" || usuario === "" || direccion === "" || telefono === "" || cantidad === "" || (requiereTarjeta && (num_tarjeta === "" || cvv === ""))) {
        Swal.fire({
            icon: "error",
            title: "Algo salió mal",
            text: "Por favor complete todos los datos.",
        });
        return;
    }

    if (!/^[a-zA-Z]+$/.test(producto)) {
        Swal.fire({
            icon: "error",
            title: "Algo salió mal",
            text: "El nombre del producto debe contener únicamente letras y espacios.",
        });
        return;
    }

    if (!/^[a-zA-Z]+$/.test(usuario)) {
        Swal.fire({
            icon: "error",
            title: "Algo salió mal",
            text: "El nombre del usuario debe contener únicamente letras y espacios.",
        });
        return;
    }

    if (!/^[a-zA-Z0-9-@.]+$/.test(direccion)) {
        Swal.fire({
            icon: "error",
            title: "Algo salió mal",
            text: "La dirección contiene caracteres inválidos.",
        });
        return;
    }

    if (!/^[0-9]+$/.test(telefono) || telefono.length < 10) {
        Swal.fire({
            icon: "error",
            title: "Algo salió mal",
            text: "El teléfono debe contener únicamente números y tener al menos 10 dígitos.",
        });
        return;
    }

    if (!/^[0-9]+$/.test(cantidad)) {
        Swal.fire({
            icon: "error",
            title: "Algo salió mal",
            text: "La cantidad debe contener únicamente números.",
        });
        return;
    }

    if (requiereTarjeta) {
        if (!/^[0-9]+$/.test(num_tarjeta) || num_tarjeta.length < 15 || num_tarjeta.length > 16) {
            Swal.fire({
                icon: "error",
                title: "Algo salió mal",
                text: "El número de tarjeta debe contener entre 15 y 16 números.",
            });
            return;
        }

        if (!/^[0-9]+$/.test(cvv) || cvv.length < 3 || cvv.length > 4) {
            Swal.fire({
                icon: "error",
                title: "Algo salió mal",
                text: "El CVV debe contener 3 o 4 números.",
            });
            return;
        }
    }

    Swal.fire({
        icon: "success",
        title: "Éxito",
        text: "El pedido se ha realizado correctamente.",
    });
}

document.getElementById("confirmar_pedido").onclick = ValidarPedido;