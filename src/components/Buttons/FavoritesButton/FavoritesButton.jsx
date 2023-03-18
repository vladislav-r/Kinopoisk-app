import { useState } from 'react';
import styles from './FavoritesButton.module.scss';

function FavoritesButton({ callback }) {
	const [isChecked, setIsChecked] = useState(false);
	return (
		<button
			onClick={() => {
				setIsChecked(prev => !prev);
				callback({ id: 2, name: 'super film' });
			}}
			className={styles.button}>
			{isChecked ? (
				<i class='bx bx-bookmark'></i>
			) : (
				<i class='bx bxs-bookmark' style={{ color: '#da5c1e' }}></i>
			)}
		</button>
	);
}

export default FavoritesButton;
