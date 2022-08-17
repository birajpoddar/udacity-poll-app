import { connect } from 'react-redux';
import { logInUser } from '../actions/authedUser';
import users from '../reducers/users';
import CustomButton from './presentation/CustomButton';
import CustomInput from './presentation/CustomInput';

const Login = (props) => {
	const validateUser = () => {
		const user = document.getElementById('inputUser').value;
		const pass = document.getElementById('inputPass').value;

		if (
			props.users[user] !== undefined &&
			props.users[user].password === pass
		) {
			props.dispatch(logInUser(user));
		}
	};

	return (
		<div id="loginPanel">
			<div className="card text-bg" style={{ minWidth: '20rem' }}>
				<div className="card-header">
					<h1 className="display-6 text-uppercase">Employee Poll Login</h1>
				</div>
				<div className="card-body">
					<CustomInput title="☺︎" id="inputUser" placeholder="Username" />
					<CustomInput
						title="✽"
						id="inputPass"
						placeholder="Password"
						type="password"
					/>
					<CustomButton placeholder="LOGIN" click={validateUser} />
				</div>
			</div>
		</div>
	);
};

export default connect((state) => ({
	authUser: state.authUser,
	users: state.users,
}))(Login);
