import useProducts from "../utils/useProducts"
import { product_api_url as url } from "../utils/constants"
import ProductItem from "./ProductItem";
import { Link } from "react-router-dom";
import "./ProductList.css"

export default function ProductList(){

    const {finalObject, loading, error } = useProducts(url);

    const { products } = finalObject;
    
    return(
        <div className="product-list">
            {loading && <p> Loading....</p>}
            {error && <p>Error: {error}</p>}
            {products && products.map(
                product => (
                    <Link key={product.id} to={`/product/${product.id}`}>
                        <ProductItem  product = {product} />
                    </Link>
                )
            )}
        </div>
    );
}