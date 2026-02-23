const Selpersonajes = document.querySelector('#character-list');
const imgPersonaje = document.querySelector('.character-image');

const obtenerPersonaje = async () => {
    try{
        const respuesta = await fetch('https://thronesapi.com/api/v2/Characters');
        const DatosPersonaje = await respuesta.json();

        rellenoSelector(DatosPersonaje);
        UsuarioElige(DatosPersonaje);

        imgPersonaje.src = DatosPersonaje[0].imageUrl;
        imgPersonaje.style.height = "400px";
        imgPersonaje.style.borderRadius = "10px";
        imgPersonaje.style.border = "5px solid #444";
        imgPersonaje.style.boxShadow = "0px 10px 20px rgba(0,0,0,0.5)";

    } catch (error) {
        console.error("Fallo al traer el personaje:", error);
    }
};

const rellenoSelector = (lista) => {
    lista.forEach(personaje => {
        const opcion = document.createElement('option');
        opcion.value = personaje.imageUrl;
        opcion.textContent = personaje.fullName;
        Selpersonajes.appendChild(opcion);
    });
}

const UsuarioElige = () => {
    Selpersonajes.addEventListener('change', (evento) => {
        const urlimgsel = evento.target.value;
        imgPersonaje.src = urlimgsel;
        imgPersonaje.alt = "Imagen Personaje";
        imgPersonaje.style.height = "400px";
        imgPersonaje.style.borderRadius = "10px";
        imgPersonaje.style.border = "5px solid #f00";
        imgPersonaje.style.boxShadow = "0px 10px 20px rgba(0,0,0,0.5)";
    });
};

obtenerPersonaje();
