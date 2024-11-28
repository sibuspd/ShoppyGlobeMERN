import { useDispatch } from "react-redux"
import { addProduct } from "../utils/cartSlice"
import PropTypes from "prop-types"
import "./ProductItem.css"


export default function ProductItem({ product }){

    const dispatch = useDispatch();
    
    function handleAddToCart(product){ // Event Handler defined for Add to Cart
        dispatch(addProduct(product));
    }

    return(
        <div className="product-card">
            <img src={product.images}/>
            <h2>{product.title}</h2>
            <p>{product.description}</p>
            <h4>₹ {(product.price*10).toFixed(1)}</h4>
            <button onClick={handleAddToCart(product)}>Add to Cart</button>
        </div>
    )
}

ProductItem.propTypes = {
    product: PropTypes.shape({
        id: PropTypes.number.isRequired,
        title: PropTypes.string.isRequired,
        description: PropTypes.string.isRequired,
        price: PropTypes.number.isRequired,
        images: PropTypes.string.isRequired
    }).isRequired
};