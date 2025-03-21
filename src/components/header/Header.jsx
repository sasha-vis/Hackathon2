import { Link } from 'react-router-dom';
import styles from './Header.module.css';

export const Header = () => {
	return (
		<div className={styles.Header}>
			<button>
				<Link to="/">Главная</Link>
			</button>
			<button>
				<Link to="/favorites">Избранное</Link>
			</button>
		</div>
	);
};
