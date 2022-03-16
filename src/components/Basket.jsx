import React from 'react';
import {Divider, Drawer, List, ListItem, ListItemIcon, ListItemText, Typography} from "@mui/material";
import {ShoppingBasket} from "@mui/icons-material";
import BasketItem from "./BasketItem";

export const Basket = (props) => {
    const {
        closeCart = Function.prototype,
        cartOpen,
        order = [],
        removeFromOrder,
    } = props;
    return (
        <Drawer
            anchor='right'
            open={cartOpen}
            onClose={closeCart}
        >
            <List>
                <ListItem>
                    <ListItemIcon>
                        <ShoppingBasket/>
                    </ListItemIcon>
                    <ListItemText primary="Shopping basket"/>
                </ListItem>
                <Divider/>
                {!order.length
                    ? <ListItem>Basket is empty</ListItem>
                : ( <>
                        {order.map(item => <BasketItem key={item.name} removeFromOrder={removeFromOrder} {...item}/>)}
                        <Divider/>
                <ListItem>
                    <Typography variant='body1'>
                        Общая Стоимость: {" "}
                        {order.reduce((acc, item) => acc + item.price*item.quantity
                        , 0)} {" "}
                    </Typography>
                </ListItem>
                    </>)}
            </List>
        </Drawer>
    );
};

