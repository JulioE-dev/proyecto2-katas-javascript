const users = [
  {
    name: "Alberto",
    favoritesSounds: {
      waves: { format: "mp3", volume: 50 },
      rain: { format: "ogg", volume: 60 },
      firecamp: { format: "mp3", volume: 80 },
    },
  },
  {
    name: "Antonio",
    favoritesSounds: {
      waves: { format: "mp3", volume: 30 },
      shower: { format: "ogg", volume: 55 },
      train: { format: "mp3", volume: 60 },
    },
  },
  {
    name: "Santiago",
    favoritesSounds: {
      shower: { format: "mp3", volume: 50 },
      train: { format: "ogg", volume: 60 },
      firecamp: { format: "mp3", volume: 80 },
    },
  },
  {
    name: "Laura",
    favoritesSounds: {
      waves: { format: "mp3", volume: 67 },
      wind: { format: "ogg", volume: 35 },
      firecamp: { format: "mp3", volume: 60 },
    },
  },
];

let totalvolume = 0;
let soundCount = 0;

for (const user of users) {
    for (const soundKey in user.favoritesSounds) {
        totalvolume += user.favoritesSounds[soundKey].volume;
        soundCount++;
    }
}

const averageVolume = totalvolume / soundCount;
console.log(`El volumen total acumulado es: ${totalvolume}`);
console.log(`El total de sonidos procesados es: ${soundCount}`);
console.log(`La media de volumen es: ${averageVolume}`);