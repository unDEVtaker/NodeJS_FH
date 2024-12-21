//funcion tradicional

function suma(a, b){
    return a+b;
}

//funcion flecha equivalente

const sumaFlecha = (a,b) => a + b;

console.log(suma(3,5));
console.log(sumaFlecha(3,5));

//numero par o impar

const esPar = (a) => (a%2==0)?`${a} es par`:`${a} es impar`;

console.log(esPar(5));

//Escribe una función flecha que reciba dos cadenas y devuelva la cadena más larga.
//Entrada: ("gato", "elefante"), Salida: "elefante".

const largo = (c1,c2) => (c1.length > c2.length)? c1 : c2;

console.log(largo("elefante", "gato"));

//Crea una función flecha que reciba un array de números y devuelva un nuevo array
// con cada número multiplicado por 2.
//Entrada: [1, 2, 3], Salida: [2, 4, 6].


const duplicarNumeros = (numeros) => numeros.map(numero => numero * 2);

console.log(duplicarNumeros([1,2,3]));


//Crea una función flecha que reciba un objeto con propiedades nombre
//y  edad, y devuelva una cadena como "Nombre: Juan, Edad: 30".
//Entrada: {nombre: "Juan", edad: 30}, Salida: "Nombre: Juan, Edad: 30"

const formatearPersona = (persona) =>
    `Nombre: ${persona.nombre}, edad: ${persona.edad}`;

const persona= {nombre: "Juan", edad: 30};
console.log(formatearPersona(persona));

