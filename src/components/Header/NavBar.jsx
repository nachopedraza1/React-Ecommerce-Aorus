import { useState } from "react";
import { Cart } from "./Cart";
import './NavBar.scss';
import { Link, NavLink } from "react-router-dom";

export const NavBar = () => {
    const [btnState, setBtnState] = useState(false);


    const toggleClassBtn = () => {
        setBtnState(!btnState)
    }

    let btnOnState = btnState ? "is-active" : "";
    let menuState = btnState ? "menu-active" : "";
    
    const [subMenuState, setSubMenuState] = useState(false);
    
    const onHover = () => {
        setSubMenuState(!subMenuState);
    }

    let hoverSubMenu = subMenuState ? "subMenu-active" : "";


    return (
        <nav className="top-nav">
            <div className="container-xxl d-lg-flex justify-content-between f-ars">
                <div className="d-flex justify-content-between justify-content-lg-start align-items-center">
                    <button className={`hamburger hamburger--squeeze shadow-none d-lg-none ${btnOnState}`} type="button"
                        id="btnMenu" onClick={toggleClassBtn}>
                        <span className="hamburger-box">
                            <span className="hamburger-inner"></span>
                        </span>
                    </button>
                    <Link to="/"><img src="src/assets/apruslogo.webp" className="logo" alt="Aorus" /></Link>

                    <div className="d-lg-none text-white fs-2">
                        <button className="btn px-1 fs-3 border-0">
                            <i className="bi bi-person-fill text-white"></i>
                        </button>
                        <Cart />
                    </div>

                    <ul className={`menu ${menuState}`}>
                        <li><Link to="/">HOME</Link></li>
                        <li onMouseEnter={onHover} onMouseLeave={onHover} ><NavLink to="">PRODUCTS</NavLink>
                            <div className={`subMenu ${hoverSubMenu}`}>
                                <div className="subMenu-content">
                                    <div>
                                        <img src="img\categoryMothers.webp" alt="" />
                                        <NavLink to="/categoria/motherboards">MOTHERBOARDS</NavLink>
                                    </div>
                                    <div>
                                        <img src="img\categoryCards.webp" alt="" />
                                        <NavLink to="/categoria/placasVideo">GRAFICAS</NavLink>
                                    </div>
                                    <div>
                                        <img src="..\img\productos\ram-9.png" alt="" />
                                        <NavLink to="/categoria/memoriasRam">MEMORIAS</NavLink>
                                    </div>
                                    <div>
                                        <img src="img\categoryMonitors.webp" alt="" />
                                        <NavLink to="/categoria/monitores">MONITORES</NavLink>
                                    </div>
                                    <div>
                                        <img src="img\categoryRefri.webp" alt="" />
                                        <NavLink to="/categoria/refrigeracion">REFRIGERACION</NavLink>
                                    </div>
                                </div>
                            </div>
                        </li>
                        <li><Link to="/explore">EXPLORE</Link></li>
                        <li><Link to="/contact">CONTACT</Link></li>
                    </ul>
                </div>

                <div className="d-none d-lg-flex align-items-center fs-2">
                    <img className="d-none d-lg-block m-2" src="src/assets/gigabytelogo.webp" width="120rem" alt="" />
                    <button className="btn px-2 fs-3 border-0">
                        <i className="bi bi-person-fill text-white"></i>
                    </button>
                    <Cart />
                </div>
            </div>
        </nav>
    )
}