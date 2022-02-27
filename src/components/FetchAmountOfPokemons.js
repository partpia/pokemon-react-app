// returns the amount of pokemons
export const fetchAmountOfPokemons = async () => {
    try {
        const response = await fetch('https://pokeapi.co/api/v2/pokemon/');
        const json = await response.json();
        const amountOfPokemons = json.count;
        return amountOfPokemons;
    } catch (error) {
        alert('Could not find any Pokémons.');
    }
}
