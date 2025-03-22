import PropTypes from 'prop-types';
import styles from './progress.module.css';

export const Progress = ({ name, progress }) => {
	return (
		<div className={styles.container}>
			<p>{name}</p>
			<div className={styles['progress-container']}>
				<div
					className={styles.progress}
					style={{ width: `${progress * 10}%` }}
				>
					{progress * 10}%
				</div>
			</div>
		</div>
	);
};

Progress.propTypes = {
	name: PropTypes.string,
	progress: PropTypes.number,
};
