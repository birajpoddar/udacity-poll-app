import { combineReducers } from 'redux';
import users from './users';
import polls from './polls';
import authedUser from './authedUser';
import loading from './loading';

export default combineReducers({
	users,
	polls,
	authedUser,
	loading,
});
