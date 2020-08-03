import * as types from './../Constants/ACtionTypes';

export const actAddToCart = (product, quantity) => {
    return {
        type: types.ADD_TO_CART,
        product,
        quantity
    }
}

export const actChangeMessage = (message) => {
    return {
        type: types.CHANGE_MESSAGE,
        message
    }
}

export const actDeleteToCart = (product) => {
    return {
        type: types.DELETE_TO_CART,
        product
    }
}

export const actUpdateToCart = (product, quantity) => {
    return {
        type: types.UPDATE_TO_CART,
        product,
        quantity
    }
}