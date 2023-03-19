import Header from './components/Header/Header';
import Home from './pages/home/Home';
import FILMS from './FILMS.json';

const App = () => {
	return (
		<>
			<Header />
			<div className='content'>
				<Home films={FILMS} />
			</div>
			{/* <video src='https://youtu.be/3QPeynQ_sio' style={{ width: 560, height: 400 }} controls /> */}
		</>
	);
};

export default App;
