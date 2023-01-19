import React from 'react';
import Product from '../product/Product';
import './Cart.css'

const Cart = (props) => {
    const { cart}  = props;
    console.log(cart)
    // let total = cart.reduce((previous, product) => previous + product.price,0)
    let totalQuantity = 0;
    let total = 0;
    for(const product of cart){
        if(!product.quantity){
            product.quantity = 1;
        }
        total = total + product.price * product.quantity;
        totalQuantity = totalQuantity + product.quantity;
    }
    
    let tax = total*(7/100);
    const shipping = total*(4/100);
    const orderTotal = total + tax +shipping;
    return (
        <div>
            <div className='cart-head'>
                <h2>Order Summary</h2>
                <h4>Items Order: {totalQuantity}</h4>
            </div>
            <div className='cart-total'>
                <p>Items: <span className='text-right'>{total.toFixed(2)}</span></p>
                <p>Shipping Charge: <span className='text-right'>{shipping.toFixed(2)}</span></p>
                <p>Total before tax: <span className='text-right'> {total.toFixed(2)}</span></p>
                <p>Estimated Tax: <span className='text-right'> {tax.toFixed(2)}</span></p>
                <hr />
                <h4>Order Total: {orderTotal.toFixed(2)}</h4>

            </div>
        </div>
    );
};

export default Cart;