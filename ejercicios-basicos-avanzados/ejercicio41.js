function rollDice(faces) {
    const result = Math.floor(Math.random() * faces) + 1;
    return result;
}

console.log("Tirada con un dado tradicional de 6 caras:", rollDice(6));
console.log("Tirada con un dado de rol  de 12 caras:", rollDice(12));
console.log("Tirada con un dado de rol de 20 caras:", rollDice(20));