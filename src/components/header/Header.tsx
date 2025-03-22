import React from 'react';
import { NavLink } from 'react-router-dom';
import { Breadcrumbs } from './BreadCrumbs/BreadCrumbs';
import styles from './Header.module.css';

export const Header = () => {
	return (
		<header className={styles.header}>
			<div className={styles.container}>
				<div className={styles.logo}>
					<h1>Hackathon2</h1>
				</div>
				<nav className={styles.nav}>
					<NavLink
						to="/"
						className={({ isActive }) =>
							isActive ? styles.active : styles.link
						}
					>
						Главная
					</NavLink>
					<NavLink
						to="/favorites"
						className={({ isActive }) =>
							isActive ? styles.active : styles.link
						}
					>
						Избранное
					</NavLink>
				</nav>
			</div>
			<Breadcrumbs />
		</header>
	);
};

