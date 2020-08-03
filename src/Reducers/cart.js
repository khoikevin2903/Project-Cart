import * as types from './../Constants/ACtionTypes';

var data = JSON.parse(localStorage.getItem('CART'));
var initialState = data ? data : [];

const carts = (state = initialState, action) => {
    switch (action.type) {

        case types.ADD_TO_CART:
            let check = false;
            for (let i = 0; i < state.length; i++) {
                if (state[i].product.id === action.product.id) {
                    state[i] = {
                        ...state[i],
                        quantity: state[i].quantity + 1
                    }
                    check = true;
                }
            }
            if (!check) state = [...state,
            {
                product: action.product,
                quantity: 1
            }]
            localStorage.setItem('CART', JSON.stringify(state))
            return [...state];

        case types.DELETE_TO_CART:
            for (let i = 0; i < state.length; i++) {
                if (state[i].product.id === action.product.id) {
                    if (state[i].quantity === 1) {
                        state.splice(i, 1)
                    }
                    else {
                        state[i] = {
                            ...state[i],
                            quantity: state[i].quantity - 1
                        }
                    }
                    localStorage.setItem('CART', JSON.stringify(state))
                    return [...state];
                }
            }
            localStorage.setItem('CART', JSON.stringify(state))
            return [...state];

        case types.UPDATE_TO_CART:
            for (let i = 0; i < state.length; i++) {
                if (state[i].product.id === action.product.id) {
                        state[i] = {
                            ...state[i],
                            quantity: action.quantity
                        }
                    localStorage.setItem('CART', JSON.stringify(state))
                    return [...state];
                }
            }
            localStorage.setItem('CART', JSON.stringify(state))
            return state;

        default:
            return [...state];
    }
}

export default carts;