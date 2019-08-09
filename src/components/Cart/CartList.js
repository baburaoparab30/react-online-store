import React from 'react';
import CartItem from './CartItem';

export default function CartList({ value }) {
    const { cart } = value;
    return (
        <div>
            {cart.map(item => (
                <CartItem key={item.id} item={item} value={value} />
            ))}
        </div>
    )
}
