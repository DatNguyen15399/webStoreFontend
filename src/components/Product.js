import React, { Component } from 'react';
import image from '../image.jpeg'
import './Product.css'


class Product extends Component {

    render() {
        return (
            <div class="col-3 d-flex flex-column" onClick={() => this.props.onClick}>
                <div>
                    <img src={image}  width="100%" height="auto" alt="product"/>
                </div>
                <div className="my-2 mx-auto">
                    {this.props.name}
                </div>
                <div className="d-flex mx-auto">
                    <span className="mr-auto">{this.props.price}</span>
                    <span className="text-danger">{this.props.priceSale}</span>
                </div>
            </div>
        );
    }
}

export default Product;