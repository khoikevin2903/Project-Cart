import React, { Component } from 'react';
import { connect } from 'react-redux';
import Cart from './../components/Cart';
import CartResult from './../components/CartResult';
import CartItem from './../components/CartItem';
import PropTypes from 'prop-types';
import * as Message from './../Constants/Message';
import * as action from './../Actions/index';

class CartContainer extends Component {
    render() {
        var { carts } = this.props;
        return (
            <div>
                <Cart>
                    {this.showCart(carts)}
                </Cart>
            </div>
        );
    }

    showCart(carts) {
        var result = <tr><td>{Message.MSG_CARD_EMPTY}</td></tr>;
        if (carts.length > 0) {
            result = carts.map((cart, index) => {
                return <CartItem key={index}
                 cart={cart} 
                 onUpdateToCart={this.props.onUpdateToCart}
                 onChangeMessage={this.props.onChangeMessage}
                 onDeleteToCart={this.props.onDeleteToCart}/>
            });
            var price = 0;
            for (let i = 0; i < carts.length; i++) {
                price += carts[i].product.price * carts[i].quantity;
            }
            result.push(<CartResult key={carts.length + 1} price={price} />);
        }
        return result;
    }
}

CartContainer.propTypes = {
    carts: PropTypes.arrayOf(PropTypes.shape({
        product: PropTypes.shape({
            id: PropTypes.number.isRequired,
            name: PropTypes.string.isRequired,
            image: PropTypes.string.isRequired,
            description: PropTypes.string.isRequired,
            price: PropTypes.number.isRequired,
            inventory: PropTypes.number.isRequired,
            rating: PropTypes.number.isRequired
        }).isRequired,
        quantity: PropTypes.number.isRequired
    })).isRequired
}

const mapStateToProps = state => {
    return {
        carts: state.carts
    }
}

const mapDispatchToProps = (dispact, props) => {
    return {
        onDeleteToCart: (product) => {
            dispact(action.actDeleteToCart(product));
        },
        onChangeMessage: (message) => {
            dispact(action.actChangeMessage(message));
        },
        onUpdateToCart: (product, quantity) => {
            dispact(action.actUpdateToCart(product,quantity));
        }
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(CartContainer);