import { NavLink } from 'react-router-dom';
import { Breadcrumbs } from '../';
import styles from './Header.module.css';

export const Header = () => {
	return (
		<header className={styles.header}>
			<nav className={styles.nav}>
				<NavLink
					to="/"
					className={({ isActive }) => (isActive ? styles.active : styles.link)}
				>
					Главная
				</NavLink>
				<NavLink
					to="/favorites"
					className={({ isActive }) => (isActive ? styles.active : styles.link)}
				>
					Избранное
				</NavLink>
			</nav>
			<Breadcrumbs />
		</header>
	);
};
