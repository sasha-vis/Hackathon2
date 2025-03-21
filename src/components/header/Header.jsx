import { NavLink } from 'react-router-dom';
import { Breadcrumbs } from './BreadCrumbs/BreadCrumbs';
import styles from './Header.module.css';

export const Header = () => {
	return (
		<div className={styles.Header}>
			<nav className={styles.nav}>
				<NavLink to="/" className={({ isActive }) => isActive && styles.active}>
					Главная
				</NavLink>
				<NavLink
					to="/favorites"
					className={({ isActive }) => isActive && styles.active}
				>
					Избранное
				</NavLink>
			</nav>
			<Breadcrumbs />
		</div>
	);
};
