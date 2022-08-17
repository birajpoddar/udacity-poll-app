import { LOAD_DATA } from '../actions/constants';

export default function users(state = {}, action) {
	switch (action.type) {
		case LOAD_DATA:
			return action.users;
		default:
			return state;
	}
}
