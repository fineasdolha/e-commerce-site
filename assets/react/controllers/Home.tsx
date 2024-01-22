import React from "react";
import Header from "./Header";
import ProductGrid from "./ProductGrid";
import Footer from "./Footer";
import useShoppingCart from "../hooks/useShoppingCart";

export default function Home() {
    const {addItemToShoppingCart, removeItemFromShoppingCart, shoppingCart, loading} = useShoppingCart();

    return (
        <>
            <Header shoppingCart={shoppingCart}/>
            <ProductGrid addItemToShoppingCart={addItemToShoppingCart} shoppingCart={shoppingCart} />
            <Footer/>
        </>
    )
}