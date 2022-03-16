import React from 'react';
import {AppBar, Badge, IconButton, Toolbar, Typography} from "@mui/material";
import {ShoppingBasket} from "@mui/icons-material";

export const Header = ({cartOpen, orderlen}) => {
    return (
    <AppBar position={'static'}>
        <Toolbar>
            <Typography variant={'h6'}
                        component={'span'}
                        sx={{flexGrow: 1}}
            >
                MUI Shop
            </Typography>
            <IconButton
                color={'inherit'}
                onClick={cartOpen}
            >
                <Badge badgeContent={orderlen} color='secondary'>
                    <ShoppingBasket/>
                </Badge>
            </IconButton>
        </Toolbar>

    </AppBar>
    );
};

