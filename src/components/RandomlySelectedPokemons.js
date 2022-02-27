import React, { useEffect, useState } from 'react';
import Box from '@mui/material/Box';
import { getRandomNumbers } from './GetRandomNumbers';
import { fetchPokemon } from './FetchOnePokemon';
import PokemonList from './PokemonList';
import SearchPokemons from "./SearchPokemons";
// gets 20 ramdom pokemons, based on random numbers
export default function GetRandomlySelectedPokemons(props) {
    const [pokemons, setPokemons] = useState([]);

    useEffect(() => {
        getRandomPokemons();
    }, [props.allPokemons])
    const getRandomPokemons = async () => {
        if (props.allPokemons.length !== 0) {
            let randomNumbers = getRandomNumbers(props.amountOfPokemons);
            let tempListOfPokemons = [];

            for (const no of randomNumbers) {
                const url = props.allPokemons[no].url;
                let pokemon = await fetchPokemon(url);
                tempListOfPokemons.push(pokemon);
            }
            setPokemons(tempListOfPokemons);
        }
    }
    return (
        <div>
            <SearchPokemons allPokemons={props.allPokemons} setPokemons={setPokemons} getRandomPokemons={getRandomPokemons} />
            <Box sx={{ flexGrow: 1 }} style={{ marginTop: 16, backgroundColor: '#BBA78C', height: '850px' }}>
                <PokemonList randomPokemons={pokemons} getRandomPokemons={getRandomPokemons} />
            </Box>
        </div>
    );
}
