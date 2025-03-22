import PropTypes from 'prop-types';
import styles from './badge.module.css';

export const Badge = ({ color, role }) => {
	return (
		<div
			className={styles.badge}
			style={{ backgroundColor: color }}
		>
			{role}
		</div>
	);
};

Badge.propTypes = {
	color: PropTypes.string.isRequired,
	role: PropTypes.string.isRequired,
};
