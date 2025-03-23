import { useSelector } from 'react-redux';
import { selectMembers, selectFavorites } from '../../selectors';
import { Info, MemberCardList } from '../../components';

export const FavoritesPage = () => {
	const members = useSelector(selectMembers);
	const favorites = useSelector(selectFavorites);

	const favoritesMembers = members.filter(({ id }) => {
		return favorites.includes(id);
	});

	return (
		<>
			<Info>
				<h1>Избранное</h1>
				<p>Избранное, где сохранены выбранные карточки разработчиков</p>
			</Info>

			<MemberCardList members={favoritesMembers} />
		</>
	);
};
