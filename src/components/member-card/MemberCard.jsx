import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { FavoriteButton, Button } from '../';
import PropTypes from 'prop-types';
import styles from './member-card.module.css';

export const MemberCard = ({
	id,
	name,
	surname,
	avatar,
	about,
	isFavorite,
	addMemberCardToFavorites,
	removeMemberCardFromFavorites,
}) => {
	const dispatch = useDispatch();

	return (
		<div className={styles.card}>
			<img
				src={avatar}
				alt={`${name} ${surname}`}
			/>
			<h3>
				{name} {surname}
			</h3>
			<p>{about}</p>
			<div className={styles.buttons}>
				<Button>
					<Link to={`/member/${id}`}>Подробнее...</Link>
				</Button>
				{isFavorite ? (
					<FavoriteButton
						color={'#3b82f6'}
						onClick={() => removeMemberCardFromFavorites(dispatch, id)}
					/>
				) : (
					<FavoriteButton
						color={'#000'}
						onClick={() => addMemberCardToFavorites(dispatch, id)}
					/>
				)}
			</div>
		</div>
	);
};

MemberCard.propTypes = {
	id: PropTypes.string.isRequired,
	name: PropTypes.string.isRequired,
	surname: PropTypes.string.isRequired,
	avatar: PropTypes.string.isRequired,
	about: PropTypes.string.isRequired,
	isFavorite: PropTypes.bool.isRequired,
	addMemberCardToFavorites: PropTypes.func.isRequired,
	removeMemberCardFromFavorites: PropTypes.func.isRequired,
};
