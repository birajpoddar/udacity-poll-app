import { connect } from 'react-redux';
import { Fragment, useEffect } from 'react';
import { loadData } from '../actions/shared';
import Login from './Login';
import Dashboard from './Dashboard';
import Loading from './presentation/Loading';
import { Route, Routes } from 'react-router-dom';
import Header from './Header';
import NewPoll from './NewPoll';
import Leaderboard from './Leaderboard';
import PageNotFound from './presentation/PageNotFound';
import PollVoteResult from './PollVoteResult';
import Navigate from './presentation/Navigate';

// bootstrap

const App = (props) => {
	useEffect(() => {
		props.dispatch(loadData());
	}, []);

	return (
		<Fragment>
			{props.loading === false ? (
				<Loading />
			) : props.authedUser === null ? (
				<Login />
			) : (
				<Routes>
					<Route
						path="/"
						exact
						element={
							<Fragment>
								<Header />
								<Dashboard />
							</Fragment>
						}
					/>
					<Route
						path="/add"
						element={
							<Fragment>
								<Header />
								<NewPoll />
							</Fragment>
						}
					/>
					<Route
						path="/leaderboard"
						element={
							<Fragment>
								<Header />
								<Leaderboard />
							</Fragment>
						}
					/>
					<Route
						path="/questions/:id"
						element={
							<Fragment>
								<Header />
								<PollVoteResult />
							</Fragment>
						}
					/>

					<Route
						path="404"
						element={
							<Fragment>
								<Header />
								<PageNotFound />
							</Fragment>
						}
					/>

					<Route path="*" element={<Navigate to="/404"></Navigate>} />
				</Routes>
			)}
		</Fragment>
	);

	// if (!props.loading) {
	// 	return <Loading />;
	// }

	// if (props.authedUser === null) {
	// 	return <Login />;
	// }

	// return <Dashboard />;
};

export default connect((state) => ({
	authedUser: state.authedUser,
	loading: state.loading,
}))(App);
