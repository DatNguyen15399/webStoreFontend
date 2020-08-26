import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import { TiShoppingCart } from 'react-icons/all'

class Header extends Component {
    render() {
        return (
            <div className="navbar navbar-expand-sm navbar-light border-bottom sticky-top bg-white py-3">

                <Link className="navbar-brand font-weight-bold" to="">Logo</Link>

                <ul className="navbar-nav text-muted">
                    <li className="nav-item">
                        <Link className="nav-link" to={`/home`}>Home</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link">Introduce</Link>
                    </li>
                </ul>

                <div className="ml-auto">
                    <TiShoppingCart size="1.5em"/>
                </div>
            </div>
        );
    }
}

export default Header;