
// fetch(url)
// Converte o responsebody de ReadableStream para json
//     .then(function(response){
//         return response.json()
//     })
//     //Faz um console do then de cima, trazendo um Obj Json
//     .then(function(jsonBody){
//         console.log(jsonBody);
//     })
//     .catch(function(erro){
//         console.error(erro)
//     })
//     .finally(function(){
//         console.log("Requisição concluída")
//     });
// transformando as funções acima em arrow function

function convertPokemonToLi(pokemon){
    return`
        <li class="pokemon">
            <span class="number">#001</span>
            <span class="name">${pokemon.name}</span>
            <div class="detail">
                <ol class="types">
                    <li class="type">Grass</li>
                    <li class="type">Poison</li>
                </ol>
            <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/1.svg" alt="${pokemon.name}"/>
            </div>    
        </li>
    `
}

const pokemonList = document.getElementById('pokemonList');

pokeAPI.getPokemons().then((pokemons = []) => {
    const newHtml = pokemons.map(convertPokemonToLi).join('');
    pokemonList.innerHTML = newHtml;
});    