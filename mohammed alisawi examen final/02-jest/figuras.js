function calcularArea(base, altura) {
    return (base * altura) / 2;
}

function cambiarNombre(nuevoNombre) {
    if (nuevoNombre == null || nuevoNombre === "") {
        return null;
    }
    return nuevoNombre;
}

function esCuadrado(lado1, lado2) {
    return lado1 === lado2;
}

module.exports = { calcularArea, cambiarNombre, esCuadrado };
