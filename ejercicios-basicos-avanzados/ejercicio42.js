const fantasticFour = [
    "La antorcha humana",
    "Mr. Fantástico",
    "La mujer invisible",
    "La cosa",
];

function swap(array, index1, index2) {
    const temp = array[index1];
    array[index1] = array[index2];
    array[index2] = temp;
    return array;
}

console.log("Original:", fantasticFour);

const result = swap(fantasticFour,0, 3);
console.log("Después del 1er swap:", result);

swap(fantasticFour, 1, 2);
console.log("Después del 2º swap:", fantasticFour);