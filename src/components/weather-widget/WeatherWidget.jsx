import React, { useEffect, useState } from 'react';
import { WiDaySunny, WiCloudy, WiRain, WiSnow, WiThunderstorm } from 'react-icons/wi';
import styles from './WeatherWidget.module.css';

const STORAGE_KEY = 'weather_city';

export const WeatherWidget = () => {
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
	const [isHovered, setIsHovered] = useState(false);

	const getWeatherIcon = (condition) => {
		const conditionLower = condition.toLowerCase();
		if (conditionLower.includes('солн'))
			return <WiDaySunny className={styles.weatherIcon} />;
		if (conditionLower.includes('облачн'))
			return <WiCloudy className={styles.weatherIcon} />;
		if (conditionLower.includes('дожд'))
			return <WiRain className={styles.weatherIcon} />;
		if (conditionLower.includes('снег'))
			return <WiSnow className={styles.weatherIcon} />;
		if (conditionLower.includes('гроз'))
			return <WiThunderstorm className={styles.weatherIcon} />;
		return <WiDaySunny className={styles.weatherIcon} />;
	};

	const fetchWeather = (city) => {
		setLoading(true);
		setError('');
		fetch(
			`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&lang=ru&appid=df89244c7d25e01ef07fc0f9f1715a8d`,
		)
			.then((response) => {
				if (!response.ok) throw new Error('Город не найден');
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

	if (loading) return null;

	return (
		<div className={styles.weatherWidgetContainer}>
			{isHovered && !isModalOpen && (
				<div
					className={styles.weatherWidget}
					style={{ cursor: 'pointer' }}
				>
					<div className={styles.location}>
						<h2>{weather.city}</h2>
					</div>
					<div className={styles.weatherInfo}>
						<div className={styles.mainInfo}>
							{getWeatherIcon(weather.condition)}
							<div className={styles.temperature}>
								{weather.temperature}°C
							</div>
						</div>
						<div className={styles.condition}>{weather.condition}</div>
						<div className={styles.details}>
							<div className={styles.detail}>
								<span>Влажность: {weather.humidity}%</span>
							</div>
							<div className={styles.detail}>
								<span>Ветер: {weather.windSpeed} м/с</span>
							</div>
						</div>
					</div>
				</div>
			)}

			<button
				className={styles.toggleButton}
				onMouseEnter={() => setIsHovered(true)}
				onMouseLeave={() => setIsHovered(false)}
				onClick={() => setIsModalOpen(true)}
			>
				{getWeatherIcon(weather.condition)}
			</button>

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
		</div>
	);
};
