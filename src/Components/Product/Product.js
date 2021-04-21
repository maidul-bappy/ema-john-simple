import React from 'react';
import "./Product.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartArrowDown } from '@fortawesome/free-solid-svg-icons'


const Product = (props) => {
    //console.log(props);
    const { img, name, seller, price, stock } = props.product;
    return (
        <div className="product">
            <div className="product-img">
                <img src={img} alt="" />
            </div>

            <div className="product-info">
                <h4 className="product-name">{name}</h4> <br />
                <p><small>By: {seller}</small></p>
                <p>${price}</p>
                <p><small>Only {stock} left in stock - order soon</small></p>
                <button
                    className="cart-btn"
                    onClick={() => { props.handleAddProduct(props.product) }}
                ><FontAwesomeIcon icon={faCartArrowDown} /> Add To Cart</button>
            </div>
        </div>
    );
};

export default Product;