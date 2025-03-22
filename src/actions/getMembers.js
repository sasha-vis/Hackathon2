import { ACTION_TYPE } from './action-type';

export const getMembers = (members) => ({
	type: ACTION_TYPE.GET_MEMBERS,
	payload: members,
});
