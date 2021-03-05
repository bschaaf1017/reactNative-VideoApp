import { createStore, combineReducers } from 'redux';
import loginReducer from './reducers/loginReducer';
import searchReducer from './reducers/searchReducer';
const enableReduxDevTools = window.__REDUX_DEVTOOLS_EXTENSION__?.();
const rootReducer = combineReducers({
    login: loginReducer,
    search: searchReducer
})

const configureStore = () => createStore(rootReducer, enableReduxDevTools);

export default configureStore;