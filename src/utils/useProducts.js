import { useState, useEffect} from "react"

// CUSTOM HOOKS useProducts()
const useProducts = (url) =>{

    const [finalObject, setFinalObject] = useState([]);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(()=>{ // To prevent calling Custom Hook and fetch again & again, we provide a dependency array
        const fetchProducts = async () => {
            try{
                const response = await fetch(url);
                const result = await response.json();
                setFinalObject(result);
            }
            catch(err){
                setError(err.message);
            }
            finally{
                setLoading(false);
            }
        };

        fetchProducts();
    },[url]);

    return { finalObject, loading, error };
}

export default useProducts