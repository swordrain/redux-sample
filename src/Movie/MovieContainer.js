import React from 'react';

import {Provider} from 'react-redux'
import Movie from './views//Movie'
import store from './store'

export default class MovieContainer extends React.Component{


	render() {
		return (
			<Provider store={store}>
				<Movie />
			</Provider>

			)
	}


}