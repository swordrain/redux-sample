import React from 'react'
import {
  	TableRow,
  	TableRowColumn,
} from 'material-ui/Table';
import RaisedButton from 'material-ui/RaisedButton';

export default class MovieItem extends React.Component{


	render(){

		const {movie, movieUp, movieDown} = this.props
		return (<TableRow hoverable={true}> 
					<TableRowColumn>
						<img alt="cover" src={movie.images.small}/>
					</TableRowColumn>
					<TableRowColumn>{movie.title}</TableRowColumn>
					<TableRowColumn> 
						<RaisedButton primary onClick={movieUp} label={`👍${movie.up||0}`} />
						<RaisedButton secondary onClick={movieDown} label={`👎${movie.down||0}`} />

					</TableRowColumn> 
				</TableRow>)
	}
}