import { useEffect, useState } from "react";
import { useParams } from "react-router"
import { product_api_url as url } from "../utils/constants";
import { addProduct } from "../utils/cartSlice";
import { useDispatch } from "react-redux";
import "./ProductDetail.css";

export default function ProductDetail(){

    const [product, setProduct] = useState(null);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);
    const { id } = useParams();
    const dispatch = useDispatch();
    
    useEffect(()=>{
        const fetchProductDetail = async () => {
            try{
                const response = await fetch(`${url}/${id}`);
                const result = await response.json();
                console.log(result);
                setProduct(result); // Fetched data stored in component's state
            }catch(err){
                setError(err.message);
            }finally{
                setLoading(false);
            }
        }
        fetchProductDetail();
    },[id]);

    if(loading) return <p>Loading.....</p>;
    if(error) return <p>Error...{error}</p>;

    return(
            <div className="product-detail">
                <img src={product.images} alt={product.title} />
                <div className="product-detail-content">
                    <h2>{product.title}</h2>
                    <p>{product.description}</p>
                    <h4>₹ {(product.price * 10).toFixed(1)}</h4>
                    <button onClick={() => dispatch(addProduct(product))}>Add to Cart</button>
                </div>
            </div>
    )
}