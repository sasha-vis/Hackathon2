import { addToFavorites } from '../actions';

export const addMemberCardToFavorites = (dispatch, id) => {
	dispatch(addToFavorites(id));
};
