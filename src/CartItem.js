import React from 'react';

const CartItem = (props) => {
    return props.items.map(item => {
        return (
            <div className="collection-item" key={item.id}>
                <div className="row">
                    <div className="col-md-8">{item.product.name}</div>
                    <div className="col-md-2">${(item.product.priceInCents/100).toFixed(2)}</div>
                    <div className="col-md-2">{item.quantity}</div>
                </div>
            </div>
        );
    });
};

export default CartItem;