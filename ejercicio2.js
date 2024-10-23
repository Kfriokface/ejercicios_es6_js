// 2.1 Dado el siguiente array, crea una copia usando spread operators.
const pointsList = [32, 54, 21, 64, 75, 43];

const pointsListCopied = [...pointsList];

console.log('\n--> Ejercicio 2.1');
console.log(pointsListCopied);

// 2.2 Dado el siguiente objeto, crea una copia usando spread operators.
const toy = {name: 'Bus laiyiar', date: '20-30-1995', color: 'multicolor'};

const toyCopied = {...toy};

console.log('\n--> Ejercicio 2.2');
console.log(toyCopied);

// 2.3 Dado los siguientes arrays, crea un nuevo array juntandolos usando 
// spread operatos.
const pointsListNew = [32, 54, 21, 64, 75, 43];
const pointsLis2 = [54,87,99,65,32];

const pointsListJoined = [...pointsListNew, ...pointsLis2];

console.log('\n--> Ejercicio 2.3');
console.log(pointsListJoined);

// 2.4 Dado los siguientes objetos. Crea un nuevo objeto fusionando los dos con spread operators.
const toyNew = {name: 'Bus laiyiar', date: '20-30-1995', color: 'multicolor'};
const toyUpdate = {lights: 'rgb', power: ['Volar like a dragon', 'MoonWalk']}

const toyJoined = {...toyNew, ...toyUpdate};

console.log('\n--> Ejercicio 2.4');
console.log(toyJoined);

// 2.5 Dado el siguiente array. Crear una copia de él eliminando la posición 2 pero sin editar el array inicial. De nuevo, usando spread operators.
const colors = ['rojo', 'azul', 'amarillo', 'verde', 'naranja'];

const colorsCopied = [...colors.slice(0,2), ...colors.slice(3)];

console.log('\n--> Ejercicio 2.5');
console.log(colorsCopied);