// Dado el siguiente javascript, utiliza .filter() para mostrar por consola los streamers que incluyan la palabra introducida en el input. De esta forma, si introduzco 'Ru' me deberia de mostrar solo el streamer 'Rubius'. Si introduzco 'i', me deberia de mostrar el streamer 'Rubius' e 'Ibai'.
const streamers = [
	{name: 'Rubius', age: 32, gameMorePlayed: 'Minecraft'},
	{name: 'Ibai', age: 25, gameMorePlayed: 'League of Legends'},
	{name: 'Reven', age: 43, gameMorePlayed: 'League of Legends'},
	{name: 'AuronPlay', age: 33, gameMorePlayed: 'Among Us'}
];

const toFilterStreamers = (inputValue) => {
	const filtered = streamers.filter(streamer => streamer.name.toLowerCase().includes(inputValue));
	if (filtered.length > 0) {
		const names = [];
	  filtered.forEach(streamer => {
			names.push(streamer.name);
		});
		return names;
	} else {
    return "Lo sentimos. No hay resultados para ese valor";
	}
};

const input = document.querySelector('input');
const filtrarBtn = document.querySelector('#filtrarBtn');
filtrarBtn.addEventListener('click', (e) => {
	e.preventDefault();
	console.log(toFilterStreamers(input.value.toLowerCase()));
});






