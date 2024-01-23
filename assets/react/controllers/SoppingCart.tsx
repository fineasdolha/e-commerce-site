import React from "react";
import useShoppingCart from "../hooks/useShoppingCart";
import Header from "./Header";
import { Container, Box, Grid, Typography, Button } from "@mui/material";

export default function ShoppingCart(){
    const {removeItemFromShoppingCart, shoppingCart} = useShoppingCart();
    
    return (
        
        <>
            <Header shoppingCart = {shoppingCart} />
            <Container>
                <Box marginTop={5}>
                    <Grid container justifyContent={"space-between"} alignItems={"center"}>
                        <Grid item>
                            <Typography variant="h6">Mon panier</Typography>
                        </Grid>
                        <Grid item>
                            <Button variant="contained">Proceder au paiement</Button>
                        </Grid>
                    </Grid>
                </Box>
            </Container>
        </>
    )
}