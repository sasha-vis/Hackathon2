import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import styles from './breadcrumbs.module.css';

export const Breadcrumbs = () => {
	const location = useLocation();
	
	const pathnames = location.pathname.split('/').filter((x) => x && isNaN(x));

	return (
		<nav className={styles.breadcrumbs}>
			<ul>
				<li>
					<Link to="/">Главная</Link>
				</li>
				{pathnames.map((value, index) => {
					const to = `/${pathnames.slice(0, index + 1).join('/')}`;
					const isLast = index === pathnames.length - 1;

					return (
						<li key={to}>
							<span>/</span>
							{isLast ? (
								<span className={styles.last}>{value}</span>
							) : (
								<Link to={to}>{value}</Link>
							)}
						</li>
					);
				})}
			</ul>
		</nav>
	);
};
