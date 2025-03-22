import { WiDaySunny, WiCloudy, WiRain, WiSnow, WiThunderstorm } from 'react-icons/wi';

export const WEATHER_ICONS = {
	sunny: WiDaySunny,
	cloudy: WiCloudy,
	rainy: WiRain,
	snowy: WiSnow,
	thunderstorm: WiThunderstorm,
};

export const WEATHER_CONDITIONS = {
	sunny: ['солн'],
	cloudy: ['облачн'],
	rainy: ['дожд'],
	snowy: ['снег'],
	thunderstorm: ['гроз'],
};

export const getWeatherType = (condition) => {
	const conditionLower = condition.toLowerCase();
	return (
		Object.entries(WEATHER_CONDITIONS).find(([_, keywords]) =>
			keywords.some((keyword) => conditionLower.includes(keyword)),
		)?.[0] || 'sunny'
	);
};

export const getTemperatureType = (temperature) => {
	if (temperature >= 25) return 'hot';
	if (temperature >= 10) return 'warm';
	return 'cold';
};
