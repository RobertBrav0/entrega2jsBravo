
function procesarDatos() {
    let nombre = prompt("Ingresa tu nombre:");
    let mensaje = "Hola " + nombre + ", gracias por venir a la Gran Fiesta.";
    alert(mensaje);
}

function verificarEdad() {
    var edad = parseInt(document.getElementById("edad").value);
    if (isNaN(edad)) {
        document.getElementById("mensaje-edad").innerHTML = "Por favor, ingresa un número válido.";
    } else {
        if (edad >= 18) {
            document.getElementById("mensaje-edad").innerHTML = "Eres mayor de 18 años y puedes realizar la compra.";
        } else {
            document.getElementById("mensaje-edad").innerHTML = "Lo siento, debes ser mayor de 18 años para realizar la compra.";
        }
    }
}


function calcularBebidas() {
    var personas = parseInt(document.getElementById("personas").value);
    var bebidas = ["Fernet", "Coca", "Vino", "Hielo"];
    var cantidad = [2, 4, 1, 1];
    var mensaje = "";
    if (isNaN(personas)) {
        mensaje = "Por favor, ingresa un número válido.";
    } else {
        for (var i = 0; i < bebidas.length; i++) {
            var total = cantidad[i] * personas;
            mensaje += "Necesitarás " + total + " litros de " + bebidas[i] + ".<br>";
        }
    }
    document.getElementById("mensaje-bebidas").innerHTML = mensaje;
}

function agregarInvitados() {
    let invitados = [];
    while (true) {
        let nombre = prompt("Ingresa el nombre del invitado o escribe 'listo' para terminar:");
        if (nombre.toLowerCase() === "listo") {
            break;
        } else {
            invitados.push(nombre);
        }
    }
    alert("Los invitados son: " + invitados.join(", "));
}

