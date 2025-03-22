import React, { useEffect, useState } from 'react';
import styles from './WeatherWidget.module.css';
import { WEATHER_ICONS, getWeatherType, getTemperatureType } from './WeatherUtils';

// interface WeatherData {
// 	temperature: number;
// 	condition: string;
// 	humidity: number;
// 	windSpeed: number;
// 	city: string;
// }

const STORAGE_KEY = 'weather_city';

export const WeatherWidget = () => {
	// const [weather, setWeather] =
	// 	useState <
	// 	WeatherData >
	// 	{
	// 		temperature: 0,
	// 		condition: 'sunny',
	// 		humidity: 0,
	// 		windSpeed: 0,
	// 		city: '',
	// 	};
	const [weather, setWeather] = useState({
		temperature: 0,
		condition: 'sunny',
		humidity: 0,
		windSpeed: 0,
		city: '',
	});
	const [loading, setLoading] = useState(true);
	const [isModalOpen, setIsModalOpen] = useState(false);
	const [newCity, setNewCity] = useState('');
	const [error, setError] = useState('');

	const getWeatherIcon = (condition) => {
		const weatherType = getWeatherType(condition);
		const IconComponent = WEATHER_ICONS[weatherType];
		return <IconComponent className={styles.weatherIcon} />;
	};

	const getWeatherClass = (temperature, condition) => {
		const temperatureType = getTemperatureType(temperature);
		const weatherType = getWeatherType(condition);
		return `${styles.weatherWidget} ${styles[temperatureType]} ${styles[weatherType]}`;
	};

	const fetchWeather = (city) => {
		setLoading(true);
		setError('');
		fetch(
			`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&lang=ru&appid=df89244c7d25e01ef07fc0f9f1715a8d`,
		)
			.then((response) => {
				if (!response.ok) {
					throw new Error('Город не найден');
				}
				return response.json();
			})
			.then(({ name, main, weather, wind }) => {
				setWeather({
					temperature: Math.round(main.temp),
					condition: weather[0].description,
					humidity: main.humidity,
					windSpeed: Math.round(wind.speed),
					city: name,
				});
				localStorage.setItem(STORAGE_KEY, name);
				setIsModalOpen(false);
				setNewCity('');
			})
			.catch((error) => {
				setError(error.message);
				console.error('Ошибка при получении данных о погоде:', error);
			})
			.finally(() => setLoading(false));
	};

	useEffect(() => {
		const savedCity = localStorage.getItem(STORAGE_KEY);
		fetchWeather(savedCity || 'Yessentuki');
	}, []);

	const handleSubmit = (e) => {
		e.preventDefault();
		if (newCity.trim()) {
			fetchWeather(newCity.trim());
		}
	};

	if (loading) {
		return <div className={styles.weatherWidget}>Загрузка...</div>;
	}

	return (
		<>
			<div
				className={getWeatherClass(weather.temperature, weather.condition)}
				onClick={() => setIsModalOpen(true)}
				style={{ cursor: 'pointer' }}
			>
				<div className={styles.weatherContent}>
					<div className={styles.mainInfo}>
						<div className={styles.iconContainer}>
							{getWeatherIcon(weather.condition)}
						</div>
						<div className={styles.temperatureInfo}>
							<div className={styles.temperature}>
								{weather.temperature}°C
							</div>
							<div className={styles.city}>{weather.city}</div>
						</div>
					</div>
					<div className={styles.details}>
						<div className={styles.detail}>
							<span>Влажность</span>
							<span>{weather.humidity}%</span>
						</div>
						<div className={styles.detail}>
							<span>Ветер</span>
							<span>{weather.windSpeed} м/с</span>
						</div>
					</div>
				</div>
			</div>

			{isModalOpen && (
				<div
					className={styles.modalOverlay}
					onClick={() => setIsModalOpen(false)}
				>
					<div
						className={styles.modal}
						onClick={(e) => e.stopPropagation()}
					>
						<h3>Введите название города</h3>
						<form onSubmit={handleSubmit}>
							<input
								type="text"
								value={newCity}
								onChange={(e) => setNewCity(e.target.value)}
								placeholder="Например: Москва"
								className={styles.input}
							/>
							{error && <div className={styles.error}>{error}</div>}
							<div className={styles.modalButtons}>
								<button
									type="submit"
									className={styles.submitButton}
								>
									Найти
								</button>
								<button
									type="button"
									className={styles.cancelButton}
									onClick={() => {
										setIsModalOpen(false);
										setNewCity('');
										setError('');
									}}
								>
									Отмена
								</button>
							</div>
						</form>
					</div>
				</div>
			)}
		</>
	);
};
