import { LOGGED_IN, LOAD_DATA } from '../actions/constants';

export default function authedUser(state = null, action) {
	switch (action.type) {
		case LOAD_DATA:
			return action.authedUser;
		case LOGGED_IN:
			return action.authedUser;
		default:
			return state;
	}
}
