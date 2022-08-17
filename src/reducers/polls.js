import { LOAD_DATA } from '../actions/constants';

export default function polls(state = {}, action) {
	switch (action.type) {
		case LOAD_DATA:
			return action.polls;
		default:
			return state;
	}
}
