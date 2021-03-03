import { NEW_USER, PASSWORD } from '../actions/types';

const initialState = {
    userName: '',
    password: ''
}

const loginReducer = (state = initialState, action) => {
    switch (action.type) {
        case NEW_USER:
            return {
                ...state,
                userName: state.userName += action.data
            };
        case PASSWORD:
            return {
                ...state,
                password: state.password += action.data
            };
        default:
            return state;
    }
}

export default loginReducer;