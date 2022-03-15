import React from 'react';
import {AppBar, IconButton, Toolbar, Typography} from "@mui/material";
import {ShoppingBasket} from "@mui/icons-material";

export const Header = () => {
    return (
    <AppBar>
        <Toolbar>
            <Typography>
                MUI Shop
            </Typography>
            <IconButton>
                <ShoppingBasket/>
            </IconButton>
        </Toolbar>

    </AppBar>
    );
};

