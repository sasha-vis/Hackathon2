import { FaHeart } from 'react-icons/fa';
import PropTypes from 'prop-types';
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

FavoriteButton.propTypes = {
	color: PropTypes.string,
	onClick: PropTypes.func.isRequired,
};
