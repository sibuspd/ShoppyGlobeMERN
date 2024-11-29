import useProducts from "../utils/useProducts"
import { product_api_url as url } from "../utils/constants"
import ProductItem from "./ProductItem";
import { Link } from "react-router-dom";
import "./ProductList.css"
import { useSelector } from "react-redux";
import SearchProduct from "./SearchProduct"

export default function ProductList(){

    const {finalObject, loading, error } = useProducts(url);

    const { products } = finalObject; // Product list received from Cross-origin Json API

    const searchWord  = useSelector( state => state.shopCart.searchWord); // Take the "searched Word"

    function handleLinkClick(event){ // Anti-Event Propagation measure taken
        if(event.target.tagName === "BUTTON" && event.target.innerText === "Add to Cart")
            event.preventDefault();
    }

    // Filtering the Productlist according to Search text provided
    const filteredProducts = products?products.filter( p => // The ProductList will be actually drawn from this
        p.title.toLowerCase().includes(searchWord.toLowerCase())):[]; // Matches search input word from store with product list 
        
    return(
        <div className="product-list">
            <SearchProduct/>
            {loading && <p> Loading....</p>}
            {error && <p>Error: {error}</p>}
            {filteredProducts && filteredProducts.map(
                product => (
                    <Link key={product.id} to={`/product/${product.id}`} onClick={handleLinkClick}>
                        <ProductItem  product = {product} />
                    </Link>
                )
            )}
        </div>
    );
}