import { MemberCard } from '../';
import { selectFavorites } from '../../selectors';
import { useDispatch, useSelector } from 'react-redux';
import { addToFavorites, removeFromFavorites } from '../../actions';
import styles from './MemberCardList.module.css';

export const MemberCardList = ({ members }) => {
	const favorites = useSelector(selectFavorites);
	const dispatch = useDispatch();

	const addMemberCardToFavorites = (id) => {
		dispatch(addToFavorites(id));
	};

	const removeCardFromFavorites = (id) => {
		dispatch(removeFromFavorites(id));
	};

	return (
		<div className={styles.cardList}>
			{members.map((member) => (
				<MemberCard
					key={member.id}
					{...member}
					isFavorite={favorites.includes(member.id)}
					addMemberCardToFavorites={() => addMemberCardToFavorites(member.id)}
					removeCardFromFavorites={() => removeCardFromFavorites(member.id)}
				/>
			))}
		</div>
	);
};
