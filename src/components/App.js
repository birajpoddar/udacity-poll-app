import { connect } from 'react-redux';
import { useEffect } from 'react';
import { loadData } from '../actions/shared';
import Login from './Login';

// bootstrap

const App = (props) => {
	useEffect(() => {
		props.dispatch(loadData());
	}, []);

	if (props.authedUser === null) {
		return <Login />;
	}

	return (
		<div className="App">
			<header className="App-header">
				<p>
					Edit <code>src/App.js</code> and save to reload.
				</p>
				<a
					className="App-link"
					href="https://reactjs.org"
					target="_blank"
					rel="noopener noreferrer"
				>
					Learn React
				</a>
			</header>
		</div>
	);
};

export default connect((state) => ({
	authedUser: state.authedUser,
}))(App);
