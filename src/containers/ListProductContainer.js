import { connect } from 'react-redux';
import ListProduct from '../components/ListProduct';
import { changeViewPage } from '../actions';


const mapStateToProps = state =>({
    products: state.listProducts.products,
    pages: state.listProducts.pages
})

const mapDispatchToProps = dispatch =>({
    handlePage: page => dispatch(changeViewPage(page))
});


export default connect(
    mapStateToProps, mapDispatchToProps
)(ListProduct);