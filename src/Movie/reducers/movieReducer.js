import {FETCH_MOVIE, MOVIE_UP, MOVIE_DOWN} from '../actionTypes'

export default (state = [], action) => {

	switch (action.type){
		case FETCH_MOVIE:
			return action.data
		case MOVIE_UP:
			return [
	        		...state.slice(0, action.index),
	        		Object.assign({}, state[action.index], {
			          	up: (state[action.index].up|| 0 ) + 1
			        }),
			        ...state.slice(action.index + 1)
			    ]
		case MOVIE_DOWN:
			return [
	        		...state.slice(0, action.index),
	        		Object.assign({}, state[action.index], {
			          	down: (state[action.index].down|| 0 ) + 1
			        }),
			        ...state.slice(action.index + 1)
			    ]
		default:
			return state
	}
}