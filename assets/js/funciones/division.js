 export const division=()=>{
      let a=+prompt("Ingrese el primer termino de la division")
      let b=+prompt("Ingrese el segundo termino de la division")
      if(b===0){
        alert("No se puede dividir por 0")
        return
      }
      let total=a/b;
      alert(`El resultado es: ${total}`)
  }  
    