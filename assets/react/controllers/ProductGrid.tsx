import React from "react";
import { Box, Button, Grid, Paper, Stack, Typography } from "@mui/material";
import useProducts, { Product } from "../hooks/useProducts";
import { formatPrice } from "../../utils";
import { ShoppingCart } from "@mui/icons-material";
export default function ProductGrid({addItemToShoppingCart , shoppingCart}) {
    const products = useProducts();
    const handleProductLabel = (product: Product ) => {
        const productInShoppingCart = shoppingCart?.items?.find(item => item.product.id === product.id);
    return productInShoppingCart ? `Vous en avez déjà ajouté ${productInShoppingCart.quantity } ` : 'Ajouter au panier';
    }

    return (
        <Grid container marginTop={5} justifyContent="space-evenly" alignItems="center">   
                {products?.map((product) => (
                    <Grid item key={product.id} xs={3}>
                        <Box sx = {{ width:300, m:2 }}>
                            <Paper elevation={5} sx ={{ p:2 }}>
                                <Stack direction="column" spacing={2}>
                                <Box
                                    component="img"
                                    sx={{width: '100%', height: 'auto'}}
                                    src={`/images/products/${product.imageName}`}
                                ></Box>
                                <Typography variant="h6" gutterBottom>{product.name}</Typography>
                                <Box sx={{display:'flex', alignItems:'center', justifyContent:'space-between'}}>
                                    <Typography variant="h6" >{formatPrice(product.price)}</Typography>
                                </Box>
                                <Typography variant="h6">{product.description}</Typography>
                                <Button 
                                variant="outlined" 
                                color="primary"
                                endIcon={<ShoppingCart/>}
                                onClick={()=>addItemToShoppingCart(product)}
                                >
                                   {handleProductLabel(product)} 
                                </Button>
                                </Stack>
                            </Paper>    
                        </Box>
                    </Grid>
                ))};

        </Grid>
    )
}