import { useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { fetchMembers } from './actions';
import { selectLoader } from './selectors';
import { MainPage, MemberPage, FavoritesPage, NotFoundPage } from './pages';
import { Header, WeatherWidget, Loader } from './components';
import styles from './App.module.css';

export const App = () => {
	const dispatch = useDispatch();
	const isLoading = useSelector(selectLoader);

	useEffect(() => {
		dispatch(fetchMembers());
	}, [dispatch]);

	return (
		<div className={styles.app}>
			<Header />
			{isLoading ? (
				<Loader />
			) : (
				<main className={styles.main}>
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
				</main>
			)}
			<WeatherWidget />
		</div>
	);
};
