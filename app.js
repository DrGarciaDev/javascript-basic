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