import React from 'react';
import MovieItem from './MovieItem'
import {connect} from 'react-redux'
import * as actions from '../actions'
import RaisedButton from 'material-ui/RaisedButton';
import CircularProgress from 'material-ui/CircularProgress';
import {
  	Table,
  	TableBody,
  	TableHeader,
  	TableHeaderColumn,
  	TableRow,
} from 'material-ui/Table';

class Movie extends React.Component{

	render() {
		
		const {movies, movieUp, movieDown, load, loading} = this.props
		const loadingComponent = <CircularProgress size={50} thickness={5} />

		return (

			<div>
				<RaisedButton primary disabled={loading} onClick={load} label="Load Movies" ></RaisedButton>
				<div>
				{loading?loadingComponent: null}
				</div>
				{movies&&movies.length>0?
				(<Table>
				    <TableHeader displaySelectAll={false} adjustForCheckbox={false}>
				      <TableRow>
				      	<TableHeaderColumn>Cover</TableHeaderColumn>
				        <TableHeaderColumn>Name</TableHeaderColumn>
				        <TableHeaderColumn>Actions</TableHeaderColumn>
				      </TableRow>
				    </TableHeader>
				    <TableBody displayRowCheckbox={false} showRowHover={true}>
					{
						movies.map((item, index) => {
							return (<MovieItem key={item.id} movie={item} movieUp={movieUp.bind(null, index)} movieDown={(movieDown.bind(null, index))}/>)
						})
					}
					</TableBody>
				</Table>)
				: null
				}
			</div>
			)
	}

}

const mapStateToProps = (state, ownProps) => {
	return {
		movies : state.movie,
		loading: state.loading
	}
}
const mapDispatchToProps = (dispatch) => {
	return {
		movieUp: (index) => {
			dispatch(actions.movieUp(index))
		},
		movieDown: (index) => {
			dispatch(actions.movieDown(index))
		},
		load: () => {
			dispatch(actions.fetchMovie(dispatch))
		}
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(Movie)


