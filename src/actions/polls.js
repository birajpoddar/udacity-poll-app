import { _saveQuestion } from '../utils/_DATA';
import { NEW_POLL } from './constants';

export const savePoll = ({ optionOneText, optionTwoText, author }) => {
	const question = { optionOneText, optionTwoText, author };

	return (dispatch) => {
		_saveQuestion(question).then((poll) => {
			dispatch(savePollToState(poll));
		});
	};
};

const savePollToState = (poll) => {
	return {
		type: NEW_POLL,
		poll,
	};
};
