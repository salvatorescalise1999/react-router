import axios from "axios"
import { useParams } from "react-router-dom"
import { useEffect, useState } from "react"


const detailEndpoint = "https://fakestoreapi.com/products";


function ProductDetail() {

    // var di stato per salvare info oggetto prodotto
    const [product, setProduct] = useState({});

    // recupero valore del parametro dinamico grazie a hook useParams
    const { id } = useParams();

    // utilizzo il parametro per la chiamata corretta (sempre passando da hook su primo montaggio)
    useEffect(() => {
        axios.get(`${detailEndpoint}/${id}`)
            .then(res => setProduct(res.data))
            .catch(err => console.error(err))
    }, [])


    return (
        <>
            <h2>ciao qui avrai il dettaglio </h2>

        </>
    )
}

export default ProductDetail
