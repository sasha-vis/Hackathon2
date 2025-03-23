import { ACTION_TYPE } from '../actions';

const initialLoaderState = false;

export const loaderReducer = (state = initialLoaderState, action) => {
	switch (action.type) {
		case ACTION_TYPE.START_LOADING:
			return action.payload;
		case ACTION_TYPE.END_LOADING:
			return action.payload;
		default:
			return state;
	}
};
