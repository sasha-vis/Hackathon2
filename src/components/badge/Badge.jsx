import { ROLES } from './constans';
import styles from './badge.module.css';
import PropTypes from 'prop-types';

export const Badge = ({ roleId }) => {
	const role = ROLES.find((role) => role.id === roleId);

	if (!role) return null;

	return (
		<div
			className={styles.badge}
			style={{ backgroundColor: role.color }}
		>
			{role.name}
		</div>
	);
};

Badge.propTypes = {
	roleId: PropTypes.string.isRequired,
};
