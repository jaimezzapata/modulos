export const perimetroRectangulo=()=>{
    let base=+prompt("Ingrese la base del rectangulo");
    let altura=+prompt("Ingrese la altura del rectangulo");
    let perimetro=(base*2)+(altura*2);
    alert(`El perimetro del rectangulo es: ${perimetro}`)
}