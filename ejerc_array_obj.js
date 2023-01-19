//Ejercicio #1 DATOS DE PERSONAS Y CIUDADES
const {personas, ciudades} = require("./datos");
console.log("Separando los datos de un archivo ");
console.log(personas);
console.log(ciudades);

//2. Listar las personas de sexo femenino
console.log();                          
console.log("Ejercicio #2");
const arrayFemeninos = personas.filter(personas => personas.sexo=="F");
console.log("Listado de personas de sexo femenino: ", arrayFemeninos);

//3. Listado de ciudades con temperaturas mayores a 25 grados
const arrayCiudades = ciudades.filter(ciudades => ciudades.temp>25); 
console.log();
console.log("Ejercicio #3");
console.log("Listado de ciudades mayores a 25 grados celcius: ", arrayCiudades);  

//4. Encuetre el total de la poblacion del array ciudades
const arrayPoblacion = ciudades.reduce((acumulador, ciudad) => acumulador + ciudad.poblacion,0);
console.log();
console.log("Ejercicio #4");
console.log("Listado total de la poblacion de todas las ciudades es: ", arrayPoblacion); 

//5. Encuentre la sumatoria de los pesos de las personas de sexo masculino (array personas)
const pesoMaculinos = personas.filter(persona => persona.sexo=="M")
                              .reduce((acumulador, persona) => acumulador + persona.peso, 0);
console.log();
console.log("Ejercicio #5");
console.log("Sumatoria de pesos de las personas de sexo maxculino es de: ", pesoMaculinos);

//6.Encuentre el promedio de las temperaturas (array ciudades)
const temperaturasPromedio = ciudades.reduce((total, ciudad) => total + ciudad.temp, 0) / ciudades.length;
console.log();
console.log("Ejercicio #6");
console.log("Promedio de las temperaturas de todas las ciudades: ", temperaturasPromedio); 

//7.Listado de personas de sexo masculino ordenados ascendentemente (a-z)
const hombresOrdenados = personas.filter(persona => persona.sexo === "M")
                                 .sort((a, b) => (a.Apellidos > b.Apellidos ? 1 : -1))
console.log();
console.log("Ejercicio #7");
console.log("Listado de las personas de sexo masculino ordenados de forma ascendente: ", hombresOrdenados); 

//8.Agregue el campo país al array de ciudades (Los países pueden ser Ecuador, Colombia, Perú ). 
//Complete el array de ciudades con un total de 10 ciudades.  
//A continuación, calcule el total de habitantes del país "Ecuador"
const habitantesEcuador = ciudades.filter(ciudades => ciudades.pais == "Ecuador")
.reduce((acumulador, ciudades) => acumulador + ciudades.poblacion, 0);
console.log();
console.log("Ejercicio #8");
console.log("Total de habitantes pais Ecuador: ", habitantesEcuador );

//9.Escriba el código necesario para convertir el array de personas en una array 
//que tenga objetos con los campos {apellidos, nombres}. El método map le sería de mucha utilidad.
const apellidosNombres = personas.filter(personas => personas)
const personasArray = personas.map(({ apellidos, nombres }) => ({
    ["apellidos"]: apellidos,
    ["nombres"]: nombres,
  }));
console.log();
console.log("Ejercicio #9");
console.log("Array de apellidos y nombres: ", personasArray); 

console.log("FIN DEL PROGRAMA");
