import { Link, useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectMembers } from '../../selectors';
import styles from './Breadcrumbs.module.css';

export const Breadcrumbs = () => {
	const location = useLocation();
	const members = useSelector(selectMembers);

	const pathParts = location.pathname.split('/').filter(Boolean);
	if (pathParts.length < 2 || pathParts[0] !== 'member') return null;

	const userId = pathParts[1];
	const user = members.find((member) => member.id === userId);
	if (!user) return null;

	return (
		<div className={styles.breadcrumbs}>
			<span className={styles.first}>
				<Link to="/">Главная</Link>
			</span>
			<span className={styles.second}> / </span>
			<span className={styles.last}>
				{user.name} {user.surname}
			</span>
		</div>
	);
};
