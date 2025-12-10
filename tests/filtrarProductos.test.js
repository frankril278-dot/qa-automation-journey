const { filtrarCaros } = require("../src/filtrarProductos");

describe("Filtrar productos caros", () => {

  test("debe devolver solo productos > 500", () => {
    const lista = [
      { nombre: "A", precio: 100 },
      { nombre: "B", precio: 700 },
      { nombre: "C", precio: 1200 },
    ];

    const resultado = filtrarCaros(lista, 500);

    expect(resultado.length).toBe(2);
    expect(resultado.map(p => p.nombre)).toContain("B");
    expect(resultado.map(p => p.nombre)).toContain("C");
  });

});
