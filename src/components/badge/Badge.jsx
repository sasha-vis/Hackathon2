import styles from './badge.module.css';

const roles = [
	{ id: '1', name: 'Тимлид', color: 'gold' },
	{ id: '2', name: 'Разработчик', color: 'blue' },
];

export const Badge = ({ roleId }) => {
	const role = roles.find((role) => role.id === roleId);

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
