import { Link } from 'react-router-dom';
import { Info, Button } from '../../components';
import styles from './NotFoundPage.module.css';

export const NotFoundPage = () => {
	return (
		<Info>
			<h1 className={styles.title}>404</h1>
			<p>Ошибка: такая страница не найдена</p>
			<Button>
				<Link to="/">Вернуться на главную</Link>
			</Button>
		</Info>
	);
};
