/*
some: devuelve verdadero, si al menos uno de los elemntos del vector cumple con la condición
Soi nunguno la cumple, devuelve falso
*/
const vector = [1,2,3,4,5,6,7,8,9,-10];

//verifica si el array tiene valores negaticos
const existenNegativos=vector.some( elemento =>{
    return elemento<0;
})
console.log("Hay solo negativos???: ",existenNegativos);