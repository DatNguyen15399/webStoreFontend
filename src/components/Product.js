import React, { Component } from 'react';
import image from '../image.jpeg'
import './Product.css'
import {Link} from 'react-router-dom';


class Product extends Component {
    
    render() {
        return (
            <div className="col-3 d-flex flex-column mb-2">
                <Link  to={`product/${this.props.id}`}>
                    <div>
                        <img src={image}  width="100%" height="auto" alt="product"/>
                    </div>
                    <div className="my-1 mx-auto fontsize">
                        {this.props.name}
                    </div>
                    <div className="d-flex mx-auto fontsize">
                        <span className="pr-2 text-wrap textPrice">{this.props.price} $</span>
                        <span className="pl-2 text-danger font-weight-bold">{this.props.priceSale} $</span>
                    </div>
                </Link>
            </div>
        );
    }
}

export default Product;