import React, { useEffect } from 'react';
import { WeatherWidget } from '../../components';
import { useDispatch, useSelector } from 'react-redux';
import { selectMembers } from '../../selectors';
import { fetchMembers } from '../../actions';
import styles from './MainPage.module.css';

export const MainPage = () => {
	const dispatch = useDispatch();
	const members = useSelector(selectMembers);

	useEffect(() => {
		dispatch(fetchMembers());
	}, [dispatch]);

	console.log(members);

	return (
		<div className={styles.MainPage}>
			<div className={styles.weatherContainer}>
				<WeatherWidget />
			</div>
		</div>
	);
};
