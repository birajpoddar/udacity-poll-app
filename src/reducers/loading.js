import { LOAD_DATA } from '../actions/constants';

export default function loading(state = false, action) {
	switch (action.type) {
		case LOAD_DATA:
			return true;
		default:
			return state;
	}
}
