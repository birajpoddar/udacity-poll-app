import { NEW_POLL } from './constants';

export const addPollToUsers = (poll) => {
	return {
		type: NEW_POLL,
		pollId: poll.id,
		authorId: poll.author,
	};
};
