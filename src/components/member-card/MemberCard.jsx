import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { addToFavorites, removeFromFavorites } from '../../actions';
import { selectFavorites } from '../../selectors';
import { FavoriteButton } from '../favorite-button/FavotireButton';
import PropTypes from 'prop-types';
import styles from './member-card.module.css';
import { Badge } from '../badge/Badge ';

export const MemberCard = ({ id, name, surname, avatar, about, role }) => {
	const favoritesMembers = useSelector(selectFavorites);
	const dispatch = useDispatch();

	const addMemberCardToFavorite = () => {
		dispatch(addToFavorites(id));
	};

	const removeCardFromFavorites = () => {
		dispatch(removeFromFavorites(id));
	};

	const isfavorite = favoritesMembers.includes(id);
	return (
		<div className={styles.card}>
			<Badge
				color={role === 'Тимлид' ? 'purple' : '#3b82f6'}
				role={role}
			/>
			<img
				src={avatar}
				alt={`${name} ${surname}`}
			/>
			<h3>
				{name} {surname}
			</h3>
			<p>{about}</p>
			<div className={styles.buttons}>
				<Link
					to={`/member/${id}`}
					className={styles.detailed}
				>
					Подробнее...
				</Link>
				{isfavorite ? (
					<FavoriteButton
						color={'#3b82f6'}
						onClick={removeCardFromFavorites}
					/>
				) : (
					<FavoriteButton
						color={'#000'}
						onClick={addMemberCardToFavorite}
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
	role: PropTypes.string.isRequired,
};
