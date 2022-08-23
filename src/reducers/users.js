import { LOAD_DATA, NEW_POLL } from '../actions/constants';

export default function users(state = {}, action) {
	switch (action.type) {
		case LOAD_DATA:
			return {
				...state,
				...action.users,
			};
		case NEW_POLL:
			return {
				...state,
				[action.poll.author]: {
					...state[action.poll.author],
					questions: [...state[action.poll.author].questions, action.poll.id],
				},
			};
		// case SAVE_POLL:
		// 	const answers = state[action.poll.author].answers;
		// 	answers[action.poll.id];
		default:
			return state;
	}
}
