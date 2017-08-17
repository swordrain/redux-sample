import {createStore, applyMiddleware, compose} from 'redux'
import reducer from '../reducers'
import { persistState } from 'redux-devtools';
//import thunkMiddleware from 'redux-thunk'
import promiseMiddleware from 'redux-promise'
//import { composeWithDevTools } from 'redux-devtools-extension';
import DevTools from '../views/DevTools'

//export default createStore(reducer, applyMiddleware(thunkMiddleware))

const enhancer = compose(
  	applyMiddleware(promiseMiddleware),
  	DevTools.instrument(),
  	persistState(
    	window.location.href.match(
      		/[?&]debug_session=([^&#]+)\b/
    	)
  	)
);
export default createStore(reducer, enhancer)