import PropTypes from "prop-types"
import "./CartItem.css"

// DEALS WITH  EACH ITEM DISPLAYED IN THE CART LIST 'CART.JSX'
 const  CartItem = ({ product, onRemove, onQuantityChange}) => {

    function handleQuantityChange(event){
        const quantity = parseInt(event.target.value, 10);
        onQuantityChange(quantity);
    }
    return(
        <div className="cart-item">
            <img src={product.images}/>
            <div>
                <h2>{product.title}</h2>
                <p>Price: ₹ <b>{(product.price * 10).toFixed(1)}</b> each x Quantity <b>{product.minimumOrderQuantity}</b></p>
                <input type="number" value={product.minimumOrderQuantity} 
                onChange={handleQuantityChange} min="1"/>
                <button onClick={onRemove}>Remove</button> 
            </div>             
        </div>     
    )
}

export default CartItem

CartItem.propTypes = {
    product: PropTypes.shape({
        id: PropTypes.number.isRequired,
        title: PropTypes.string.isRequired,
        price: PropTypes.number.isRequired,
        images: PropTypes.string.isRequired,
        minimumOrderQuantity: PropTypes.number.isRequired,
    }).isRequired,
    onRemove: PropTypes.func.isRequired,
    onQuantityChange: PropTypes.func.isRequired
};