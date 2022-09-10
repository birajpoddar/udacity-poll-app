import {
	LOGGED_IN,
	LOAD_DATA,
	LOGGED_OUT,
	NEW_POLL,
	SAVE_POLL,
} from '../actions/constants';

export default function authedUser(state = null, action) {
	switch (action.type) {
		case LOAD_DATA:
			return null;
		case LOGGED_IN:
		case LOGGED_OUT:
			return action.authedUser;
		case NEW_POLL:
			return {
				...state,
				questions: [...state.questions, action.poll.id],
			};
		case SAVE_POLL:
			return {
				...state,
				answers: {
					...state.answers,
					[action.poll.qid]: action.poll.answer,
				},
			};
		default:
			return state;
	}
}
