import { BrowserRouter, Route, Routes } from 'react-router-dom';
import App from '../../App';

function Router() {
	return (
		<BrowserRouter>
			<Routes>
				<Route element={<App />} path='/' />
				<Route element={<App />} path='/shop' />
			</Routes>
		</BrowserRouter>
	);
}

export default Router;
