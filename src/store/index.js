import {createStore,combineReducers,compose} from 'redux'
import promise from 'redux-promise'
import headerReducer from './Reducers/headerReducer'
import {applyMiddleware} from "redux"

const reducer = combineReducers({
	headerReducer
})

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducer, /* preloadedState, */ composeEnhancers(
    applyMiddleware(promise)
  ));
export default store

