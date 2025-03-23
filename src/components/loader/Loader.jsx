import styles from './loader.module.css';

const Loader = () => {
	return (
		<div className={styles.loaderContainer}>
			<div className={styles.spinner}></div>
			<p className={styles.text}>Загрузка...</p>
		</div>
	);
};

export default Loader;
