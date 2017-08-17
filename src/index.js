import React from 'react';
import ReactDOM from 'react-dom';
import MovieContainer from './Movie/MovieContainer';
import registerServiceWorker from './registerServiceWorker';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

const App = () => (
  	<MuiThemeProvider>
    	<MovieContainer />
  	</MuiThemeProvider>
);

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
