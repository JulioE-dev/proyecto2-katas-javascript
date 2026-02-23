const numbers = [12,21,38,5,45,37,6];
function average(numbersList) {
    let suma = 0;
    for (let i = 0; i < numbersList.length; i++) {
        suma = suma + numbersList[i];
    }
    return suma / numbersList.length;
}

console.log("El promedio es:", average(numbers));