import React, { Component } from 'react';
import Product from './Product'

class ListProduct extends Component {
    render() {
        return (
            <div className="d-flex flex-wrap mt-5 mx-3">
                {this.props.products.map(product => (
                    <Product key={product.id} {...product} onclick={() => this.props.viewProduct(product.id)}/>
                ))}
            </div>
        );
    }
}

export default ListProduct;