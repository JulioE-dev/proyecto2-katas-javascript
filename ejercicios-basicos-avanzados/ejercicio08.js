const avengers = [
    "Hulk",
    "Thor",
    "Iron Man",
    "Captain A.",
    "Spiderman",
    "Captain M.",
];
function findLongestWord(stringList) {
    let palabramaslarga = stringList[0];
    for (let i = 1; i < stringList.length; i++) {
      if (stringList[i].length > palabramaslarga.length) {
        palabramaslarga = stringList[i];
      }
    }
    return palabramaslarga;
    }
    console.log("El Avenger con el nombre más largo es:", findLongestWord(avengers));