import { connect } from 'react-redux';
import { logoutUser } from '../actions/authedUser';
import Header from './presentation/Header';

const Dashboard = (props) => {
	const logout = () => {
		props.dispatch(logoutUser());
	};

	return (
		<div>
			<Header
				avatar={props.authedUser.avatarURL}
				name={props.authedUser.name}
				logout={logout}
			/>
		</div>
	);
};

export default connect((state) => {
	return {
		polls: state.polls,
		authedUser: state.authedUser,
	};
})(Dashboard);
