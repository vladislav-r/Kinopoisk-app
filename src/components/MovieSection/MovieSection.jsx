import styles from './MovieSection.module.scss';
import Intro from '../Intro/Intro';
function MovieSection({ movie, setIsOpen }) {
	return (
		<div className={styles.section}>
			<header>
				<div className={styles.headerInner}>
					<nav className={styles.headerNav}>
						<button>О фильме</button>
						<button>Детали</button>
					</nav>
					<button onClick={() => setIsOpen(false)} className={styles.closeBtn}>
						<i class='bx bx-x '></i>
					</button>
				</div>
			</header>
			<Intro movie={movie} style={{ position: 'relative' }} />
		</div>
	);
	return (
		<div className={styles.sectionInner}>
			<header>
				<div className={styles.headerInner}>
					<nav className={styles.headerNav}>
						<span>О фильме</span>
						<span>Детали</span>
					</nav>
					<button className={styles.closeBtn}>
						<i class='bx bx-x'></i>
					</button>
				</div>
			</header>
			<div className={styles.sectionLeft}>
				<div className={styles.logoWrapper}>
					<div className={styles.logo} style={{ backgroundImage: `url(${movie.logo})` }} />
				</div>
				<div className={styles.infoBlock}>
					<div className={styles.info}>
						<span>{movie.rating}</span>
						<span>{movie.year}</span>
						<span>{movie.name}</span>
						<span>{movie.duration}</span>
						<span>{movie.age}</span>
						<span>{movie.genre} &#9733;</span>
					</div>
					<div className={styles.description}>{movie.description}</div>
					<div className={styles.buttonsBlock}>
						<button>Смотреть</button>
						<button>Подробнее</button>
					</div>
				</div>
			</div>
		</div>
	);
}

export default MovieSection;
