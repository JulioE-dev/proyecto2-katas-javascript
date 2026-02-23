const aldeanos = ["Fibrilio", "Narciso", "vacarena", "Tendo", "Nendo"];
console.log(aldeanos[3]);

aldeanos.push("Cervasio");

aldeanos[0] = "Bambina";

aldeanos.reverse();

let posicionNarciso = aldeanos.indexOf("Narciso");
aldeanos.splice(posicionNarciso, 1, "Canela");

console.log(aldeanos[aldeanos.length - 1]);
