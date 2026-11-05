/**
 * Calcula el área de un triángulo.
 * @param {number} base
 * @param {number} altura
 * @returns {number}
 */
function calcularArea(base, altura) {
    return (base * altura) / 2;
}

/**
 * Describe una figura geométrica.
 * @param {string} nombre
 * @returns {string}
 */
function describir(nombre) {
    return "Esta es una figura llamada: " + nombre;
}

/**
 * Cambia el nombre de una figura.
 * @param {string} nombreActual
 * @param {string} nuevoNombre
 * @returns {string}
 */
function cambiarNombre(nombreActual, nuevoNombre) {
    return nuevoNombre;
}

/**
 * Comprueba si dos lados tienen la misma longitud.
 * @param {number} lado1
 * @param {number} lado2
 * @returns {string}
 */
function esCuadrado(lado1, lado2) {
    if (lado1 === lado2) {
        return "Es un cuadrado.";
    } else {
        return "No es un cuadrado.";
    }
}

module.exports = { calcularArea, describir, cambiarNombre, esCuadrado };
