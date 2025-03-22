import { Route, Routes } from 'react-router-dom';
import { Breadcrumbs, Header } from './components';
import { MainPage, MemberPage, FavoritesPage, NotFoundPage } from './pages';
import styles from './App.module.css';

export const App = () => {
	return (
		<div className={styles.App}>
			<Header />
			<Breadcrumbs />
			<Routes>
				<Route
					path="/"
					element={<MainPage></MainPage>}
				/>
				<Route
					path="/member/:id"
					element={<MemberPage></MemberPage>}
				/>
				<Route
					path="/favorites"
					element={<FavoritesPage></FavoritesPage>}
				/>
				<Route
					path="*"
					element={<NotFoundPage></NotFoundPage>}
				/>
			</Routes>
		</div>
	);
};
