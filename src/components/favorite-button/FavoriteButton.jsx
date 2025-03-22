import { FaHeart } from 'react-icons/fa';
import styles from './favorite-button.module.css';

export const FavoriteButton = ({ color, onClick }) => {
	return (
		<button
			className={styles['favorite-button']}
			style={{ color: color }}
			onClick={onClick}
		>
			<FaHeart />
		</button>
	);
};
