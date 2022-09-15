import { useContext } from "react"
import { Link } from "react-router-dom"
import { CartContext } from "../../Context/CartProvider"
import "./Cart.scss"

export const CartWidget = () => {

    const { itemsInCart } = useContext(CartContext);

    return (
        <button className="btn px-2 fs-4 border-0 position-relative">
            <span className="contador" > {itemsInCart} </span>
            <Link to="/cart"><i className="bi bi-cart-fill text-white"></i></Link>
        </button>
    )
}
