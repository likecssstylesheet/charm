import {createStore,combineReducers,compose} from 'redux'
import promise from 'redux-promise'

const reducer = combineReducers({

})

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducer, /* preloadedState, */ composeEnhancers(
    applyMiddleware(promise)
  ));
export default store

