import React from "react";
import { Box, Button, IconButton, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from "@mui/material";
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import { ShoppingCartItem } from "../hooks/useShoppingCart";
import { formatPrice } from "../../utils";

export default function ShoppingCartTable ({removeItemFromShoppingCart, shoppingCart}){
    return (
        <TableContainer>
            <Table>
                <TableHead>
                    <TableRow>
                        <TableCell>Produit</TableCell>
                        <TableCell>Quantité</TableCell>
                        <TableCell>Prix</TableCell>
                        <TableCell></TableCell>
                    </TableRow>
                </TableHead>
                    <TableBody>
                     {shoppingCart?.items?.map((item: ShoppingCartItem) => (
                     <TableRow key={item.product.id}>
                        <TableCell>
                            <Box display="flex" flexDirection="row" alignItems="center">
                                <img
                                    style={{ marginRight: '10px' }}
                                    width={100}
                                    height={100}
                                    src={`/images/products/${item.product.imageName}`}
                                    alt={item.product.name}
                                />
                                <span>{item.product.name}</span>
                            </Box>  
                        </TableCell>
                        <TableCell>{item.quantity.toString()}</TableCell>
                        <TableCell>{formatPrice(item.product.price)}</TableCell>
                        <TableCell>
                            <IconButton onClick={() => removeItemFromShoppingCart(item.product)}>
                                <DeleteForeverIcon></DeleteForeverIcon>
                            </IconButton>
                        </TableCell>
                     </TableRow>
                     ))}   
                    </TableBody>
            </Table>
        </TableContainer>
    )
}