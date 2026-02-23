const exams = [
    {name: 'Yuyu Cabeza Crack', score: 5},
    {name: 'Maria Aranda Jimenez', score: 1},
    {name: 'Cristóbal Martínez Lorenzo', score: 6},
    {name: 'Mercedez Regrera Brito', score: 7},
    {name: 'Pamela Anderson', score: 3},
    {name: 'Enrique Perez Lijó', score: 6},
    {name: 'Pedro Benitez Pacheco', score: 8},
    {name: 'Ayumi Hamasaki', score: 4},
    {name: 'Robert Kiyosaki', score: 2},
    {name: 'Keanu Reeves', score: 10}
];

const SumaTotal = exams.reduce((acumulador, exams) => acumulador + exams.score, 0);
console.log(SumaTotal)

const TotalAprobados = exams.reduce((acumulador, exams) => {
    if (exams.score >= 5) {
        return acumulador + exams.score;
    }
    return acumulador;
}, 0);

console.log(TotalAprobados);

const averageScore = exams.reduce((acumulador, exams, index, array) => {
    const Total = acumulador + exams.score;

    if(index === array.length - 1){
        return Total / array.length;
    }

    return Total;
}, 0);

console.log(averageScore);