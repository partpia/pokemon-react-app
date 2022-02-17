import React from "react";
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';

export default function TopAppBar() {

    return (
        <div>
            <AppBar position='static'>
                <Toolbar>
                    <Typography variant='h5'>
                        Pokémons
                    </Typography>
                </Toolbar>
            </AppBar>
        </div>
    );
} 