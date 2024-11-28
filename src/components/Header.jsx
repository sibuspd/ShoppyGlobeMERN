import "./Header.css"
import { Link } from "react-router-dom";
import { useSelector } from "react-redux"

export default function Header(){

    const itemCount = useSelector(store => store.shopCart);
    console.log(itemCount);

    return(
        <div className="header-container">
            <div className="welcome-message">
                <h1>Welcome to ShoppyGlobe</h1>
                <p>Your one-stop shop for amazing products!</p>
            </div>
            <header>
                <nav className="nav-container">
                    <div className="nav-links">
                        <ul>
                            <li><Link to="/">Home</Link></li>
                            <li><Link to="/about">About</Link></li>
                            <li><Link to="/contact">Contact</Link></li>
                        </ul>
                    </div> 
                    
                    <div className="cart-link">
                        <Link to="/cart">Cart Items 🛒 {itemCount.length}</Link>
                    </div>
                </nav>
            </header>
        </div>
    );
}