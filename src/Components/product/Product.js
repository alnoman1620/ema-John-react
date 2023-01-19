import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import './Product.css'
import Rating from 'react-rating';

const Product = (props) => {
    const {img,name,stock,seller,price,star} = props.pd;
    const cartIcon = <FontAwesomeIcon icon={faShoppingCart} />
    return (
        <div className='product-info'>
            <div>
                <img src={img} alt="" />
            </div>
        <div className='pd-info'>
            <h2>{name}</h2>
            <p><small>by {seller}</small></p>
            <h4>Price: {price}</h4>
            <h6>Only {stock} left on the stock</h6>
            <Rating
            initialRating={star}
            emptySymbol="far fa-star icon"
            fullSymbol="fas fa-star icon"
            readonly></Rating>
            <br />
            <button onClick={()=>props.handleAddToCart(props.pd)} className='purchase-btn'>{cartIcon} Add to Cart</button>
        </div>
        </div>
    );
};

export default Product;