import FavoritesButton from '../Buttons/FavoritesButton/FavoritesButton';
import styles from './Intro.module.scss';
import { Link } from 'react-router-dom';

let favorites = [];

function addFavorites(film) {
	console.log('favorites');
}

function Intro({ movie }) {
	return (
		<section
			className={styles.intro}
			style={{ backgroundImage: `url(${JSON.stringify(movie.img)})` }}>
			<div className={styles.introInner}>
				<div className={styles.introLogo}>
					<div className={styles.imgWrapper} to={`/films/${movie.id}`}>
						<div
							className={styles.img}
							style={{
								backgroundImage: `url(${
									movie.localLogo ? JSON.stringify(movie.localLogo) : JSON.stringify(movie.logo)
								})`,
							}}></div>
					</div>
					<div className={styles.informationBlock}>
						<div className={styles.info}>
							<span>{movie.year}</span>
							<span>{movie.duration}</span>
							<span>{movie.age}</span>
							<span>{movie.genre}</span>
						</div>
						<div className={styles.description}>{movie.description}</div>
					</div>
					<div className={styles.buttonsBlock}>
						<FavoritesButton callback={addFavorites} />
					</div>
				</div>
			</div>
		</section>
	);
}

export default Intro;
