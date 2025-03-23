import { MemberCard } from '../';
import { selectFavorites } from '../../selectors';
import { useDispatch, useSelector } from 'react-redux';
import { addMemberCardToFavorites, removeMemberCardFromFavorites } from '../../utils';
import styles from './MemberCardList.module.css';
import PropTypes from 'prop-types';

export const MemberCardList = ({ members }) => {
	const favorites = useSelector(selectFavorites);

	return (
		<div className={styles.cardList}>
			{members.map((member) => (
				<MemberCard
					key={member.id}
					{...member}
					isFavorite={favorites.includes(member.id)}
					addMemberCardToFavorites={addMemberCardToFavorites}
					removeMemberCardFromFavorites={removeMemberCardFromFavorites}
				/>
			))}
		</div>
	);
};

MemberCardList.propTypes = {
	member: PropTypes.array.isRequired,
};
