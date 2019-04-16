import React from 'react';
import FullInfoProduct from '../FullInfoProduct/FullInfoProduct'


const Product = (props) => {
    const { image, name, click, visible, id, price, priceForFive, description } = props
    return (
        <div className={visible ? "fullInfo" : "product"}>
            {visible ?
                <FullInfoProduct
                    description={description}
                    price={price}
                    priceForFive={priceForFive}
                    click={click}
                    image={image}
                    name={name} />
                : <OnlyImage name={name} id={id} click={click} image={image} />}

        </div>
    );
}



const OnlyImage = props => <img onClick={() => props.click(props.id)} className="product__Onlyimg" alt={props.name} src={props.image} />





export default Product;