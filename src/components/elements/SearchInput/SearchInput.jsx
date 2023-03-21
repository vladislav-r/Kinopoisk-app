import styles from './SearchInput.module.scss';
function SearchInput({ searchValue, setSearchValue }) {
	return (
		<div>
			<input
				value={searchValue}
				onChange={e => setSearchValue(e.target.value)}
				className={styles.input}
				type='text'
				placeholder='Введите название...'
			/>
		</div>
	);
}

export default SearchInput;
