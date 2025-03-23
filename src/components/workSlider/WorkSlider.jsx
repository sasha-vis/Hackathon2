import { useState } from 'react';
import styles from './WorkSlider.module.css';

export const WorksSlider = ({ works }) => {
	const [currentIndex, setCurrentIndex] = useState(0);

	const nextSlide = () => {
		setCurrentIndex((prevIndex) =>
			prevIndex === works.length - 1 ? 0 : prevIndex + 1,
		);
	};

	const prevSlide = () => {
		setCurrentIndex((prevIndex) =>
			prevIndex === 0 ? works.length - 1 : prevIndex - 1,
		);
	};

	if (!works || works.length === 0) {
		return <div>Нет доступных работ</div>;
	}

	return (
		<div className={styles.slider}>
			<button
				className={styles.arrowLeft}
				onClick={prevSlide}
			>
				&#8592;
			</button>

			<div className={styles.slideContainer}>
				<img
					src={works[currentIndex].image}
					alt={works[currentIndex].title}
					className={styles.slide}
				/>
				<p className={styles.title}>{works[currentIndex].title}</p>
			</div>

			<button
				className={styles.arrowRight}
				onClick={nextSlide}
			>
				&#8594;
			</button>

			<div className={styles.dots}>
				{works.map((_, index) => (
					<span
						key={index}
						className={`${styles.dot} ${index === currentIndex ? styles.activeDot : ''}`}
						onClick={() => setCurrentIndex(index)}
					/>
				))}
			</div>
		</div>
	);
};
