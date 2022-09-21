import './NavBar.scss';
import { useState } from "react";
import { CartWidget } from "./CartWidget";
import { Link, NavLink } from "react-router-dom";

export const NavBar = () => {
    const [btnState, setBtnState] = useState(false);

    const [subMenuState, setSubMenuState] = useState(false);

    const toggleClassBtn = () => {
        setBtnState(!btnState)
    }

    const onHover = () => {
        setSubMenuState(!subMenuState);
    }

    let btnOnState = btnState ? "is-active" : "";
    let menuState = btnState ? "menu-active" : "";
    let hoverSubMenu = subMenuState ? "subMenu-active" : "";

    return (
        <nav className="top-nav">
            <div className="container-xxl d-lg-flex justify-content-between f-ars ">
                <div className="d-flex justify-content-between justify-content-lg-start align-items-center">
                    <button className={`hamburger hamburger--squeeze shadow-none d-lg-none ${btnOnState}`} type="button"
                        id="btnMenu" onClick={toggleClassBtn}>
                        <span className="hamburger-box">
                            <span className="hamburger-inner"></span>
                        </span>
                    </button>
                    <Link to="/"><img src="../src/assets/apruslogo.webp" className="logo" alt="Aorus" /></Link>

                    <div className="d-lg-none text-white fs-2">
                        <CartWidget />
                    </div>

                    <ul className={`menu ${menuState}`}>
                        <li onClick={toggleClassBtn} ><Link to="/">HOME</Link></li>

                        <span onMouseEnter={onHover} onMouseLeave={onHover}>
                            <li data-bs-toggle="collapse" href="#collapseExample" aria-expanded="false" aria-controls="collapseExample"><NavLink to="">PRODUCTS <i className="fa-solid fa-chevron-down px-1"></i></NavLink></li>
                            <div onClick={toggleClassBtn} className={`subMenu collapse ${hoverSubMenu}`} id="collapseExample">
                                <div className="subMenu-content">
                                    <div>
                                        <NavLink to="/categoria/motherboards">
                                            <img className="d-none d-lg-block" src="https://firebasestorage.googleapis.com/v0/b/aorus-ecommerce-app.appspot.com/o/categoryMothers.webp?alt=media&token=24925b9d-15c6-4e42-ba05-6724e0948a2c" alt="" />
                                            MOTHERBOARDS
                                        </NavLink>
                                    </div>
                                    <div>
                                        <NavLink to="/categoria/placasVideo">
                                            <img className="d-none d-lg-block" src="https://firebasestorage.googleapis.com/v0/b/aorus-ecommerce-app.appspot.com/o/categoryCards.webp?alt=media&token=36be9435-76c4-497b-be68-9a43f2fa1752" alt="" />
                                            GRAFICAS
                                        </NavLink>
                                    </div>
                                    <div>
                                        <NavLink to="/categoria/memoriasRam">
                                            <img className="d-none d-lg-block" src="https://firebasestorage.googleapis.com/v0/b/aorus-ecommerce-app.appspot.com/o/categoryRams.png?alt=media&token=3a3997e2-9cfb-4525-9c6d-0ccf00eb7a75" alt="" />
                                            MEMORIAS
                                        </NavLink>
                                    </div>
                                    <div>
                                        <NavLink to="/categoria/monitores">
                                            <img className="d-none d-lg-block" src="https://firebasestorage.googleapis.com/v0/b/aorus-ecommerce-app.appspot.com/o/categoryMonitors.webp?alt=media&token=c784bf4f-48fc-46f0-a135-242ac3989cc9" alt="" />
                                            MONITORES
                                        </NavLink>
                                    </div>
                                    <div>
                                        <NavLink to="/categoria/refrigeracion">
                                            <img className="d-none d-lg-block" src="https://firebasestorage.googleapis.com/v0/b/aorus-ecommerce-app.appspot.com/o/categoryRefri.webp?alt=media&token=b7e75e90-b08d-4d3a-9ec3-a551297d8010" alt="" />
                                            REFRIGERACION
                                        </NavLink>
                                    </div>
                                    <div>
                                        <NavLink to="/categoria/gabinetes">
                                            <img className="d-none d-lg-block" src="https://firebasestorage.googleapis.com/v0/b/aorus-ecommerce-app.appspot.com/o/categoryCases.webp?alt=media&token=ed4777ea-15bb-46e9-abff-f2938ae74eb9" alt="" />
                                            GABINETES
                                        </NavLink>
                                    </div>
                                </div>
                            </div>
                        </span>

                        <li onClick={toggleClassBtn}><Link to="/explore">EXPLORE</Link></li>
                        <li onClick={toggleClassBtn}><Link to="/contact">CONTACT</Link></li>
                    </ul>
                </div>

                <div className="d-none d-lg-flex align-items-center fs-2">
                    <img className="d-none d-lg-block m-2" src="../src/assets/gigabytelogo.webp" width="120rem" alt="" />
                    <button className="btn px-2 fs-3 border-0">
                        <i className="bi bi-person-fill text-white"></i>
                    </button>
                    <CartWidget />
                </div>
            </div>
        </nav>
    )
}

