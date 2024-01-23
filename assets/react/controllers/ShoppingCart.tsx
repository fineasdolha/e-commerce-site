import React from "react";
import useShoppingCart from "../hooks/useShoppingCart";
import Header from "./Header";
import { Container, Box, Grid, Typography, Button } from "@mui/material";
import ShoppingCartTable from "./ShoppingCartTable";
import { visit } from "../../utils";

export default function ShoppingCart(){
    const {removeItemFromShoppingCart, shoppingCart} = useShoppingCart();
    
    const createCheckOutSession = () => {
        fetch('/stripe/checkout-session', {
            method: 'POST',
        })
        .then(response =>response.json())
        .then(json => {
            visit(json['url'])
        });
    }

    return (
        
        <>
            <Header shoppingCart = {shoppingCart} />
            <Container>
                <Box marginY={5}>
                    <Grid container justifyContent={"space-between"} alignItems={"center"}>
                        <Grid item>
                            <Typography variant="h6">Mon panier</Typography>
                        </Grid>
                        <Grid item>
                            <Button 
                            variant="contained"
                            onClick={createCheckOutSession}
                            >Proceder au paiement</Button>
                        </Grid>
                    </Grid>
                </Box>
                <ShoppingCartTable 
                    removeItemFromShoppingCart={removeItemFromShoppingCart}
                    shoppingCart={shoppingCart}
                />
            </Container>
        </>
    )
}