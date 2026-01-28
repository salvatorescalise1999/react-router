
function ProductCard({ product }) {

    if (!product) return null; // se non c’è, esci


    return (
        <div className="card">
            <h2 className="product-title">{product.title}</h2>
            <img src={product.image} />
             <div className="product-category">
                <p>categoria:</p>
                <p>{product.category}</p>
            </div>
            <p className="product-description">{product.descrisption}</p>
            <div className="product-price">
                <p>prezzo:</p>
                <p>{product.price}</p>
            </div>

        </div>
        

    )
}

export default ProductCard

