import PropTypes from 'prop-types';
import { useState } from 'react';
import styles from './WorkSlider.module.css';

export const WorksSlider = ({ works }) => {
	const [startIndex, setStartIndex] = useState(0);

	if (!works || works.length === 0) {
		return <div>Нет доступных работ</div>;
	}

	const nextSlide = () => {
		setStartIndex((prevIndex) => (prevIndex + 1 >= works.length ? 0 : prevIndex + 1));
	};

	const prevSlide = () => {
		setStartIndex((prevIndex) =>
			prevIndex === 0 ? works.length - 1 : prevIndex - 1,
		);
	};

	const getCircularIndex = (index) => {
		return ((index % works.length) + works.length) % works.length;
	};

	const visibleWorks = [
		works[getCircularIndex(startIndex - 1)],
		works[startIndex],
		works[getCircularIndex(startIndex + 1)],
	];

	return (
		<div className={styles.sliderWrapper}>
			<button
				className={styles.arrowLeft}
				onClick={prevSlide}
			>
				{'<'}
			</button>

			<div className={styles.container}>
				{visibleWorks.map((work, index) => (
					<div
						key={`${work.id}-${index}`}
						className={`${styles.slide} ${index === 1 ? styles.active : ''}`}
						onClick={() => {
							if (index === 0) prevSlide();
							if (index === 2) nextSlide();
						}}
						style={{
							backgroundImage: `url(${work.image})`,
						}}
					>
						<div className={styles.overlay} />
						<h3>{work.title}</h3>
					</div>
				))}
			</div>

			<button
				className={styles.arrowRight}
				onClick={nextSlide}
			>
				{'>'}
			</button>
		</div>
	);
};

WorksSlider.propTypes = {
	works: PropTypes.arrayOf(
		PropTypes.shape({
			id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
			title: PropTypes.string.isRequired,
			image: PropTypes.string.isRequired,
		}),
	).isRequired,
};
