import React from 'react';

const TotalPrice = (props) => {
    return (
        <div className="total-price container">
            <p>Total Price: ${props.calculateTotalPrice()}</p>
        </div>
    );
};

export default TotalPrice;