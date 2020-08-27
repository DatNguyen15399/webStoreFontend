import React, { Component } from 'react';
import Product from './Product'
import PaginationPage from './PaginationPage';

class ListProduct extends Component {
    render() {
        return (
            <div className="d-flex  mt-5 flex-column">
                <div className="d-flex flex-wrap">
                    {this.props.products.map(product => (
                        <Product key={product.id} {...product}/>
                    ))}
                </div>
                
                <div className="pt-2 justify-content-center d-flex pt-4">
                    <PaginationPage {...this.props.pages} handlePage={this.props.handlePage}/>
                </div>
            </div>
        );
    }
}

export default ListProduct;