import { _getUsers } from './_DATA';

export const validateUser = async (id, password) => {
	const users = await _getUsers();

	if (users[id] !== undefined && users[id].password === password) {
		return Promise.resolve();
	} else {
		return Promise.reject();
	}
};
