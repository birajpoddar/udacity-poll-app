import { LOGGED_IN, LOAD_DATA, LOGGED_OUT } from '../actions/constants';

export default function authedUser(state = null, action) {
	switch (action.type) {
		case LOAD_DATA:
			return null;
		case LOGGED_IN:
		case LOGGED_OUT:
			return action.authedUser;
		default:
			return state;
	}
}
