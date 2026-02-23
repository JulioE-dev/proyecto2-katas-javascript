const duplicates =[
    'sushi',
    'pizza',
    'burguer',
    'potatoe',
    'pasta',
    'ice-ream',
    'pizza',
    'chicken',
    'onion rings',
    'pasta',
    'soda'
];
function removeDuplicates(list){
    let uniquelist = [];
    for (let i = 0; i < list.length; i++) {
        if (!uniquelist.includes(list[i])) {
            uniquelist.push(list[i]);
        }
    }
    return uniquelist;
}

console.log("Lista sin duplicados:" , removeDuplicates(duplicates));