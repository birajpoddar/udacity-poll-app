import { _saveQuestion } from '../utils/_DATA';
import { NEW_POLL } from './constants';

export const handleNewPoll = ({ optionOneText, optionTwoText, author }) => {
	const question = { optionOneText, optionTwoText, author };

	return (dispatch) => {
		_saveQuestion(question).then((poll) => {
			dispatch(addPollToState(poll));
		});
	};
};

const addPollToState = (poll) => {
	return {
		type: NEW_POLL,
		poll,
	};
};
