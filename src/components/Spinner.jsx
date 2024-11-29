import { ClipLoader } from "react-spinners"
import "./Spinner.css"

export default function Spinner(){
    
    return(
        <div className="spinner">
            <ClipLoader color="#007bff" loading={true} size={50}/>
        </div>
    )
}