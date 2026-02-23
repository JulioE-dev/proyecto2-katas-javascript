const btn = document.querySelector('#btnToClick');
btn.addEventListener('click', (event) => {
    console.log('Información del evento click:', event);
});

const inputFocus= document.querySelector('.focus');
inputFocus.addEventListener('focus', (event) => {
    console.log('Valor del input:', event.target.value);
});

const inputValue = document.querySelector('.value');
inputValue.addEventListener('input', (event) => {
    console.log('Valor actual del input:', event.target.value);
});