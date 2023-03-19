import styles from './FilmsSlider.module.scss';
import { Link } from 'react-router-dom';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/virtual';
import FilmItem from './FilmItem/FilmItem';

function FilmsSlider({ films }) {
	return (
		<div>
			<div className={styles.sliderInner}>
				{films.map(f => (
					<FilmItem key={f.id} film={f} />
				))}
			</div>
		</div>
	);
}

export default FilmsSlider;
