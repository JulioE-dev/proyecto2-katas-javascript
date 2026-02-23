const mainCharacters = [
    "Luke",
    "Leia",
    "Han Solo",
    "Chewbacca",
    "Rey",
    "Anakin",
    "Obi-Wan",
];

function findArrayIndex(array, text) {
    for (let i = 0; i < array.length; i++) {
        if (array[i] === text) {
            return i;
        }
    }
    return - 1;
}

function removeItem(array, text) {
    const index = findArrayIndex(array, text);
    if (index !== -1) {
        array.splice(index, 1);
    } else {
        console.log(`No encontrado! El personaje "${text}" no se pudo eliminar.`)
    }
    return array;
}

console.log("Array original:" , mainCharacters);

removeItem(mainCharacters, "Rey");
console.log("Tras Eliminar a Rey:", mainCharacters);

removeItem(mainCharacters, "Anakin");
console.log("Tras Eliminar a Anakin:", mainCharacters);

removeItem(mainCharacters, "Yoda");
console.log("Después de no encontrar a Yoda:", mainCharacters);