/*
every:  Devuelve verdadero si todo los elementos del vector cumplen con la condición.
Si un elemento no la cumple, devueolve falso

*/
console.log("Ejemplo every - para array");
const numeros = [11,2,33,45,1,110,12,55,17];

//verificar si el array tiene elementos positivos
const positivos= numeros.every(elemento => {
    return elemento >0
})
console.log("El array tiene solo elementos positivos ?", positivos);

//Diseñe la función que determine si todos los elemetos son multiplos de 5

const multiplosde5 = function(vector)
{
    return vector.every(elemento => elemento % 5==0);
}
console.log("Multiplos de 5: ",multiplosde5([5,10,15,20,25]));
console.log("Multiplos de 5: ",multiplosde5(numeros));

/*const multiplosdeCinco = function(numeros){
    return numeros.filter( item =>{
        return item%5==0;
    })
}
console.log(multiplosdeCinco(numeros));
console.log("Multiplos de 5", multiplosdeCinco(numeros)); */