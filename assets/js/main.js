import { calculadora, contadores } from "./calculadora.js";
import { showCount } from "./funciones/showCount.js";

let flag = true;
let tipo;
while (flag) {
  tipo = +prompt(
    "Seleccione una calculador:\n1.Normal\n2.Cientifica\n3.Especial\n4.Salir"
  );
  if (calculadora[tipo]) {
    let operacion = +prompt(calculadora[tipo].message);
    if (calculadora[tipo][operacion]) {
      calculadora[tipo][operacion]();
      if (tipo === 3) contadores["especial"][operacion]++;
      else contadores[operacion]++;
    } else alert("Seleccione una opcion valida");
  } else if (tipo === 4) {
    showCount(contadores);
    flag = false;
  } else alert("Seleccione una opcion valida");
}
