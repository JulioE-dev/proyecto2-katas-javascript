const countries = ['Japón', 'Nicaragua', 'Suiza', 'Australia', 'Venezuela'];
const ulconuntries = document.createElement('ul');

for (const country of countries) {
    const li = document.createElement('li');
    li.textContent = country;
    ulconuntries.appendChild(li);
}
document.body.appendChild(ulconuntries);

const toRemove = document.querySelector('.fn-remove-me');
if (toRemove){
    toRemove.remove();
}

const cars = ['Mazda6', 'Ford Fiesta', 'Audi A4', 'toyota corola'];
const printHereDiv = document.querySelector('[data-function="printHere"]');
const ulCars = document.createElement('ul');

for (const car of cars) {
    const li = document.createElement('li');
    li.textContent = car;
    ulCars.appendChild(li);
}
printHereDiv.appendChild(ulCars);

const countries2 = [
	{title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=1'},
	{title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=2'},
	{title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=3'},
	{title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=4'},
	{title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=5'}
];
for (const item of countries2) {
    const div = document.createElement('div');
    div.className = 'country-item';

    const h4 = document.createElement('h4');
    h4.textContent = item.title;

    const img = document.createElement('img');
    img.src = item.imgUrl;

    const deleteBtn = document.createElement('button');
    deleteBtn.textContent = 'Eliminar este elemento';
    deleteBtn.addEventListener('click', () => {
        div.remove();
    });
    div.appendChild(h4);
    div.appendChild(img);
    div.appendChild(deleteBtn);
    document.body.appendChild(div);
}

const deleteLastBtn = document.createElement('button');
deleteLastBtn.textContent = 'Eliminar el último';

deleteLastBtn.addEventListener('click', () => {
    const allCountryDivs = document. querySelectorAll('.country-item');
    if (allCountryDivs.length > 0) {
        allCountryDivs[allCountryDivs.length - 1].remove();
    }
});

document.body.appendChild(deleteLastBtn);
