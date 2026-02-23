const xMen = [
    { name: 'Wolverine', year: 1974 },
    { name: 'Cyclops', year: 1963 },
    { name: 'Storm', year: 1975 },
    { name: 'Phoenix', year: 1963 },
    { name: 'Beast', year: 1963 },
    { name: 'Gambit', year: 1990 },
    { name: 'Nightcrawler', year: 1975 },
    { name: 'Magneto', year: 1963 },
    { name: 'Professor X', year: 1963 },
    { name: 'Mystique', year: 1978 }
];

function findOldestXMen(list) {
    let oldest = list[0];
    for (const member of list) {
        if (member.year < oldest.year) {
            oldest = member;
        }
    }
    return oldest;
}

const oldestMember = findOldestXMen(xMen);

console.log(`El miembro más antiguo de los X-men es: ${oldestMember.name} (${oldestMember.year})`);