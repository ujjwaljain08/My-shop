import React,{useContext} from 'react';
import {Link} from "react-router-dom";
import {CartContext} from "../Global/CartContext"
import "../App.css"
export default function Navbar() {
    const {qty}=useContext(CartContext)
    return (
        <div className="sticky">
            <nav>
                <ul className="left">
                    <li><Link  to="/">HeadPhoneZone</Link></li>
                </ul>
                <ul className="right">
                    <li><Link to="cart">
                       <span className="shoppingCart"> <i className="fas fa-cart-plus">
                           </i></span>
                           <span className="cartCount">{qty}</span>
                    </Link></li>
                </ul>
            </nav>
        </div>
    )
}
