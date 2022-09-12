import "./Cart.scss"
import { useState } from "react"

export const Cart = () => {

    return (
        <button className="btn px-2 fs-4 border-0 position-relative">
            <span className="contador" > 0 </span>
            <i className="bi bi-cart-fill text-white"></i>
        </button>
    )
}
