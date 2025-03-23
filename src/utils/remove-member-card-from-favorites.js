import { removeFromFavorites } from '../actions';

export const removeMemberCardFromFavorites = (dispatch, id) => {
	dispatch(removeFromFavorites(id));
};
