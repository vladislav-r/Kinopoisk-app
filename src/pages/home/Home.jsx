import React from 'react';
import Intro from './../../components/Intro/Intro';
import FilmsSlider from './../../components/FilmsSlider/FilmsSlider';
import FILMS from '../../FILMS.json';

function Home() {
	return (
		<>
			<Intro movie={FILMS[Math.floor(Math.random() * FILMS.length)]} />
			<section style={{ paddingTop: '50px' }}>
				<div className='container'>
					<h1>Популярное</h1>
					<FilmsSlider films={FILMS} />
				</div>
			</section>
		</>
	);
}

export default Home;
