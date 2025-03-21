import { ACTION_TYPE } from '../actions';

const getInitialFavorites = () => {
	const favorites = localStorage.getItem('favorites');
	return favorites ? JSON.parse(favorites) : [];
};

const initialFavoritesState = getInitialFavorites();

export const favoritesReducer = (state = initialFavoritesState, action) => {
	switch (action.type) {
		case ACTION_TYPE.ADD_TO_FAVORITES:
			const newFavoritesAdd = [...state, action.payload];
			localStorage.setItem('favorites', JSON.stringify(newFavoritesAdd));
			return newFavoritesAdd;

		case ACTION_TYPE.REMOVE_FROM_FAVORITES:
			const newFavoritesRemove = state.filter((id) => id !== action.payload);
			localStorage.setItem('favorites', JSON.stringify(newFavoritesRemove));
			return newFavoritesRemove;

		default:
			return state;
	}
};
