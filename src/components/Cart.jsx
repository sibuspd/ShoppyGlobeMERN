import { useSelector, useDispatch } from "react-redux"
import { removeProduct, modifyQuantity} from "../utils/cartSlice"
import CartItem from "./CartItem";

export default function Cart(){
    const shopCart = useSelector(state => state.shopCart); // Subscribes to the store's cartSlice state
    const dispatch = useDispatch(); // For sending Actions

    function handleRemoveFromCart(product){
        dispatch(removeProduct(product)); // Sends 'Product' as payload in Action 'removeProduct'
    }

    function handleQuantityChange( product, quantity ){
        dispatch(modifyQuantity({product, quantity})); // Sending both values wrapped in Object as payload
    }


    return(
        <div className="cart">
            <h1>Shopping Cart</h1>
            {shopCart.length === 0?
            (<p>You Cart is empty.</p>):
            (shopCart.map(product => 
                <CartItem key={product.id} product={product} // Sending products as props 
                onRemove ={()=> handleRemoveFromCart(product)} // Reference of event handler here sent to 'Cart'
                onQuantityChange = {(quantity)=> handleQuantityChange(product, quantity)}/>
            ))
            }
        </div>
    );
}