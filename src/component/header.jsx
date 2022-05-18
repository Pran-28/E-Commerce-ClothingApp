import React from "react";
import {Link} from "react-router-dom";
import {ReactComponent as Logo} from "../iconse.svg";
import Styles from "../Styles.scss";

const Header = () =>(
    <div className="header">
        <Link to="/">
            <Logo className="logo-container"/>
        </Link>

        <div className="options">
            <Link className="option" to="/shop">Shop</Link>
            <Link className="option" to="/shop">Contact</Link>
        </div>


    </div>
);

export default Header;