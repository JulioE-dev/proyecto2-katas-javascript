const users = [
    { name: "Tony", years: 43 },
    { name: "Peter", years: 18 },
    { name: "Natasha", years: 14 },
    { name: "Bruce", years: 32 },
    { name: "Khamala", years: 16 },
];

for (let user of users) {
    if (user.years < 18) {
    console.log("Usuarios menores de edad:" + user.name);
    }
    else if (user.years >= 18) {
        console.log("Usuarios mayores de edad:" + user.name);
    }
}
