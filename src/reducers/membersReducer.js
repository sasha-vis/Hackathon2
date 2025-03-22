import { ACTION_TYPE } from '../actions';

const initialMembersState = [];

export const membersReducer = (state = initialMembersState, action) => {
	switch (action.type) {
		case ACTION_TYPE.GET_MEMBERS:
			return action.payload;
		default:
			return state;
	}
};
