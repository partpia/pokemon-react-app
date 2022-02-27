import React, { useEffect, useState } from "react";
import { Grid, Typography } from "@mui/material";
import { fetchPokemon } from "./FetchOnePokemon";
import PokemonCard from "./PokemonCard";
// shows either randomly selected pokemons or search result (pokemons searched by name)
export default function PokemonDetails(props) {
    const [open, setOpen] = useState(false);
    const [pokemon, setPokemon] = useState({});
    const [isSearched, setIsSearched] = useState(false);

    useEffect(() => {
        handleOpen();
    }, [pokemon])
    // opens pokemon card
    const handleOpen = async (item) => {
        if (Object.keys(pokemon).length !== 0) {
            setOpen(true);
        }
    }
    // closes pokemon card
    const handleClose = () => {
        if (!isSearched) {
            props.getRandomPokemons();
        }
        setOpen(false);
        setPokemon({});
        setIsSearched(false);
    }
    /*  checks if selected card is one of the random pokemons --> details for the card already exists,
        whereas filtered/searched pokemon needs more details for the card --> fetch pokemon */
    const getCard = async (item) => {
        if (item.hasOwnProperty('id')) {
            setPokemon(item);
        } else {
            const tempPokemon = await fetchPokemon(item.url);
            setPokemon(tempPokemon);
            setIsSearched(true);
        }
    }
    return (
        <div>
            <Grid container spacing={{ xs: 1, md: 2 }} columns={{ xs: 4, sm: 8, md: 12 }}>
                {props.randomPokemons.map((item, index) => (
                    <Grid item xs={1} sm={2} md={2} key={index}
                        onClick={() => getCard(item)}>
                        {item.imgUrl ?
                            <img src={item.imgUrl} alt="pokemon" className="pokemon-list" />
                            :
                            <img src="https://raw.githubusercontent.com/PokeAPI/media/master/logo/pokeapi_256.png" alt="pokemon" className="pokemon-list" />}
                        <Typography id="pokemon-title">
                            {item.name}
                        </Typography>
                    </Grid>
                ))}
            </Grid>
            <PokemonCard handleClose={handleClose} handleOpen={handleOpen} open={open} pokemon={pokemon} />
        </div>
    );
}
