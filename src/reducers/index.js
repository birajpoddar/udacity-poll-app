import { combineReducers } from 'redux';
import users from './users';
import polls from './polls';
import authedUser from './authedUser';

export default combineReducers({ users, polls, authedUser });
