// let nombre  = prompt('Cual es tu nombre');
// let edad    = prompt('Cual es tu edad');

// document.getElementById('app').innerHTML = `Bienvenido ${nombre} de ${edad}`;

let nombre, mensaje;

nombre = "Juan";
nombre = 'Juan';


mensaje = 'Escapando \'comillas\'';

mensaje = "Escapando " + "mensaje";

let aprendiendo = 'aprendiendo java ', tecnologia = 'tecnologia';

console.log(`${aprendiendo} ${tecnologia}`);
console.log(`${aprendiendo.length}`);
console.log(`${aprendiendo.concat(' tecno')}`);
console.log(`${aprendiendo.toUpperCase()}`);
console.log(`${aprendiendo.toLocaleLowerCase()}`);
console.log(`${aprendiendo.indexOf('apren')}`);
console.log(`${aprendiendo.substring(0, 2)}`);
console.log(`${aprendiendo.slice(-2)}`);
console.log(`${aprendiendo.slice(0,3)}`);
console.log(`${aprendiendo.split(' ')}`);
console.log(`${aprendiendo.replace('java', 'python')}`);
console.log(`${aprendiendo.includes('java')}`);
console.log(`${aprendiendo.repeat(2)}`);

// Numeros 
const   n1 = 30,
        n2 = 20,
        n3 = 20.20,
        n4 = .1020,
        n5 = -3;

let resultado;

// suma 
resultado = n1 + n2;
// resta 
resultado = n1 - n2;
// multiplicacion 
resultado = n1 * n2;
// division 
resultado = n1 / n2;
// modulo 
resultado = n1 % n2;
// pi 
resultado = Math.PI;
// redondeos
resultado = Math.round(2.5);
resultado = Math.ceil(2.5);
resultado = Math.floor(2.5);
// raiz cuadrada 
resultado = Math.sqrt(144);
// numero absoluto 
resultado = Math.abs(-144);
// potencia 
resultado = Math.pow(8, 3);
// minimo 
resultado = Math.min(8, 3, 4);
// maximo 
resultado = Math.max(8, 3, 4);
// random 
resultado = Math.random();
// jerarquia de operaciones 
resultado = 1 + 2 * 2;

console.log(resultado);

let valor;

valor = "Luis";
valor = 0;
valor = true;
valor = null;
valor = Symbol('simbolo');
valor = [1,2,3];
valor = {nombre: 'luis', apellido: 'garcia'};
valor = new Date();

console.log(typeof(valor));