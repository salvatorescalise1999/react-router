import ProductCard from "./ProductCard";

import axios from "axios"
import { useState, useEffect } from "react"

const endpoint = "https://fakestoreapi.com/products";

function ProductList() {

    // creiamo var di stato per lista Prodotti
    const [products, setProducts] = useState([]);

    // funzione che al click fa chiamata Ajax verso endpoint API
    function fetchProducts() {
        axios.get(endpoint)
            .then((res) => {
                console.log("RISPOSTA API:", res.data);
                setProducts(res.data);
            })
            .catch(err => console.error(err))
    }

    useEffect(fetchProducts, []);


    return (
        <>
            <div className="product-container">
                {products.map(product => (
                    <ProductCard product={product} key={product.id} />
                ))}
            </div>
        </>
    )
}


export default ProductList
