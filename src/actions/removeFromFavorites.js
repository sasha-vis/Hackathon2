import { ACTION_TYPE } from './action-type';

export const removeFromFavorites = (id) => ({
	type: ACTION_TYPE.REMOVE_FROM_FAVORITES,
	payload: id,
});
