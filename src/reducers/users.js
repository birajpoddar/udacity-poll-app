import { LOAD_DATA, NEW_POLL, SAVE_POLL } from '../actions/constants';

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
		case SAVE_POLL:
			return {
				...state,
				[action.poll.authedUser]: {
					...state[action.poll.authedUser],
					answers: {
						...state[action.poll.authedUser].answers,
						[action.poll.id]: action.poll.answer,
					},
				},
			};
		default:
			return state;
	}
}
