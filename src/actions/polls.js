import { _saveQuestion, _saveQuestionAnswer } from '../utils/_DATA';
import { NEW_POLL, SAVE_POLL } from './constants';

export const handleNewPoll = (question) => {
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

export const handlePollAnswer = (answer) => {
	return (dispatch) => {
		_saveQuestionAnswer(answer).then(() => {
			console.log(answer);
			dispatch(savePollAnswer(answer));
		});
	};
};

const savePollAnswer = (answer) => {
	return {
		type: SAVE_POLL,
		poll: answer,
	};
};
