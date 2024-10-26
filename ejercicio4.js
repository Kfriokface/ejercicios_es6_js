// 4.1 Dado el siguiente array, utiliza .filter() para generar un nuevo array con los valores que sean mayor que 18
const ages = [22, 14, 24, 55, 65, 21, 12, 13, 90];

const newAges = ages.filter(age => age > 18);

console.log('\n--> Ejercicio 4.1');
console.log(newAges);

// 4.2 Dado el siguiente array, utiliza .filter() para generar un nuevo array con los valores que sean par.
const newAges2 = ages.filter(age => age % 2 === 0);

console.log('\n--> Ejercicio 4.2');
console.log(newAges2);

// 4.3 Dado el siguiente array, utiliza .filter() para generar un nuevo array con los streamers que tengan el gameMorePlayed = 'League of Legends'.
const streamers = [
	{name: 'Rubius', age: 32, gameMorePlayed: 'Minecraft'},
	{name: 'Ibai', age: 25, gameMorePlayed: 'League of Legends'}, 
	{name: 'Reven', age: 43, gameMorePlayed: 'League of Legends'},
	{name: 'AuronPlay', age: 33, gameMorePlayed: 'Among Us'}
];

const lolStreamers = streamers.filter(streamer => streamer.gameMorePlayed === 'League of Legends');

console.log('\n--> Ejercicio 4.3');
console.log(lolStreamers);

// 4.4 Dado el siguiente array, utiliza .filter() para generar un nuevo array  con los streamers que incluyan el caracter 'u' en su propiedad .name. Recomendamos usar la funcion .includes() para la comprobación.

const uStreamers = streamers.filter(streamer => streamer.name.toLowerCase().includes('u'));

console.log('\n--> Ejercicio 4.4');
console.log(uStreamers);

// 4.5 utiliza .filter() para generar un nuevo array con los streamers que incluyan el caracter 'Legends' en su propiedad .gameMorePlayed. Recomendamos usar la funcion .includes() para la comprobación. Además, pon el valor de la propiedad .gameMorePlayed a MAYUSCULAS cuando .age sea mayor que 35.

const oldestStreamers = streamers.filter(streamer => 
  streamer.gameMorePlayed.includes('Legends')).map(streamer => {
    if (streamer.age > 35) {
      return {...streamer, gameMorePlayed: streamer.gameMorePlayed.toUpperCase() };
    }
  return streamer;
});

console.log('\n--> Ejercicio 4.5');
console.log(oldestStreamers);
