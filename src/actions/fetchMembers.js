import { ACTION_TYPE } from './action-type';
import { START_LOADING } from './start-loading';
import { END_LOADING } from './end-loading';

export const fetchMembers = () => async (dispatch) => {
	dispatch(START_LOADING);
	try {
		// Нормализуем BASE_URL (добавляем / в конец если отсутствует)
		const BASE_URL = import.meta.env.BASE_URL.endsWith('/')
			? import.meta.env.BASE_URL
			: `${import.meta.env.BASE_URL}/`;

		const response = await fetch(`${BASE_URL}db.json`);
		const data = await response.json();

		// Функция для корректировки путей изображений
		const correctImagePaths = (member) => {
			// Удаляем ведущий / из оригинальных путей, если есть
			const normalizePath = (path) => (path.startsWith('/') ? path.slice(1) : path);

			return {
				...member,
				avatar: `${BASE_URL}${normalizePath(member.avatar)}`,
				works: member.works.map((work) => ({
					...work,
					image: `${BASE_URL}${normalizePath(work.image)}`,
				})),
			};
		};

		const correctedMembers = data.members.map(correctImagePaths);

		dispatch({
			type: ACTION_TYPE.GET_MEMBERS,
			payload: correctedMembers,
		});
	} catch (error) {
		console.error('Error: Failed to fetch members', error);
		dispatch({
			type: ACTION_TYPE.FETCH_MEMBERS_ERROR,
			payload: error.message,
		});
	} finally {
		dispatch(END_LOADING);
	}
};
