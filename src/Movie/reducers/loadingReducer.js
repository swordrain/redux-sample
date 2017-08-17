import {LOAD_START, LOAD_END} from '../actionTypes'

export default (state = false, action) => {
	switch(action.type){
		case LOAD_START:
			return true
		case LOAD_END:
			return false
		default: 
			return state
	}
}