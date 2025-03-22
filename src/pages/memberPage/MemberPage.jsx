import React from 'react';
import { MemberProfile } from '../../components';
import styles from './MemberPage.module.css';

export const MemberPage = () => {
	const memberData = {
		firstName: 'Андрей',
		lastName: 'Лазурко',
		age: 36,
		about: 'Опытный frontend-разработчик с страстью к созданию удобных пользовательских интерфейсов.',
		photo: '/img/rasgis.jpg',
		defaultImage: '/img/rasgis.jpg',
		socialLinks: {
			github: 'https://github.com/rasgis',
			vk: 'https://vk.com/rasgis',
			telegram: 'https://t.me/zovrasgis',
		},
		projectContribution:
			'Разработал компоненты пользовательского интерфейса, создал компонент пользователя, создал виджет погоды и страницу NotFound.',
	};

	return (
		<div className={styles.container}>
			<MemberProfile {...memberData} />
		</div>
	);
};
