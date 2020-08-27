import React, { Component } from 'react';
import Pagination from 'react-js-pagination';


class PaginationPage extends Component {
    handle = (page) => {
        this.props.handlePage(page)
    }
    render() {
        return (
            <div className="mr-5">
                <Pagination
                    hideDisabled
                    hideNavigation
                    itemClass="border px-3 py-1 m-1 rounded"
                    linkClass="text-muted"
                    activeLinkClass="text-dark font-weight-bold"
                    activePage={this.props.activePage}
                    itemsCountPerPage={10}
                    totalItemsCount={this.props.totalPage}
                    pageRangeDisplayed={5}
                    onChange={this.handle}
                />
            </div>
            
        );
    }
}

export default PaginationPage;