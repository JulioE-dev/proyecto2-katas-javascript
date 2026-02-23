const streamers = [
	{name: 'Rubius', age: 32, gameMorePlayed: 'Minecraft'},
	{name: 'Ibai', age: 25, gameMorePlayed: 'League of Legends'},
	{name: 'Reven', age: 43, gameMorePlayed: 'League of Legends'},
	{name: 'AuronPlay', age: 33, gameMorePlayed: 'Among Us'}
];

const input$$ = document.querySelector('[data-function="toFilterStreamers"]');

input$$.addEventListener('input', (event) => {
    const searchTerm = event.target.value.toLowerCase();

    const filteredStreamers = streamers.filter(streamers => streamers.name.toLowerCase().includes(searchTerm));
    
    console.log(filteredStreamers);
});