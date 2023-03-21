import React from 'react';
import MovieItem from '../../components/MovieItem/MovieItem';
import MoviesFilters from '../../components/MoviesFilters/MoviesFilters';
import MoviesSorting from '../../components/MoviesSorting/MoviesSorting';
import FILMS from '../../FILMS.json';
import SearchInput from '../../components/elements/SearchInput/SearchInput';

function Recomended() {
	window.scrollTo(0, 0);

	const [filter, setFilter] = React.useState('');
	const [searchValue, setSearchValue] = React.useState('');
	const [sortType, setSortType] = React.useState('rating');
	const [movies, setMovies] = React.useState([]);

	React.useEffect(() => {
		const data = FILMS.filter(obj => {
			if (
				obj.genre.toLowerCase().includes(filter.toLowerCase()) &&
				obj.name.toLowerCase().includes(searchValue.toLowerCase())
			) {
				return true;
			}
			return false;
		})
			.sort((a, b) => b.rating - a.rating)
			.map(movie => <MovieItem key={movie.id} m={movie} />);

		setMovies(data);
	}, [filter, searchValue]);

	return (
		<div className='container'>
			<div style={{ paddingTop: 150 }}>
				<div style={{ display: 'flex', justifyContent: 'space-between' }}>
					<MoviesFilters value={filter} onClickCategory={category => setFilter(category)} />
					<SearchInput searchValue={searchValue} setSearchValue={setSearchValue} />
					<MoviesSorting />
				</div>
				<div className='movieGrid'>{movies}</div>
			</div>
		</div>
	);
}

export default Recomended;
