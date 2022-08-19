import { LOGGED_IN, LOGGED_OUT } from './constants';
import { validateUser } from '../utils/dataValidator';

const loginUser = (authedUser) => {
	return {
		type: LOGGED_IN,
		authedUser,
	};
};

export const logoutUser = () => {
	return {
		type: LOGGED_OUT,
		authedUser: null,
	};
};

export const validateLogin = ({ user, pass, users }, invalidateLogin) => {
	return (dispatch) => {
		validateUser(user, pass)
			.then(() => {
				const userDetails = users[user];
				dispatch(loginUser(userDetails));
			})
			.catch(() => {
				invalidateLogin();
			});
	};
};
