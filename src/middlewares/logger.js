export const logger = (store) => (next) => (action) => {
	console.group(action.type);

	// Before State Change
	console.log('State before change:', store.getState());
	console.log('Current Action:', action);

	// After State Change
	const result = next(action);
	console.log('State after change:', store.getState());

	console.groupEnd();

	return result;
};
