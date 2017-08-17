import {FETCH_MOVIE, MOVIE_UP, MOVIE_DOWN, LOAD_START, LOAD_END} from '../actionTypes'

export const fetchMovie = (dispatch) => new Promise((resolve, reject) => {
	dispatch({
		type: LOAD_START
	})
	return fetch('/movie/in_theaters?count=50')
		.then(data => data.json())
		.then(json => {
			dispatch({
				type: FETCH_MOVIE,
				data: json.subjects
			})
			dispatch({
				type: LOAD_END
			})
		})
})

export const movieUp = (index) => ({
	type: MOVIE_UP,
	index
})

export const movieDown = (index) => ({
	type: MOVIE_DOWN,
	index
})

/*
if use redux-thunk 
import {FETCH_MOVIE, MOVIE_UP, MOVIE_DOWN, LOAD_START, LOAD_END} from './actionTypes.js'

export const fetchMovie = (dispatch) => () => {
	dispatch({
		type: LOAD_START
	})
	return fetch('/movie/in_theaters?count=50')
		.then(data => data.json())
		.then(json => dispatch({
			type: FETCH_MOVIE,
			data: json.subjects
		}))
}

export const movieUp = (index) => ({
	type: MOVIE_UP,
	index
})

export const movieDown = (index) => ({
	type: MOVIE_DOWN,
	index
})
*/