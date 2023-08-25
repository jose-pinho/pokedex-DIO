
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

const pokemonList = document.getElementById('pokemonList');
const loadMoreButton = document.getElementById('loadMoreButton');
const maxRecords = 1281;
const limit = 6;
let offset = 0;


function loadPokemonItens(offset, limit){
    pokeAPI.getPokemons(offset, limit ).then((pokemons = []) => {
        const newHtml = pokemons.map((pokemon) =>`
                <li class="pokemon ${pokemon.type}" >
                    <span class="number">#${pokemon.number}</span>
                    <span class="name">${pokemon.name}</span>
                    <div class="detail">
                        <ol class="types">
                            ${pokemon.types.map((type)=> `<li class="type ${type}">${type}</li>`).join("")}
                        </ol>
                    <img src="${pokemon.photo}"
                    alt="${pokemon.name}"/>
                    </div>    
                </li>
            `).join('');
        pokemonList.innerHTML += newHtml;
    });    
}

loadPokemonItens(offset,limit);
loadMoreButton.addEventListener('click', () => {
    
    offset += limit
    
    const qtdRecordNextPage = offset + limit
    if(qtdRecordNextPage>= maxRecords){
    const newLimit = maxRecords - offset
        loadPokemonItens(offset, newLimit)

        loadMoreButton.parentElement.removeChild(loadMoreButton)

    }else{
        loadPokemonItens(offset, limit);
    }

})
