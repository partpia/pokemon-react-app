import React from "react";
import AppBar from '@mui/material/AppBar';
import { Box, Toolbar, Typography } from '@mui/material';

export default function TopAppBar(props) {
    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position='static'>
                <Toolbar>
                    <Typography
                        variant='h5'
                        noWrap
                        component="div"
                        sx={{ flexGrow: 1, display: 'inline', textAlign: 'right' }}>
                        Pokémons from
                    </Typography>
                    <Typography sx={{ flexGrow: 1, display: 'inline', textAlign: 'left' }}>
                        <a href="./">
                            <img src="https://raw.githubusercontent.com/PokeAPI/media/master/logo/pokeapi_256.png" alt="PokeApi" />
                        </a>
                    </Typography>
                </Toolbar>
            </AppBar>
        </Box >
    );
}
