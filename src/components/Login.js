import { createRef } from 'react';
import { connect } from 'react-redux';
import { validateLogin } from '../actions/authedUser';
import CustomInput from './presentation/CustomInput';

const Login = (props) => {
	const userRef = createRef();
	const passRef = createRef();
	const valiRef = createRef();

	const invalidateUser = () => {
		// Clear entered values
		userRef.current.value = '';
		passRef.current.value = '';

		// Show Error Message
		const valEl = valiRef.current;
		valEl.classList.remove('alert-light');
		valEl.classList.remove('hide-background');
		valEl.classList.add('alert-danger');
		valEl.innerText = "Credentials doesn't match. Please try again.";
	};

	const loginUser = () => {
		const user = userRef.current.value;
		const pass = passRef.current.value;

		props.dispatch(
			validateLogin({ user, pass, users: props.users }, invalidateUser)
		);
	};

	return (
		<div id="loginPanel">
			<div className="card text-bg" style={{ minWidth: '20rem' }}>
				<div className="card-header">
					<h1 className="display-6 text-uppercase font-weight-100">
						Employee Poll Login
					</h1>
				</div>
				<div className="card-body">
					<div
						id="validation-message"
						className="alert alert-light text-center hide-background"
						role="alert"
						data-testid="validationMessage"
						ref={valiRef}>
						{' '}
					</div>
					<CustomInput
						title="☺︎"
						id="inputUser"
						placeholder="Username"
						ref={userRef}
					/>
					<CustomInput
						title="✲"
						id="inputPass"
						placeholder="Password"
						type="password"
						ref={passRef}
					/>
					<button
						className="btn btn-success btn-login"
						data-testid="buttonLogin"
						onClick={loginUser}>
						LOGIN
					</button>
				</div>
			</div>
		</div>
		<div style={{display: 'flex', justifyContent: 'center', backgroundColor: '#eeeeee96'}}>
			Please login using test credentials-
			<i>sarahedo/password123</i>
		</div>
	);
};

export default connect((state) => {
	return {
		users: state.users,
	};
})(Login);
