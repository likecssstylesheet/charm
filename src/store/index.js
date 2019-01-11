import {createStore,combineReducers,compose} from 'redux'
import promise from 'redux-promise'
import headerReducer from './Reducers/headerReducer'
import {applyMiddleware} from "redux"
import whiteReducer from './Reducers/whiteReducer'
const reducer = combineReducers({
	headerReducer,whiteReducer 
})

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducer, /* preloadedState, */ composeEnhancers(
    applyMiddleware(promise)
  ));
export default store

