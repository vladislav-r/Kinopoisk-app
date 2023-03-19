import Header from './components/Header/Header';
import Intro from './components/Intro/Intro';
import FILMS from './FILMS.json';

const App = () => {
	return (
		<>
			<Header />
			<Intro movie={FILMS[Math.floor(Math.random() * 2)]} />
		</>
	);
};

export default App;
