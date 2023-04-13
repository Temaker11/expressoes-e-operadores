//  Operador Condivional (Ternário)

//  Dependendo da condição, nós receberemos valores diferentes

//  condição entãi valor 1 se não falor 2
//  condition ? value1 : value2

// Exemplos

//Café da manhã top
let pao = true;
let queijo = false;

const niceBreakfast = pao || queijo ? 'café top' : 'café ruim';

console.log(niceBreakfast)
// Maior de 18

let age = 17
const canDrive = age >= 18 ? 'can drive' : "can't drive"
console.log(canDrive)