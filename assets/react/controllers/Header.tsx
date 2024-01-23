import { ShoppingCart, StoreMallDirectory } from "@mui/icons-material";
import { AppBar, Toolbar, Grid, IconButton, Badge, ListItem } from "@mui/material";
import { visit } from "../../utils";
import React from "react";

export default function Header({shoppingCart}) {
    const showHome = () : void => {
        visit('/');
    }

    const showShoppingCart = () : void => {
        visit('/shopping-cart');
    }

    const calculateTotalQuantity = () => {
        return shoppingCart?.items?.map((item) => item.quantity).reduce((a,b) => a+b,0);
    }
    return (
        <>
            <AppBar position="static">
                    <Toolbar>
                        <Grid container justifyContent="space-between" alignItems="center" style ={{ width :'100%'}}>
                            <Grid item>
                                <IconButton color="inherit" onClick={showHome}>
                                    <StoreMallDirectory />
                                </IconButton>    
                            </Grid>
                            <Grid item>
                            <IconButton color="inherit" onClick={showShoppingCart}>
                                    <Badge badgeContent={calculateTotalQuantity()} color="secondary">
                                        <ShoppingCart />
                                    </Badge>           
                            </IconButton>
                            </Grid>        
                        </Grid>
                    </Toolbar>
            </AppBar>
        </>
    )
}