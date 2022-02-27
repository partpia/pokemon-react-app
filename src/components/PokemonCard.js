import React from "react";
import {
    Card,
    CardActions,
    CardContent,
    CardMedia,
    Dialog,
    Grid,
    IconButton,
    Typography
} from "@mui/material";
import CloseIcon from '@mui/icons-material/Close';
// returns pokemon card with details of the specific pokemon (name, hp, img, id/no, length, weight)
export default function PokemonCard(props) {
    return (
        <Dialog
            open={props.open}
            onClose={props.handleClose}
            aria-labelledby="dialog-pokemon"
            aria-describedby="dialog-pokemon-description"
        >
            <Card sx={{ maxWidth: 345 }} id="dialog-pokemon-card">
                <CardContent>
                    <Grid container justifyContent="space-between">
                        <Typography inline="true" variant="h6" component="div" id="dialog-pokemon-name">
                            {props.pokemon.name}
                        </Typography>
                        <Typography inline="true" variant="body1" align="right" component="div" id="dialog-pokemon-hp">
                            {props.pokemon.hp} HP
                        </Typography>
                    </Grid>
                </CardContent>
                {props.pokemon.imgUrl ? (
                    <CardMedia
                        id="dialog-pokemon-card-img"
                        component="img"
                        alt="pokemon"
                        height="260"
                        src={props.pokemon.imgUrl} />)
                    : (
                        <CardMedia
                            id="dialog-pokemon-card-img-not-found"
                            component="img"
                            alt="pokemon"
                            height="260"
                            max-width="200"
                            src="https://raw.githubusercontent.com/PokeAPI/media/master/logo/pokeapi_256.png" />)
                }
                <CardContent>
                    <Typography gutterBottom variant="body2" component="div" display="inline">
                        NO.{props.pokemon.id}&nbsp;&nbsp;
                    </Typography>
                    <Typography variant="body2" color="text.secondary" display="inline">
                        Length: {props.pokemon.height}&nbsp;
                    </Typography>
                    <Typography variant="body2" color="text.secondary" display="inline">
                        Weight: {props.pokemon.weight}&nbsp;
                    </Typography>
                </CardContent>
                <CardActions id="dialog-pokemon-close">
                    <IconButton onClick={props.handleClose} edge="end"><CloseIcon color="action" sx={{ fontSize: 20 }} /></IconButton>
                </CardActions>
            </Card>
        </Dialog >
    );
}