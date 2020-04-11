// // let nombre  = prompt('Cual es tu nombre');
// // let edad    = prompt('Cual es tu edad');

// // document.getElementById('app').innerHTML = `Bienvenido ${nombre} de ${edad}`;

// let nombre, mensaje;

// nombre = "Juan";
// nombre = 'Juan';


// mensaje = 'Escapando \'comillas\'';

// mensaje = "Escapando " + "mensaje";

// let aprendiendo = 'aprendiendo java ', tecnologia = 'tecnologia';

// console.log(`${aprendiendo} ${tecnologia}`);
// console.log(`${aprendiendo.length}`);
// console.log(`${aprendiendo.concat(' tecno')}`);
// console.log(`${aprendiendo.toUpperCase()}`);
// console.log(`${aprendiendo.toLocaleLowerCase()}`);
// console.log(`${aprendiendo.indexOf('apren')}`);
// console.log(`${aprendiendo.substring(0, 2)}`);
// console.log(`${aprendiendo.slice(-2)}`);
// console.log(`${aprendiendo.slice(0,3)}`);
// console.log(`${aprendiendo.split(' ')}`);
// console.log(`${aprendiendo.replace('java', 'python')}`);
// console.log(`${aprendiendo.includes('java')}`);
// console.log(`${aprendiendo.repeat(2)}`);

// // Numeros 
// const   n1 = 30,
//         n2 = 20,
//         n3 = 20.20,
//         n4 = .1020,
//         n5 = -3;

// let resultado;

// // suma 
// resultado = n1 + n2;
// // resta 
// resultado = n1 - n2;
// // multiplicacion 
// resultado = n1 * n2;
// // division 
// resultado = n1 / n2;
// // modulo 
// resultado = n1 % n2;
// // pi 
// resultado = Math.PI;
// // redondeos
// resultado = Math.round(2.5);
// resultado = Math.ceil(2.5);
// resultado = Math.floor(2.5);
// // raiz cuadrada 
// resultado = Math.sqrt(144);
// // numero absoluto 
// resultado = Math.abs(-144);
// // potencia 
// resultado = Math.pow(8, 3);
// // minimo 
// resultado = Math.min(8, 3, 4);
// // maximo 
// resultado = Math.max(8, 3, 4);
// // random 
// resultado = Math.random();
// // jerarquia de operaciones 
// resultado = 1 + 2 * 2;

// console.log(resultado);
// // tipos de datos 
// let valor;

// valor = "Luis";
// valor = 0;
// valor = true;
// valor = null;
// valor = Symbol('simbolo');
// valor = [1,2,3];
// valor = {nombre: 'luis', apellido: 'garcia'};
// valor = new Date();

// console.log(typeof(valor));

// // operadores de comparacion 
// const num1 = 20;
// const num2 = 50;
// const num3 = '20';

// console.log( num1 > num2);
// console.log( num1 < num2);

// // comparador igual 
// console.log( num1 == num2);
// // compara hasta el tipo de dato 
// console.log( num1 === num2);

// // diferentes 
// console.log( num1 != num2);
// console.log( num1 !== num2);

// // convertir strings a numeros 

// const num1 = '50';
// const num2 = 10;
// const num3 = 'tres';

// console.log( Number(num1) + num2);
// console.log( parseInt(num1) + num2);
// console.log( parseFloat(num1) + num2);
// console.log( parseFloat(num1).toFixed(1) + num2);

// // convertir numeros a strings 
// let cp = 90210;

// cp = String(cp);
// cp = cp.toString();
// console.log( cp.length );

// // arreglos 
// const numeros = [1,2,3,4,5];

// const meses = new Array ('enero', 'febrero', 'marzo');
// // maneras de agregar datos a un arreglo 
// meses[3] = 'abril';
// // añade al final 
// meses.push('mayo');
// // añade al principio
// meses.unshift('mes 0');
// // eliminar al final 
// meses.pop();
// // eliminar al principio
// meses.shift();
// // quitar o eliminar dentro de un rango
// // desde y cuantos quitar  
// meses.splice(2,1);
// // revertir 
// meses.reverse();

// let meses2 = ['diciembre'];

// // conctenar arreglos 
// console.log(meses.concat(meses2));

// // ordenar arreglos 
// meses.sort();
// // encontrar datos en un array 
// console.log(meses.indexOf('abril'));
// console.log(meses);

// OBJETOS 

const persona = {
    nombre: 'luis',
    apellidos: 'garcia',
    edad: 37,
    musica: ['rock', 'balada'],
    hogar: {
        ciudad: 'guadalajara',
        pais: 'mexico'
    },
    nacimiento: function(){
        return new Date().getFullYear() - this.edad;
    }
}

console.log(persona.musica);
console.log(persona.musica[0]);

console.log(persona.hogar);

console.log(persona['hogar']['ciudad']);
console.log(persona.hogar.ciudad);

console.log(persona.nacimiento());

const autos = [
    {modelo: 'mustang', motor:2.1},
    {modelo: 'corvete', motor:2.2}
]

for (let i = 0; i < autos.length; i++) {
    console.log(autos[i].modelo);
}