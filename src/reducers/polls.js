import { LOAD_DATA, NEW_POLL, SAVE_POLL } from '../actions/constants';

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
		case SAVE_POLL:
			return {
				...state,
				[action.poll.qid]: {
					...state[action.poll.qid],
					[action.poll.answer]: {
						...state[action.poll.qid][action.poll.answer],
						votes: [
							...state[action.poll.qid][action.poll.answer].votes,
							action.poll.authedUser,
						],
					},
				},
			};
		default:
			return state;
	}
}
