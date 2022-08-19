import { _getUsers } from './_DATA';

export const _getFormattedUsers = async () => {
	const users = await _getUsers();
	const usersObj = JSON.parse(JSON.stringify(users));

	const keys = Object.keys(users);

	for (let i = 0; i < keys.length; i++) {
		delete usersObj[keys[i]].password;
	}

	return Promise.resolve(usersObj);
};
