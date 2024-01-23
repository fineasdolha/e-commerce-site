import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { Product } from "./useProducts";



export interface ShoppingCart {
    items: Product[];
}

export interface ShoppingCartItem {
    product: Product;
    quantity: Number;
}

export default function useProducts() {
    const [shoppingCart, setShoppingCart] = useState([]);
    const[loading, setLoading] = useState(false);    
    
    const addItemToShoppingCart = (product: Product) => {
        setLoading(true);
        fetch(`/session/shopping-cart/${product.id}`, {
            method: 'POST'
        })
            .then(response  => response.json())
            .then(json => setShoppingCart(json))
            .finally(() => {
                setLoading(false);
    });
    }
    
    const removeItemFromShoppingCart = (product: Product) => {
        setLoading(true);
        fetch(`/session/shopping-cart/${product.id}`, {
            method: 'DELETE'
        })
            .then(response  => response.json())
            .then(json => setShoppingCart(json))
            .finally(() => {
                setLoading(false);
    });

    }
    
    const emptyShoppingCart = () => {
        setLoading(true);
        fetch('/session/empty-shopping-cart/', {
            method: 'DELETE'
        })
            .then(response  => response.json())
            .then(json => setShoppingCart(json))
            .finally(() => {
                setLoading(false);
    });
    }
    
    useEffect( () : void => {
        setLoading(true);
        fetch('/session/shopping-cart')
            .then(response  => response.json())
            .then(json => setShoppingCart(json))
            .finally(() => {
                setLoading(false);
            })
    }, []);

    return {
        addItemToShoppingCart,
        removeItemFromShoppingCart,
        emptyShoppingCart,
        shoppingCart,
        loading
    };

}