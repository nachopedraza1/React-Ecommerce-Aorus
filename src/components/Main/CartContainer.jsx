import './CartContainer.scss';
import React from 'react';
import { useContext } from 'react';
import { CartContext } from '../../Context/CartProvider';
import { CartItem } from './CartItem';
import { Link } from 'react-router-dom';

export const CartContainer = () => {

    const { carrito, vaciarCarrito } = useContext(CartContext);

    return (
        <div className="container-lg carrito-container">
            <div className='pt-5'>
                <p className='p-2 text-center text-sm-start f-ars text-danger'><i className="bi bi-cart-fill"></i> CARRITO DE COMPRAS</p>
            </div>
            {carrito.length === 0 && <div className='alert-vacio'><h4>CARRITO VACIO / <span><Link to="/categoria/motherboards">VER PRODUCTOS</Link></span></h4></div>}
            {carrito.length >= 1 && <div className='carrito-header d-none d-sm-flex align-items-center p-2 text-white f-rad text-center'>
                <div className='col-7'>
                    <p className='m-0'>PRODUCTO</p>
                </div>
                <div className='col-1'>
                    <p className='m-0'>CANTIDAD</p>
                </div>
                <div className='col-2'>
                    <p className='m-0'>PRECIO</p>
                </div>
                <div className='col-2'>
                    <button onClick={vaciarCarrito} className='btn-vaciar'>VACIAR CARRITO</button>
                </div>
            </div>}

            <div>
                {carrito.map(producto => {
                    return <CartItem key={producto.id} producto={producto} />
                })}
            </div>
        </div>
    )
}
