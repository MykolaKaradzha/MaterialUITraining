import React from 'react';
import {AppBar, IconButton, Toolbar, Typography} from "@mui/material";
import {ShoppingBasket} from "@mui/icons-material";

export const Header = () => {
    return (
    <AppBar position={'static'}>
        <Toolbar>
            <Typography variant={'h6'}
                        component={'span'}
                        sx={{flexGrow: 1}}
            >
                MUI Shop
            </Typography>
            <IconButton color={'inherit'}>
                <ShoppingBasket/>
            </IconButton>
        </Toolbar>

    </AppBar>
    );
};

