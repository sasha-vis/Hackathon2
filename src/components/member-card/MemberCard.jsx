import { Link } from 'react-router-dom';
import { FavoriteButton, Button } from '../';
import styles from './member-card.module.css';
import PropTypes from 'prop-types';

export const MemberCard = ({
	id,
	name,
	surname,
	avatar,
	about,
	isFavorite,
	dispatch,
	addMemberCardToFavorites,
	removeMemberCardFromFavorites,
}) => {
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
	dispatch: PropTypes.func.isRequired,
	addMemberCardToFavorites: PropTypes.func.isRequired,
	removeMemberCardFromFavorites: PropTypes.func.isRequired,
};
