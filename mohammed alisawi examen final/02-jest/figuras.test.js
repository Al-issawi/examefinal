const { calcularArea, cambiarNombre, esCuadrado } = require("./figuras");

describe("calcularArea", () => {
    test("calcula el área correctamente", () => {
        expect(calcularArea(4, 3)).toBe(6);
    });

    test("no devuelve el resultado esperado si los datos cambian", () => {
        expect(calcularArea(4, 3)).not.toBe(7);
    });
});

describe("cambiarNombre", () => {
    test("devuelve null cuando el nombre está vacío", () => {
        expect(cambiarNombre("")).toBeNull();
    });

    test("devuelve el nombre cuando es válido", () => {
        expect(cambiarNombre("Triángulo")).not.toBeNull();
    });
});

describe("esCuadrado", () => {
    test("devuelve true cuando los lados son iguales", () => {
        expect(esCuadrado(5, 5)).toBe(true);
    });

    test("devuelve false cuando los lados son distintos", () => {
        expect(esCuadrado(5, 4)).toBe(false);
    });
});
