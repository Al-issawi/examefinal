/**
 * Calcula el área de un triángulo.
 * @param {number} base - Base del triángulo.
 * @param {number} altura - Altura del triángulo.
 * @returns {number} Área del triángulo.
 */
function calcularArea(base, altura) {
    return (base * altura) / 2;
}

/**
 * Describe una figura geométrica.
 * @param {string} nombre - Nombre de la figura.
 * @returns {string} Descripción de la figura.
 */
function describir(nombre) {
    return "Esta es una figura llamada: " + nombre;
}

/**
 * Cambia el nombre de una figura.
 * @param {string} nombreActual - Nombre actual.
 * @param {string} nuevoNombre - Nuevo nombre.
 * @returns {string} Nuevo nombre.
 */
function cambiarNombre(nombreActual, nuevoNombre) {
    return nuevoNombre;
}

/**
 * Comprueba si dos lados tienen la misma longitud.
 * @param {number} lado1 - Primer lado.
 * @param {number} lado2 - Segundo lado.
 * @returns {string} Mensaje indicando si es un cuadrado.
 */
function esCuadrado(lado1, lado2) {
    if (lado1 === lado2) {
        return "Es un cuadrado.";
    } else {
        return "No es un cuadrado.";
    }
}

module.exports = { calcularArea, describir, cambiarNombre, esCuadrado };
