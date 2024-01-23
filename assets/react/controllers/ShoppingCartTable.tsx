import React from "react";
import { Button, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from "@mui/material";
import useShoppingCart from "./SoppingCart";

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
                    <TableBody>
                     {shoppingCart?.items.map((item)=>
                     <TableRow key={item.product.id}>
                        <TableCell>{item.product.name}</TableCell>
                        <TableCell>{item.product.quantity}</TableCell>
                        <TableCell>{item.product.price}</TableCell>
                        <TableCell>
                            {/* button */}
                        </TableCell>
                     </TableRow>
                     
                     )}   
                    </TableBody>
                </TableHead>
            </Table>
        </TableContainer>
    )
}