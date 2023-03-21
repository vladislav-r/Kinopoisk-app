import { BrowserRouter, Route, Routes } from 'react-router-dom';
import App from '../../App';
import FilmPage from '../../pages/film/FilmPage';
import Home from '../../pages/home/Home';

function Router() {
	return (
		<Routes>
			<Route element={<App />} path='/' />
			<Route element={<App />} path='/shop' />
			<Route element={<FilmPage />} path='/films/:filmId' />
		</Routes>
	);
}

export default Router;
