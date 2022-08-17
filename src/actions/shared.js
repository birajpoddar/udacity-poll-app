import { _getUsers, _getQuestions } from '../utils/_DATA';
import { LOAD_DATA } from './constants';

export function loadData() {
	return (dispatch) => {
		return Promise.all([_getUsers(), _getQuestions()]).then(
			([users, polls]) => {
				dispatch(loadInitialData(users, polls));
			}
		);
	};
}

function loadInitialData(users, polls) {
	return {
		type: LOAD_DATA,
		users,
		polls,
		authedUser: null,
	};
}
