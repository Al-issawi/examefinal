const { calcularArea, cambiarNombre, esCuadrado } = require("./figuras");

test("calcularArea", () => {
    expect(calcularArea(4, 3)).toBe(6);
    expect(calcularArea(4, 3)).not.toBe(7);
});

test("cambiarNombre", () => {
    expect(cambiarNombre("")).toBeNull();
    expect(cambiarNombre("Triángulo")).not.toBeNull();
});

test("esCuadrado", () => {
    expect(esCuadrado(5, 5)).toBe(true);
    expect(esCuadrado(5, 4)).toBe(false);
});
