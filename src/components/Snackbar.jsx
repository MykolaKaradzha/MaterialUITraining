import React from 'react';
import {Alert, IconButton, Snackbar} from "@mui/material";
import {Close} from "@mui/icons-material";

export const Snack = ({open, handleClose = Function.prototype}) => {
    const action = (
        <>
            <IconButton
                size="small"
                aria-label="close"
                color="inherit"
                onClick={handleClose}
            >
                <Close fontSize="small" />
            </IconButton>
        </>
    );
    return (
        <Snackbar
         open={open}
         onClose={handleClose}
         autoHideDuration={3000}
         action={action}
        >
            <Alert severity="success">Item added to the cart</Alert>
        </Snackbar>


    );
};

