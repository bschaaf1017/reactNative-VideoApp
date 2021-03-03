import { createStore, combineReducers } from 'redux';
import loginReducer from './reducers/loginReducer';
const enableReduxDevTools = window.__REDUX_DEVTOOLS_EXTENSION__?.();
const rootReducer = combineReducers({
    login: loginReducer
})

const configureStore = () => createStore(rootReducer, enableReduxDevTools);

export default configureStore;