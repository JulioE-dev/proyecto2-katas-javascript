const capitals = {
    Spain: 'Madrid',
    France: 'Paris',
    Italy: 'Rome',
    Germany: 'Berlin',
    Portugal: 'Lisbon',
    Poland: 'Warsaw',
    Greece: 'Athens',
    Austria: 'Vienna',
    Hungary: 'Budapest',
    Ireland: 'Dublin'
};

function getCapital(country) {
    const capital = capitals[country];
    if (capital) {
        return `La capital de ${country} es ${capital}`;
    } else {
        return `Lo siento, no tengo información sobre la captail de ${country}`;
    }
}

console.log(getCapital(`Spain`));
console.log(getCapital(`Ireland`));
console.log(getCapital(`Brazil`));
console.log(getCapital(`Poland`));
console.log(getCapital(`Hungary`));
console.log(getCapital(`Egipto`));