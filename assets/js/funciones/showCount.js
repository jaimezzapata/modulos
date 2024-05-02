import { operaciones } from "../calculadora.js";

export const showCount = (contadores) => {
  let total = `El numero de operaciones es:\n`;

  for (let index = 1; index <= 6; index++) {
    let cadena = `${operaciones[index]} : ${contadores[index]}\n`;

    total += cadena;
  }

  for (let index = 1; index <= 6; index++) {
    let cadena = `${operaciones.especial[index]} : ${contadores.especial[index]}\n`;
    total += cadena;
  }

  alert(total);
};
