import './CartContainer.scss';
import React from 'react';
import { useContext } from 'react';
import { CartContext } from '../../Context/CartProvider';
import { CartItem } from './CartItem';

export const CartContainer = () => {

    const { carrito } = useContext(CartContext);

    return (
        <div className="carrito-container">
            <div className='pt-5'>
                <p className='p-2 text-center text-sm-start f-ars text-danger'><i className="bi bi-cart-fill"></i> CARRITO DE COMPRAS</p>
            </div>
            <div>
                {carrito.map(item => {
                    return <CartItem key={item.id} item={item} />
                })}
            </div>
        </div>
    )
}
