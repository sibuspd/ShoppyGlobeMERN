import { useRouteError } from "react-router"
import { Link } from "react-router";
import "./NotFound.css"

export default function NotFound(){

    const error = useRouteError(); // useRouteError hook for capturing Error type

    return(
        <div className="not-found">
            <div className="content">
                <h1>{error.status || "Error"}</h1>
                <p>Oops! The page you're looking for doesn't exist.</p>
                {error.statusText && <p className="error-message">{error.statusText}</p>}
                {error.message && <p className="error-message">{error.message}</p>}
                <Link to="/" className="home-link">Go Back Home</Link>
            </div>
        </div>
    )
}