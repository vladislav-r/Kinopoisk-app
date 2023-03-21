function MoviesSorting() {
	const list = [
		{ name: 'рейтингу', sortType: 'rating' },
		{ name: 'новизне', sortType: 'year' },
	];
	return (
		<div>
			<select defaultValue='rating' variant='standard'>
				<option value={'rating'}>рейтингу</option>
				<option value={'year'}>новизне</option>;
			</select>
		</div>
	);
}

export default MoviesSorting;
