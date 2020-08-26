import { connect } from 'react-redux';
import ListProduct from '../components/ListProduct';
import { viewProduct } from '../actions';


const mapStateToProps = state =>({
    products: state.products
});

const mapDispatchToProps = dispatch =>({
    viewProduct: id => dispatch(viewProduct(id))
});


export default connect(
    mapStateToProps, mapDispatchToProps
)(ListProduct);