import { ACTION_TYPE } from './action-type';

export const addToFavorites = (id) => ({
	type: ACTION_TYPE.ADD_TO_FAVORITES,
	payload: id,
});
