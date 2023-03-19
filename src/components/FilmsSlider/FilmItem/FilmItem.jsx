import styles from './FilmItem.module.scss';
import { Link, useParams } from 'react-router-dom';
import { useState } from 'react';

function FilmItem({ film }) {
	const [isHover, setIsHover] = useState(false);

	return (
		<div className={styles.filmItem}>
			<div
				onMouseEnter={() => setIsHover(true)}
				onMouseLeave={() => setIsHover(false)}
				className={styles.imgBlock}
				style={{ backgroundImage: `url(${film.img})` }}>
				{isHover && <i class='bx bx-bookmark' style={{ fontSize: 30 }} />}
			</div>
			<Link to={`/films/${film.id}`} className={styles.infoBlock}>
				<div className={styles.info}>
					<span>{film.age}</span>
					<span>{film.year}</span>
					<span>{film.duration}</span>
					<span>{film.genre}</span>
				</div>
				<p className={styles.description}>{film.description}</p>
			</Link>
		</div>
	);
}

export default FilmItem;
