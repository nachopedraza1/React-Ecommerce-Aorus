import { useState } from "react";
import { Cart } from "./Cart";
import './NavBar.scss';

export const NavBar = () => {
    const [btnState, setBtnState] = useState(false);

    const toggleClass = () => {
        setBtnState(!btnState)
    }

    let btnOnState = btnState ? "is-active" : "";
    let menuState = btnState ? "menu-active" : "";

    return (
        <nav className="top-nav">
            <div className="container-xxl d-md-flex justify-content-between f-ars">
                <div className="d-flex justify-content-between align-items-center">
                    <button className={`hamburger hamburger--squeeze shadow-none d-md-none ${btnOnState}`} type="button"
                        id="btnMenu" onClick={toggleClass}>
                        <span className="hamburger-box">
                            <span className="hamburger-inner"></span>
                        </span>
                    </button>
                    <img src="src/assets/apruslogo.webp" width="30%" alt="Aorus" />

                    <div className="d-md-none text-white fs-2">
                        <button className="btn px-1 fs-3 border-0">
                            <i className="bi bi-person-fill text-white"></i>
                        </button>
                        <Cart />
                    </div>

                    <ul className={`menu ${menuState}`}>
                        <li><a href="#">HOME</a></li>
                        <li><a href="#">PRODUCTS</a></li>
                        <li><a href="#">EXPLORE</a></li>
                        <li><a href="#">CONTACT</a></li>
                    </ul>
                </div>

                <div className="d-none d-md-flex align-items-center fs-2">
                    <img className="d-none d-md-block m-2" src="src/assets/gigabytelogo.webp" width="120rem" alt="" />
                    <button className="btn px-2 fs-3 border-0">
                        <i className="bi bi-person-fill text-white"></i>
                    </button>
                    <Cart />
                </div>
            </div>
        </nav>
    )
}
