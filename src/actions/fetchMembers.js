import { ACTION_TYPE } from './action-type';

export const fetchMembers = () => async (dispatch) => {
	try {
		const response = await fetch('../../db.json');
		const data = await response.json();

		dispatch({ type: ACTION_TYPE.GET_MEMBERS, payload: data.members });
	} catch (error) {
		console.log('Error');
	}
};
