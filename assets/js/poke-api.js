const pokeAPI = {}

pokeAPI.getPokemons =  ( offset = 0, limit = 10) => {
    const url = `https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=${limit}`;
    
    return fetch(url)
    .then((response )=> response.json())
    //Acessei o objeto "results" dentro do obj JSON
    .then((jsonBody)=> jsonBody.results)
    //Quando minha function só tem uma linha no corpo eu não preciso escreve-lo
    //Retorna a promisse do then anterior
    .catch ((error) => console.error(error))
}