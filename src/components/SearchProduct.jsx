import { useDispatch } from "react-redux";
import { setSearchWord } from "../utils/cartSlice";
import "./SearchProduct.css"

export default function SearchProduct(){
    
    const dispatch = useDispatch();

    function handleSearchChange(event){
        dispatch(setSearchWord(event.target.value));
    }

    return(
        <>
            <div className="search-input">
                <input type="text" placeholder="Type the product here."
                onChange={handleSearchChange}/>Search as you type 🔼
            </div>
        </>
    )
}