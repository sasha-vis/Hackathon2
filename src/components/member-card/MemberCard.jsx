import { Link } from 'react-router-dom';
import { FavoriteButton, Button } from '../';
import styles from './member-card.module.css';

export const MemberCard = ({
	id,
	name,
	surname,
	avatar,
	about,
	isFavorite,
	addMemberCardToFavorites,
	removeCardFromFavorites,
}) => {
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
				<Button>
					<Link to={`/member/${id}`}>Подробнее...</Link>
				</Button>
				{isFavorite ? (
					<FavoriteButton
						color={'#3b82f6'}
						onClick={() => removeCardFromFavorites(id)}
					/>
				) : (
					<FavoriteButton
						color={'#000'}
						onClick={() => addMemberCardToFavorites(id)}
					/>
				)}
			</div>
		</div>
	);
};
