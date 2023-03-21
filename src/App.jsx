import { Route, Routes } from 'react-router-dom';

import Header from './components/Header/Header';
import Home from './pages/home/Home';
import Recomended from './pages/recomended/Recomended';
import FilmPage from './pages/film/FilmPage';
import PlayerPage from './pages/PlayerPage/PlayerPage';

const App = () => {
	return (
		<>
			<Header />
			<div className='content'>
				<Routes>
					<Route element={<Home />} path='/' />
					<Route element={<Home />} path='/shop' />
					<Route element={<Recomended />} path='/recomended' />
					<Route element={<FilmPage />} path='/films/:filmId' />
					<Route element={<PlayerPage />} path='/films/:filmId/watch' />
				</Routes>
			</div>
			{/* <video src='https://youtu.be/3QPeynQ_sio' style={{ width: 560, height: 400 }} controls /> */}
		</>
	);
};

export default App;
