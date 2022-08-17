import { LOGGED_IN } from './constants';

export const logInUser = (authedUser) => {
	return {
		type: LOGGED_IN,
		authedUser,
	};
};
