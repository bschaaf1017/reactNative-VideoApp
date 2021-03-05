import { SEARCH } from '../actions/types';

const initialState = {
    searchParam: ''
}

const searchReducer = (state = initialState, action) => {
    switch (action.type) {
        case SEARCH:
            return {
                ...state,
                userName: state.searchParam = action.data
            };
        default:
            return state;
    }
}

export default searchReducer;