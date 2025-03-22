import React from 'react';
import { Link } from 'react-router-dom';
import styles from './NotFoundPage.module.css';

export const NotFoundPage = () => {
	return (
		<div className={styles.notFoundContainer}>
			<div className={styles.content}>
				<h1 className={styles.title}>404</h1>
				<h2 className={styles.subtitle}>Страница не найдена</h2>
				<p className={styles.description}>
					Извините, но страница, которую вы ищете, не существует или была
					перемещена.
				</p>
				<Link
					to="/"
					className={styles.homeButton}
				>
					Вернуться на главную
				</Link>
			</div>
		</div>
	);
};
