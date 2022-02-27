// returns details of one pokemon
export const fetchPokemon = async (url) => {
    try {
        const response = await fetch(url);
        const json = await response.json();
        const pokemon = {
            id: json.id,
            name: json.forms[0].name,
            hp: json.stats[0].base_stat,
            imgUrl: json.sprites.other['official-artwork'].front_default,
            height: json.height,
            weight: json.weight
        }
        return pokemon;
    } catch (error) {
        alert('Could not find Pokémon.');
    }
}
