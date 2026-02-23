const mutants = [
    { name: 'Wolverine', power: 'regeneration' },
    { name: 'Magneto', power: 'magnetism' },
    { name: 'Professor X', power: 'telepathy' },
    { name: 'Jean Grey', power: 'telekinesis' },
    { name: 'Rogue', power: 'power absorption' },
    { name: 'Storm', power: 'weather manipulation' },
    { name: 'Mystique', power: 'shape-shifting' },
    { name: 'Beast', power: 'superhuman strength' },
    { name: 'Colossus', power: 'steel skin' },
    { name: 'Nightcrawler', power: 'teleportation' }
];

function findMutantByPower(mutants, power) {
    const foundMutants = [];
    for (const Mutant of mutants) {
        if (Mutant.power === power) {
            foundMutants.push(Mutant.name);
        }
    }
    if (foundMutants.length > 0) {
        return `Mutantes con el poder ${power}: ${foundMutants.join(', ')}`;
    } else {
        return `No hay ningún Mutante con el poder ${power}`;
    }
}

console.log(findMutantByPower(mutants, 'regeneration'));
console.log(findMutantByPower(mutants, 'Hard Power'));
console.log(findMutantByPower(mutants, 'steel skin'));