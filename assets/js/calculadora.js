import {
  areaCuadrado,
  areaRectangulo,
  areaTriangulo,
  division,
  multiplicacion,
  perimetroCuadrado,
  perimetroRectangulo,
  perimetroTriangulo,
  potencia,
  radicacion,
  resta,
  suma,
} from "./funciones/index.js";

export const calculadora = {
  1: {
    message:
      "Seleccione una opcion:\n1.Suma\n2.Resta\n3.Multiplicacion\n4.Division",
    1: suma,
    2: resta,
    3: multiplicacion,
    4: division,
  },
  2: {
    message:
      "Seleccione una opcion:\n1.Suma\n2.Resta\n3.Multiplicacion\n4.Division\n5.Potencia\n6.Radicacion",
    1: suma,
    2: resta,
    3: multiplicacion,
    4: division,
    5: potencia,
    6: radicacion,
  },
  3: {
    message:
      "Seleccione una opcion:\n1.Area Triangulo\n2.Perimetro Triangulo\n3.Area Cuadrado\n4.Perimetro Cuadrado\n5.Area Rectangulo\n6.Perimetro Rectangulo",
    1: areaTriangulo,
    2: perimetroTriangulo,
    3: areaCuadrado,
    4: perimetroCuadrado,
    5: areaRectangulo,
    6: perimetroRectangulo,
  },
};
export const contadores = {
  1: 0,
  2: 0,
  3: 0,
  4: 0,
  5: 0,
  6: 0,
  especial: {
    1: 0,
    2: 0,
    3: 0,
    4: 0,
    5: 0,
    6: 0,
  },
};
export const operaciones = {
  1: "Suma",
  2: "Resta",
  3: "Multiplicacion",
  4: "Division",
  5: "Potencia",
  6: "Radicacion",
  especial: {
    1: "Area Triangulo",
    2: "Perimetro Triangulo",
    3: "Area Cuadrado",
    4: "Perimetro Cuadrado",
    5: "Area Rectangulo",
    6: "Perimetro Rectangulo",
  },
};
