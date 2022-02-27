import React, { useEffect, useState } from "react";
import { fetchAmountOfPokemons } from "./FetchAmountOfPokemons";
import RandomlySelectedPokemons from "./RandomlySelectedPokemons";
import TopAppBar from "./TopAppBar";
// gets all pokemons (name and url of the pokemon), based on the amount of pokemons
export default function FetchPokemonData() {
    const [amountOfPokemons, setAmountOfPokemons] = useState(0);
    const [allPokemons, setAllPokemons] = useState([]);

    useEffect(() => {
        fetchAllPokemons();
    }, [])
    const fetchAllPokemons = async () => {
        let amount = await fetchAmountOfPokemons();
        setAmountOfPokemons(amount);
        try {
            const response = await fetch(`https://pokeapi.co/api/v2/pokemon?offset=0&limit=${amount}`);
            const json = await response.json();
            setAllPokemons(json.results);
        } catch (error) {
            alert('Could not find any Pokémons.');
        }
    }
    return (
        <div>
            <TopAppBar />
            <RandomlySelectedPokemons allPokemons={allPokemons} amountOfPokemons={amountOfPokemons} />
        </div>
    );
}
