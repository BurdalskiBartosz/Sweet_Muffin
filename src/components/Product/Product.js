import React from 'react';

const Product = (props) => {
    return (
        <div onClick={() => props.click(props.id)} className="product">
            <h3>{props.item}</h3>

        </div>
    );
}

export default Product;