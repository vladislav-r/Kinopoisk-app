import styles from './MoviesSlider.module.scss';
import FullInfoMovieItem from '../FullInfoMovieItem/FullInfoMovieItem';
import FILMS from '../../FILMS.json';

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';

function MoviesSlider(props) {
	return (
		<div>
			<div className={styles.sliderInner}>
				<Swiper navigation={true} slidesPerView={'auto'} spaceBetween={7} className={styles.swiper}>
					modules={[Navigation]}
					{FILMS.map(film => (
						<SwiperSlide key={film.id} className={styles.swiperSlide}>
							<FullInfoMovieItem {...props} film={film} />
						</SwiperSlide>
					))}
				</Swiper>
			</div>
		</div>
	);
}

export default MoviesSlider;
