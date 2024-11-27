import useProducts from "../utils/useProducts"
import { product_api_url as url } from "../utils/constants"

export default function ProductList(){

    const {finalObject, loading, error } = useProducts(url);

    const { products } = finalObject;
    
    return(
        <div>
            {loading && <p> Loading....</p>}
            {error && <p>Error: {error}</p>}
            {products && products.map(
                product => (
                    <div key={product.id}>
                        <h2>{product.title}</h2>
                        <p>{product.description}</p>
                    </div>
                )
            )}
        </div>
    );
}