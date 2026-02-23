const movies = [
    { title: 'Inception', duration: 148 },
    { title: 'The Dark Knight', duration: 152 },
    { title: 'Interstellar', duration: 169 },
    { title: 'Dunkirk', duration: 106 },
    { title: 'The Prestige', duration: 130 },
    { title: 'Memento', duration: 113 },
    { title: 'Batman Begins', duration: 140 },
    { title: 'The Dark Knight Rises', duration: 164 },
    { title: 'Tenet', duration: 150 },
    { title: 'Insomnia', duration: 118 }
];

function averageMovieDuration(movies) {
    let totalMinutes = 0;
    for (const movie of movies) {
        totalMinutes += movie.duration;
    }
    const average = totalMinutes / movies.length;
    return average;
}

const averageMinutes = averageMovieDuration(movies);
console.log(`El promedio de duración de las peliculas de Nolan es: ${averageMinutes} minutos`)