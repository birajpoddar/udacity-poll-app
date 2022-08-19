import { connect } from 'react-redux';
import { validateLogin } from '../actions/authedUser';
import { _getUsers } from '../utils/_DATA';
import CustomButton from './presentation/CustomButton';
import CustomInput from './presentation/CustomInput';

const Login = (props) => {
	const invalidateUser = () => {
		// Clear entered values
		document.getElementById('inputUser').value = '';
		document.getElementById('inputPass').value = '';

		// Show Error Message
		const valEl = document.getElementById('validation-message');
		valEl.classList.remove('alert-light');
		valEl.classList.remove('hide-background');
		valEl.classList.add('alert-danger');
		valEl.innerText = "Credentials doesn't match. Please try again.";
	};

	const loginUser = () => {
		const user = document.getElementById('inputUser').value;
		const pass = document.getElementById('inputPass').value;

		const users = props.users;
		props.dispatch(validateLogin({ user, pass, users }, invalidateUser));
	};

	return (
		<div id="loginPanel">
			<div className="card text-bg" style={{ minWidth: '20rem' }}>
				<div className="card-header">
					<h1 className="display-6 text-uppercase">Employee Poll Login</h1>
				</div>
				<div className="card-body">
					<div
						id="validation-message"
						className="alert alert-light text-center hide-background"
						role="alert"
					>
						{' '}
					</div>
					<CustomInput title="☺︎" id="inputUser" placeholder="Username" />
					<CustomInput
						title="✲"
						id="inputPass"
						placeholder="Password"
						type="password"
					/>
					<CustomButton placeholder="LOGIN" click={loginUser} />
				</div>
			</div>
		</div>
	);
};

export default connect((state) => {
	return {
		users: state.users,
	};
})(Login);
