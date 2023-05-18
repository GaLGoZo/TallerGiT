const ApiPokemon = "https://pokeapi.co/api/v2/pokemon/";
const urlImages = "https://unpkg.com/pokeapi-sprites@2.0.2/sprites/pokemon/other/dream-world/";
window.onload = async function () {
    console.log(" La base de datos de los pokemon esta por cargar");
    const data = await fetch(ApiPokemon);

    const json = await data.json();

    const pokemones = json.results;
    const pokemon_list_box = document.querySelector("#pokemon");

    pokemones.forEach(function(item) {
        const pokemon_card = document.createElement("div");
        pokemon_card.classList.add("pokemon-card");
        //si separas el url del item split no cargan las iamgenes porque se desconcatena
        pokemon_card.innerHTML = `<div class="pokemon-image">
        
                                    <img src="${urlImages}${item.url.split("/")[6]}.svg"/>
                                    </div>
                                    <div class="pokemon-info">
                                    <h4> ${item.name} </h4>
                                    </div> 
                                    `;

        pokemon_list_box.appendChild(pokemon_card);
    });
}