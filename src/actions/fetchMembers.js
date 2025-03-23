import { ACTION_TYPE } from './action-type';
import { START_LOADING } from './start-loading';
import { END_LOADING } from './end-loading'

export const fetchMembers = () => async (dispatch) => {
	dispatch(START_LOADING);
	try {
		const response = await fetch('../../db.json');
		const data = await response.json();

		dispatch({ type: ACTION_TYPE.GET_MEMBERS, payload: data.members });
	} catch (error) {
		console.log('Error');
	}
	dispatch(END_LOADING);
};
