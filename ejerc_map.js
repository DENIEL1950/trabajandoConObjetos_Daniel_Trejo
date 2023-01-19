/*
map: El map()método crea una nueva matriz con los resultados 
de llamar a una función proporcionada en cada elemento de la matriz que llama.
*/

//Se pide duplicar cada elemento del array numeros. 
//Este resultado debe almacenarse en un nuevo vector o array.

const numeros = [2,3,10,22,5,7,11,1];

const numeroDuplicados = numeros.map(elemento =>{
    return elemento*2;
})
console.log("Vector original:", numeros);
console.log("Nuevo vector:", numeroDuplicados);

//Diseñe la funcion que devuelve cada elemento del vector  elevado al cauadrado

const cuadradoNumero = function(vector)
{
    return vector.map(item => item * item);
}
console.log("Vector original:", numeros);
console.log("Numero al cuadrado:", cuadradoNumero([1,2,3]));
console.log("Numero al cuadrado:", cuadradoNumero([4,5,6]));

