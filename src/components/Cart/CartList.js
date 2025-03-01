import React from 'react'
import CartItem from './CartItem';

export default function CartList({value}) {
    
    const {cart} = value;
    console.log(value);
    console.log(cart);

    return (
    <div className="container-fluid">
        {cart.map(item => {
            return <CartItem key ={item.id} item ={item} value={value} />;
        })}
    </div>
       
    );
}

