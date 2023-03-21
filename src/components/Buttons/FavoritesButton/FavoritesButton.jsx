import { useState } from 'react';
import styles from './FavoritesButton.module.scss';

function FavoritesButton({ icon }) {
	const [isChecked, setIsChecked] = useState(false);
	return (
		<button
			onClick={() => {
				setIsChecked(prev => !prev);
			}}
			className={styles.button}>
			{isChecked ? (
				<i class={`bx bxs-${icon}`} style={{ color: '#da5c1e' }}></i>
			) : (
				<i class={`bx bx-${icon}`}></i>
			)}
		</button>
	);
}

export default FavoritesButton;
