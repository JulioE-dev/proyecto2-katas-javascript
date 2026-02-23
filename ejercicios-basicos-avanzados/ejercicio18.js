const placeToTravel = [
    {id: 5, name:"Japan"},
    {id:11, name:"Venecia"},
    {id: 23, name:"Murcia"},
    {id:40, name:"Santander"},
    {id:44, name:"Filipinas"},
    {id:59, name:"Madagascar"},
];

for (let i = 0; i < placeToTravel.length; i++) {
    if (placeToTravel[i].id === 11 || placeToTravel[i].id === 40){
        placeToTravel.splice(i, 1); i--;
    }
}

console.log("Destinos:", placeToTravel);