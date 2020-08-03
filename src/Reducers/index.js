import {combineReducers} from 'redux';
import products from './products';
import carts from './cart';
import message from './message';

const appReducers = combineReducers({
    products,
    carts,
    message
});

export default appReducers;