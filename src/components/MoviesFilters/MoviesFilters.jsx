import React from 'react';
import styles from './MoviesFilters.module.scss';

// prettier-ignore
const filtersData = [
	{id: 1, genre: '', title: 'Все',},
  {id: 2, genre: 'Боевик', title: 'Боевик',},
	{id: 3, genre: 'Комедия', title: 'Комедия',},
  {id: 4, genre: 'Триллер', title: 'Триллер',},
	{id: 5, genre: 'Фантастика', title: 'Фантастика',},
];

function MoviesFilters({ value, onClickCategory }) {
	return (
		<div className={styles.filters}>
			{filtersData.map(filter => (
				<button
					//prettier-ignore
					onClick={() => {onClickCategory(filter.genre)}}
					className={filter.genre.toLowerCase() === value.toLowerCase() ? styles.active : ''}
					key={filter.id}>
					{filter.title}
				</button>
			))}
		</div>
	);
}

export default MoviesFilters;
