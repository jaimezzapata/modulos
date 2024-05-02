export const perimetroTriangulo=()=>{
    let primerLado=+prompt("Ingrese el primer lado")
    let segundoLado=+prompt("Ingrese el segundo lado")
    let tercerLado=+prompt("Ingrese el tercer lado")
    let perimetro=primerLado+segundoLado+tercerLado;
   alert(`El perimetro del triangulo es: ${perimetro}`)

}