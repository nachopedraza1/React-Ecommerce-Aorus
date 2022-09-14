import React from 'react'
import { useContext } from 'react'
import { CartContext } from '../../Context/CartProvider'

export const CartContainer = () => {

    const { inCart } = useContext(CartContext);


    return (
        <div>
            {inCart.map(producto => {
                return (
                    <div>
                        <p> {producto.nombre} </p>
                    </div>
                )
            })}
        </div>
    )
}
