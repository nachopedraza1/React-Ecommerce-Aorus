import { Link } from "react-router-dom"
import "./Cart.scss"

export const Cart = () => {

    return (
        <button className="btn px-2 fs-4 border-0 position-relative">
            <span className="contador" > 0 </span>
            <Link to="/cart"><i className="bi bi-cart-fill text-white"></i></Link>
        </button>
    )
}
