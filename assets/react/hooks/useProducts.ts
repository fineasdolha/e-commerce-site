import React from "react";
import { useEffect } from "react";
import { useState } from "react";

export interface Product {
    active:boolean;
    createdAt: Date;
    description: string;
    id: number;
    imageName: string;
    name: string;
    price: number;
}

export default function useProducts() {
    const [products, setProducts] = useState([]);    
    useEffect( () : void => {
        fetch('/api/products')
            .then(response  => response.json())
            .then(json => setProducts(json));
    }, []);

    return products;

}