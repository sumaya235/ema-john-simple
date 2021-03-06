import React from 'react';

const Card = (props) => {
    const card = props.card;
    // const total=card.reduce((total,prd)=> total+prd.price,0);
    let total = 0;
    for (let i = 0; i < card.length; i++) {
        const product = card[i];
        total = total + product.price;
        
    }
    const tax= (total /10).toFixed(2);
    const grandTotal=(total + Number(tax)).toFixed(2);


    return (
        <div>
            <h4>Order Summary : </h4>
            <p>Items Ordered : {card.length} </p>
            <p>Product Price : {total}</p>
            <p>Tax : {tax}</p>
            <p>Total Price : {grandTotal}</p>
        </div>
    );
};

export default Card;