const imgPokemon = document.querySelector('.random-image');

const ObtPokemonAlt = async () => {
    try {
        const IdAlt = Math.floor(Math.random() * 151) + 1;
        
        const resp = await fetch(`https://pokeapi.co/api/v2/pokemon/${IdAlt}`);
        
        const DatosPokemon = await resp.json();
        
        const urlimg = DatosPokemon.sprites.other['official-artwork'].front_default;
        
        imgPokemon.src = urlimg;
        imgPokemon.alt =DatosPokemon.name;
        imgPokemon.style.border = "5px solid #f00";
        imgPokemon.style.borderRadius = "10px";
        imgPokemon.style.boxShadow = "0px 10px 20px rgba(0,0,0,0.5)";
        imgPokemon.style.height = "400px"

        console.log(`¡Tu Pokemon es ${DatosPokemon.name.toUpperCase()}!`);
    } catch (error) {
        console.error("No has capturado ningún Pokemon:", error);
    }
}

ObtPokemonAlt();