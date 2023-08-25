const pokeAPI = {}

function convertPokeApiDetailToPokemon(pokeDetail){
    const pokemon = new Pokemon()
    pokemon.number = pokeDetail.id;
    pokemon.name = pokeDetail.name;
    const types = pokeDetail.types.map((typeSlot) => typeSlot.type.name);
    const [type] = types
    pokemon.types = types 
    pokemon.type = type
    pokemon.photo = pokeDetail.sprites.other.dream_world.front_default

    return pokemon
}
//Fazer uma nova requisião para a propriedade "url" para vir os detalhes do pokemon
pokeAPI.getPokemonDetail = (pokemon) => {
    return fetch(pokemon.url)
    .then((response) => response.json())
    .then(convertPokeApiDetailToPokemon)

}
pokeAPI.getPokemons =  ( offset = 0, limit = 6) => {
    const url = `https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=${limit}`;
    
    return fetch(url)
    .then((response )=> response.json())
    //Acessei o objeto "results" dentro do obj JSON
    .then((jsonBody)=> jsonBody.results)
    //Quando minha function só tem uma linha no corpo eu não preciso escreve-lo
    //Retorna a promisse do then anterior
    ///agora eu quero que para cada retorno(pokemon) tenha uma nova promisse que traga a propriedade "url"
    //conforme função armazenada no novo metodo acima.
    .then((pokemons) => pokemons.map(pokeAPI.getPokemonDetail))
    .then((detailRequests) => Promise.all(detailRequests))
    .then((pokemonDetails) => pokemonDetails)
}

