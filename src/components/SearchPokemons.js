import React from "react";
import SearchIcon from '@mui/icons-material/Search';
import { Search, SearchIconWrapper, StyledInputBase } from "./MUISearchComponents";
// searching for pokemons, by name
export default function SearchPokemons(props) {
    const handleChange = (e) => {
        const keyword = e.target.value;
        const tempFilteredPokemons = props.allPokemons.filter(
            pokemon => {
                return (
                    pokemon.name.toLowerCase().includes(keyword.toLocaleLowerCase())
                );
            }
        );
        if (keyword === "") {
            props.getRandomPokemons();
        } else {
            props.setPokemons(tempFilteredPokemons);
        }
    }
    return (
        <div style={{ backgroundColor: '#DF362D', borderTop: '3px white solid', borderBottom: '3px white solid' }}>
            <Search>
                <SearchIconWrapper>
                    <SearchIcon />
                </SearchIconWrapper>
                <StyledInputBase
                    placeholder="Search Pokémons...Click on Pokémon or logo to open Pokémon card!"
                    inputProps={{ 'aria-label': 'search' }}
                    onChange={(e) => handleChange(e)}
                />
            </Search>
        </div>
    );
}