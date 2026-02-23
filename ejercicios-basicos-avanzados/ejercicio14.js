const words = [
    'code',
    'repeat',
    'eat',
    'sleep',
    'code',
    'enjoy',
    'sleep',
    'code',
    'enjoy',
    'sleep',
    'code'
];

function repeatCounter(list) {
    let counter = {};
    for (let i = 0; i < list.length; i++) {
        let palabraActual = list[i];

        if (counter[palabraActual]) {
            counter[palabraActual] = counter[palabraActual] + 1;
        }else {
            counter[palabraActual] = 1;
        }
    }
    return counter;
}

console.log("Recuento:", repeatCounter(words));