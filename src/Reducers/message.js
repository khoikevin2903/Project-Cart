import * as types from './../Constants/ACtionTypes';
import * as Message from './../Constants/Message';


var initialState = Message.MSG_WELCOME;

const message = (state = initialState, action) => {
    switch (action.type) {
        case types.CHANGE_MESSAGE:

            return action.message;
        default:
            return [...state];
    }
}

export default message;