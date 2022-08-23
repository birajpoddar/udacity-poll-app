import { LOAD_DATA, NEW_POLL } from '../actions/constants';

export default function polls(state = {}, action) {
	switch (action.type) {
		case LOAD_DATA:
			return {
				...state,
				...action.polls,
			};
		case NEW_POLL:
			return {
				...state,
				[action.poll.id]: action.poll,
			};
		default:
			return state;
	}
}
