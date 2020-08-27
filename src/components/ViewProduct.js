import React, { Component } from 'react';
import image from '../image.jpeg'



class ViewProduct extends Component {
    render() {
        return (
            <div className="mt-5 container d-flex justify-content-center">
                <div className="col-lg-9 col-12 row">
                    <div className="col-6">
                        <img src={image} className="rounded" alt="product" width="100%" />
                    </div>
                    <div className="col d-flex flex-column">
                        <div className="my-2">{this.props.name}</div>
                        <div>{this.props.price}</div>
                        <div>{this.props.priceSale}</div>
                        <button type="button" className="btn btn-outline-info rounded mt-auto mx-5">Thêm vào giỏ</button>
                    </div>
                </div>
            </div>
        );
    }
}

export default ViewProduct;