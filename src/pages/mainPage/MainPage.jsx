import React from 'react';
import { WeatherWidget } from '../../components/weatherWidget/WeatherWidget';
import styles from './MainPage.module.css';

export const MainPage = () => {
	return (
		<div className={styles.MainPage}>
			<div className={styles.weatherContainer}>
				<WeatherWidget />
			</div>
		</div>
	);
};
