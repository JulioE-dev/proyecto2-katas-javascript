const videogames = [
    {name: 'Final Fantasy VII', genders: ['RPG'], score: 9.5},
    {name: 'Assasins Creed Valhalla', genders: ['Aventura', 'RPG'], score: 4.5},
    {name: 'The Last of Us 2', genders: ['Acción', 'Aventura'], score: 9.8},
    {name: 'Super Mario Bros', genders: ['Plataforma'], score: 8.5},
    {name: 'Genshin Impact', genders: ['RPG', 'Aventura'], score: 7.5},
    {name: 'Legend of Zelda: Breath of the wild', genders: ['RPG'], score: 10},
]

const RPGGames = videogames.filter(game => game.genders.includes('RPG'));

const averageRPGScore = RPGGames.reduce((acumulador, game, index, array) => {
    const Total = acumulador + game.score;

    if(index === array.length -1) {
        return Total / array.length;
    }
    return Total;
}, 0);

console.log("Filtrado de Juegos RPG:", RPGGames);
console.log("Puntuación Media:", averageRPGScore);

