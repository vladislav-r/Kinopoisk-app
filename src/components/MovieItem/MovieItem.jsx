import React from 'react';
import { Link } from 'react-router-dom';
import styles from './MovieItem.module.scss';

function MovieItem({ m }) {
	return (
		<div className={styles.movieItem}>
			<div className={styles.movieImg} style={{ backgroundImage: `url(${m.img})` }}>
				<div style={{ display: 'flex', backgroundColor: 'rgba(0,0,0,0.5)' }}>
					<span style={{ marginRight: '7px' }}>{m.name}</span>
					<span style={{ marginRight: '7px' }}>{m.year}</span>
					<span style={{ marginRight: '7px' }}>{m.rating}</span>
					<span style={{ marginRight: '7px' }}>{m.age}</span>
				</div>
			</div>
			<div className={styles.movieLogo} style={{ backgroundImage: `url(${m.logo})` }}></div>
		</div>
	);
}

export default MovieItem;
