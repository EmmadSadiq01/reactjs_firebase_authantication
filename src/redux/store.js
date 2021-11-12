import { createStore, combineReducers, compose, applyMiddleware } from 'redux'
import thunk from 'redux-thunk';
import userReducer from './reducers/userRedcer';

const my_reducer = combineReducers({
    user : userReducer
})

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
const store = createStore(
    my_reducer,
    composeEnhancer(applyMiddleware(thunk))
)
export default store;