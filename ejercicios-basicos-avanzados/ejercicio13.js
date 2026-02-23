const names = [
    'Peter',
    'Steve',
    'Tony',
    'Natasha',
    'Clint',
    'Logan',
    'Xabier',
    'Bruce',
    'Peggy',
    'Jessica',
    'Marc'
];
function nameFinder(namelist, nameToFind){
    for (let i = 0; i < namelist.length; i++){
        if (namelist[i] === nameToFind) {
            return { existe: true, posicion: i };
        }
    }
    return false;
}

console.log("Buscando a Logan:", nameFinder(names, 'Logan'));
console.log("Buscando a Chiquito de la Calzada:", nameFinder(names, 'Chiquito de la Calzada'));