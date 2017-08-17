
import { combineReducers } from 'redux'
import movieReducer from './movieReducer'
import loadingReducer from './loadingReducer'

export default combineReducers({
	movie: movieReducer,
	loading: loadingReducer
})