import styles from './FullInfoMovieItem.module.scss';

function FullInfoMovieItem({ film, setIsOpen, sectionMovie, setSectionMovie }) {
	const onClickMovie = () => {
		if (film.id == sectionMovie.id) return;
		setIsOpen(true);
		setSectionMovie(film);
	};

	return (
		<div onClick={() => onClickMovie()} className={styles.filmItem}>
			<div className={styles.imgBlock} style={{ backgroundImage: `url(${film.img})` }}></div>
			<div className={styles.infoBlock}>
				<h4 className={styles.title}>{film.name}</h4>
				<div className={styles.info}>
					<span>{film.year}</span>
					<span>{film.rating} &#9733;</span>
					<span>{film.genre}</span>
					<span>{film.age}</span>
					<span>{film.duration}</span>
				</div>
				<p className={styles.description}>{film.description}</p>
			</div>
		</div>
	);
}

export default FullInfoMovieItem;
