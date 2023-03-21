import React from 'react';
import { Link } from 'react-router-dom';
import Intro from './../../components/Intro/Intro';
import MoviesSlider from './../../components/MoviesSlider/MoviesSlider';
import FILMS from '../../FILMS.json';
import MovieSection from '../../components/MovieSection/MovieSection';

function Home() {
	const [isMovieSectionOpen, setIsMovieSectionOpen] = React.useState(false);
	const [sectionMovie, setSectionMovie] = React.useState({});
	if (!FILMS) return <h1 style={{ paddingTop: 100 }}>Загрузка...</h1>;

	return (
		<>
			<Intro movie={FILMS[Math.floor(Math.random() * FILMS.length)]} />
			<section style={{ paddingTop: '50px' }}>
				<div className='container'>
					<Link
						to={'/recomended'}
						style={{ color: '#fff', display: 'flex', alignItems: 'flex-end' }}>
						{/* prettier-ignore */}
						<h1 > Рекомендуемое </h1>
						<i style={{ fontSize: '30px' }} className='bx bx-chevron-right'></i>
					</Link>
					<MoviesSlider
						setSectionMovie={setSectionMovie}
						isOpen={isMovieSectionOpen}
						sectionMovie={sectionMovie}
						setIsOpen={b => setIsMovieSectionOpen(b)}
					/>
				</div>

				{isMovieSectionOpen && (
					<MovieSection movie={sectionMovie} setIsOpen={b => setIsMovieSectionOpen(b)} />
				)}
			</section>
		</>
	);
}

export default Home;
