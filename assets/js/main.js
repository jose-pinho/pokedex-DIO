const offset = 0;
const limit = 10;
const url = `https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=${limit}`;

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

fetch(url)
    .then((response )=> response.json())
    //Acessei o objeto "results" dentro do obj JSON
    .then((jsonBody)=> jsonBody.results)
    //Quando minha function só tem uma linha no corpo eu não preciso escreve-lo
    //Retorna a promisse do then anterior
    .then((pokemons) => {
        for(let i = 0; i < pokemons.length; i++){
            const pokemon = pokemons[i];
           pokemonList.innerHTML += convertPokemonToLi(pokemon);
        
            
        }
        
    })
        .catch((erro) => console.error(erro))
    