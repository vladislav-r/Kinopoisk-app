import FavoritesButton from '../Buttons/FavoritesButton/FavoritesButton';
import styles from './Intro.module.scss';
import { Link } from 'react-router-dom';

function Intro({ movie }) {
	return (
		<section className={styles.intro} style={{ backgroundImage: `url(${movie.img})` }}>
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
						<button className={styles.goWatchingBtn} to={`/films/${movie.id}/watch`}>
							<Link to={`/films/${movie.id}/watch`}>
								<i class='bx bx-play'></i> Смотреть {movie.type}
							</Link>
						</button>
						{/* Кнопка "О фильме / сериале" */}
						<button className={styles.aboutMovieBtn}>
							<Link to={`/films/${movie.id}`}>О {movie.type}e</Link>
						</button>
						<FavoritesButton icon={'bookmark'} />
						<button className={styles.dotsMoreBtn}>
							<i class='bx bx-dots-horizontal-rounded'></i>
						</button>
					</div>
				</div>
			</div>
		</section>
	);
}

export default Intro;
