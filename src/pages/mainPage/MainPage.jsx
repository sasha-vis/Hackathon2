import React, { useEffect } from 'react';
import { MemberCard, WeatherWidget } from '../../components';
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

	return (
		<div className={styles.MainPage}>
			<div className={styles.info}>
				<h1>Team #1</h1>
				<p>
					Простой сайт для практики навыков, где вы можете просматривать
					карточки с информацией о разработчиках и управлять списком избранных:
					добавляйте или удаляйте карточки из избранных.
				</p>
			</div>
			<div className={styles.members}>
				{members.map(({ id, name, surname, avatar, about }) => (
					<MemberCard
						key={id}
						id={id}
						name={name}
						surname={surname}
						avatar={avatar}
						about={about}
					/>
				))}
			</div>

			<div className={styles.weatherContainer}>
				<WeatherWidget />
			</div>
		</div>
	);
};
