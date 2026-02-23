const numbers = [1,2,3,5,45,37,58];
function sumNumbers(numberlist) {
    let suma = 0;
    for (let i = 0; i < numberlist.length; i++) {
        suma = suma + numberlist[i];
        }
    return suma;
}
console.log("La suma total es:", sumNumbers(numbers));