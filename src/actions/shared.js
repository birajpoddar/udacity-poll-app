import { _getQuestions } from '../utils/_DATA';
import { _getFormattedUsers } from '../utils/dataFormatter';
import { LOAD_DATA } from './constants';

export function loadData() {
	return (dispatch) => {
		return Promise.all([_getFormattedUsers(), _getQuestions()]).then(
			([users, polls]) => {
				// dispatch(loadUsers(users))
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
		loading: true,
	};
}
