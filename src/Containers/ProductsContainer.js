import React, { Component } from 'react';
import { connect } from 'react-redux';
import Products from './../components/Products';
import Product from './../components/Product';
import PropTypes from 'prop-types';
import * as action from './../Actions/index';


class ProductsContainer extends Component {
    render() {
        var { products } = this.props;
        return (
            <Products>
                {this.showProducts(products)}
            </Products>
        );
    }

    showProducts(products) {
        var result = null;
        if (products.length > 0) {
            result = products.map((product, index) => {
                return <Product
                    key={index}
                    product={product}
                    onAddToCart = {this.props.onAddToCart} 
                    onChangMessage = {this.props.onChangMessage}/>
            });
        }
        return result;
    }
}

ProductsContainer.propTypes = {
    products: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired,
            name: PropTypes.string.isRequired,
            image: PropTypes.string.isRequired,
            description: PropTypes.string.isRequired,
            price: PropTypes.number.isRequired,
            inventory: PropTypes.number.isRequired,
            rating: PropTypes.number.isRequired
        })
    ).isRequired,
    onChangMessage : PropTypes.func.isRequired
}

const mapStateToProps = state => {
    return {
        products: state.products
    }
}

const mapDispatchToProps = (dispact, props) => {
    return {
        onAddToCart: (product) => {
            dispact(action.actAddToCart(product, 1));
        },
        onChangMessage: (message) => {
            dispact(action.actChangeMessage(message));
        }
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductsContainer);