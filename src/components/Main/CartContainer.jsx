import './CartContainer.scss';
import React from 'react';
import { useContext } from 'react';
import { CartContext } from '../../Context/CartProvider';
import { CartItem } from './CartItem';
import { Link } from 'react-router-dom';

export const CartContainer = () => {

    const { carrito } = useContext(CartContext);

    return (
        <div className="carrito-container">
            <div className='pt-5'>
                <p className='p-2 text-center text-sm-start f-ars text-danger'><i className="bi bi-cart-fill"></i> CARRITO DE COMPRAS</p>
            </div>
            {carrito.length === 0 && <div className='alert-vacio'><h4>CARRITO VACIO / <span><Link to="/categoria/motherboards">VER PRODUCTOS</Link></span></h4></div>}
            <div>
                {
                    carrito.map(producto => {
                        return <CartItem key={producto.id} producto={producto} />
                    })}
            </div>
        </div>
    )
}
