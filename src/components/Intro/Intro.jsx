import FavoritesButton from '../Buttons/FavoritesButton/FavoritesButton';
import styles from './Intro.module.scss';

const films = [
	{
		id: 1,
		name: 'Аватар: Путь Воды',
		year: '2023',
		director: 'Джеймс Кэмерон',
		logo: 'https://1000logos.net/wp-content/uploads/2022/11/Avatar-Logo-2022.png',
		img: 'https://people.com/thmb/Gc2bEAXZusNxPVlhuK8IZRdgQX8=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc():focal(1159x347:1161x349)/avatar-2-way-of-the-water-trailer-110222-3-7fcc8ab436204e46ab9ab7bb007b5fbe.jpg',
		description:
			'После принятия образа аватара солдат Джейк Салли становится предводителем народа на`ви',
		duration: '02:55',
		age: '14+',
	},
];

let favorites = [];

function addFavorites(film) {
	console.log('favorites');
}

function Intro() {
	return (
		<section className={styles.intro}>
			<div className={styles.introInner}>
				<div className={styles.introLogo}>
					<div className={styles.img}></div>
					<div className={styles.info}>
						<span>{films[0].year}</span>
						<span>{films[0].duration}</span>
						<span>{films[0].age}</span>
					</div>
					<div className={styles.description}>{films[0].description}</div>
				</div>
				<div className='container'>
					<div className={styles.buttonsBlock}>
						<FavoritesButton callback={addFavorites} />
					</div>
				</div>
			</div>
		</section>
	);
}

export default Intro;
