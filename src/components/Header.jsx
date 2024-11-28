import "./Header.css"
import { Link } from "react-router-dom";

export default function Header(){

    return(
            <header>
                <nav className="nav-container">
                    <div className="nav-links">
                        <ul>
                            <li><Link to="/">Home</Link></li>
                            <li><Link to="/about">About</Link></li>
                            <li><Link to="/contact">Contact</Link></li>
                        </ul>
                    </div>
                    <div className="cart"> 
                        <Link to="/cart">Cart Items</Link>
                    </div>
                </nav>
            </header>
    );
}