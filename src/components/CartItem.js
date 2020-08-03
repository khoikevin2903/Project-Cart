import React, { Component } from 'react';
import * as Message from './../Constants/Message';

class CartItem extends Component {

    constructor(props) {
        super(props);
        this.state = {
            quantity: 1
        }
    }

    onDeleteCart = (product) => {
        this.props.onDeleteToCart(product);
        this.props.onChangeMessage(Message.MSG_DELETE_PRODUCT_IN_CART_SUCCESS);
    }

    onUpdateQuantity = (product, quantity) => {
        if (quantity > 0) {
            this.props.onUpdateToCart(product, quantity)
            this.props.onChangeMessage(Message.MSG_UPDATE_CART_SUCCESS);
        }
    }
    render() {
        var { cart } = this.props;
        return (
            <tr>
                <th scope="row">
                    <img src={cart.product.image}
                        alt={cart.product.name} className="img-fluid z-depth-0" />
                </th>
                <td>
                    <h5>
                        <strong>{cart.product.name}</strong>
                    </h5>
                </td>
                <td>{cart.product.price}$</td>
                <td className="center-on-small-only">
                    <span className="qty">{cart.quantity} </span>
                    <div className="btn-group radio-group" data-toggle="buttons">
                        <label className="btn btn-sm btn-primary btn-rounded waves-effect waves-light"
                            onClick={() => this.onUpdateQuantity(cart.product, cart.quantity - 1)}>
                            <div>—</div>
                        </label>
                        <label className="btn btn-sm btn-primary btn-rounded waves-effect waves-light"
                            onClick={() => this.onUpdateQuantity(cart.product, cart.quantity + 1)}>
                            <div>+</div>
                        </label>
                    </div>
                </td>
                <td>{cart.product.price * cart.quantity}$</td>
                <td>
                    <button type="button" className="btn btn-sm btn-primary waves-effect waves-light" data-toggle="tooltip" data-placement="top"
                        title="" data-original-title="Remove item"
                        onClick={() => this.onDeleteCart(cart.product)}>
                        X
                    </button>
                </td>
            </tr>
        );
    }
}

export default CartItem;