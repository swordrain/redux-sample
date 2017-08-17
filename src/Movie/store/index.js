import {createStore, applyMiddleware} from 'redux'
import reducer from '../reducers'
//import thunkMiddleware from 'redux-thunk'
import promiseMiddleware from 'redux-promise'
import { composeWithDevTools } from 'redux-devtools-extension';


//export default createStore(reducer, applyMiddleware(thunkMiddleware))

const composeEnhancers = composeWithDevTools({
  // Specify name here, actionsBlacklist, actionsCreators and other options if needed
});
export default createStore(reducer, composeEnhancers(applyMiddleware(promiseMiddleware)))