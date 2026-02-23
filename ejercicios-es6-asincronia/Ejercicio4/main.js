const ages = [22, 14, 24, 55, 65, 21, 12, 13, 90];
const adultAges = ages.filter(age => age > 18);
console.log(adultAges);

const evenAges = ages.filter(age => age % 2 === 0);
console.log(evenAges);

const streamers = [
	{name: 'Rubius', age: 32, gameMorePlayed: 'Minecraft'},
	{name: 'Ibai', age: 25, gameMorePlayed: 'League of Legends'},
	{name: 'Reven', age: 43, gameMorePlayed: 'League of Legends'},
	{name: 'AuronPlay', age: 33, gameMorePlayed: 'Among Us'}
];

const streamersLol = streamers.filter(streamers => streamers.gameMorePlayed === 'League of Legends');
console.log(streamersLol);

const streamerswithu = streamers.filter(streamer => streamer.name.includes('u'));
console.log(streamerswithu);

const legendsStreamer = streamers.filter(streamer => {
    const isLegends = streamer.gameMorePlayed.includes('Legends');
    
    if (isLegends && streamer.age > 35) {
        streamer.gameMorePlayed = streamer.gameMorePlayed.toUpperCase();
    }
    
    return isLegends;
});

console.log(legendsStreamer);