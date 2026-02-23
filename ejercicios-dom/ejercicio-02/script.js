const emptyDiv = document.createElement('div');
document.body.appendChild(emptyDiv);

const divConP = document.createElement('div');
const pParaDiv = document.createElement('p');
pParaDiv.textContent = 'Este es el párrafo dentro del div';
divConP.appendChild(pParaDiv);
document.body.appendChild(divConP);

const divSeisP = document.createElement('div');
for (let i = 0; i < 6; i++) {
    const pBucle = document.createElement('p');
    pBucle.textContent = `Párrafo nº ${i + 1} del bucle`;
    divSeisP.appendChild(pBucle);
}
document.body.appendChild(divSeisP);

const pDinamico = document.createElement('p');
pDinamico.textContent = `Soy dinámico!`;
document.body.appendChild(pDinamico);

const h2 = document.querySelector('h2.fn-insert-here');
h2.textContent = 'Wubba Lubba dub dub';

const apps = ['Facebook', 'Netflix', 'Instagram', 'Snapchat', 'Twitter'];
const ul = document.createElement('ul');

for (const app of apps) {
    const li = document.createElement('li');
    li.textContent = app;
    ul.appendChild(li);
}
document.body.appendChild(ul);

const elementRemove = document.querySelectorAll('.fn-remove-me');
for( const el of elementRemove) {
    el.remove();
}

const todosLosDivs = document.querySelectorAll('div');
const pEnMedio = document.createElement('p');
pEnMedio.textContent = 'Voy en medio!';

document.body.insertBefore(pEnMedio, todosLosDivs[1]);

const divsInsertHere = document.querySelectorAll('div.fn-insert-here');

for (const div of divsInsertHere){
    const pInterno = document.createElement('p');
    pInterno.textContent = 'Voy dentro!';
    div.appendChild(pInterno);
}