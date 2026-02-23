const tracks = [
    { title: 'Enter Sandman', genre: 'Metal' },
    { title: 'Back in Black', genre: 'Rock' },
    { title: 'Bohemian Rhapsody', genre: 'Rock' },
    { title: 'Blinding Lights', genre: 'Pop' },
    { title: 'Old Town Road', genre: 'Country' },
    { title: 'Smells Like Teen Spirit', genre: 'Grunge' },
    { title: 'Bad Guy', genre: 'Pop' },
    { title: 'Thunderstruck', genre: 'Rock' },
    { title: 'Hotel California', genre: 'Rock' },
    { title: 'Stairway to Heaven', genre: 'Rock' }
];

const SongByGenre = {};
for (const track of tracks) {
    if (!SongByGenre[track.genre]) {
        SongByGenre[track.genre] =[];
    }
    SongByGenre[track.genre].push(track);
}

console.log("Canciones agrupadas por género:");
console.log(SongByGenre);