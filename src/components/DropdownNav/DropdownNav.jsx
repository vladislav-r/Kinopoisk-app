import styles from './DropdownNav.module.scss';
import { useEffect, useState } from 'react';
import { useLocation, Link } from 'react-router-dom';

const nav = [
	{
		id: 1,
		title: 'Главная',
		href: '/',
		icon: 'home',
	},
	{
		id: 2,
		title: 'Онлайн-кинотеатр',
		href: '/online',
		icon: 'camera-movie',
	},
	{
		id: 3,
		title: 'Фильмы',
		href: '/films',
		icon: 'home',
	},
	{
		id: 4,
		title: 'Сериалы',
		href: '/series',
		icon: 'camera-movie',
	},
	{
		id: 5,
		title: 'Спорт',
		href: '/sport',
		icon: 'home',
	},
	{
		id: 6,
		title: 'Билеты в кино',
		href: '/tickets',
		icon: 'camera-movie',
	},
	{
		id: 7,
		title: 'Медиа',
		href: '/media',
		icon: 'home',
	},
];

function DropdownNav({ setIsDropdownActive }) {
	const [location, setLocation] = useState('');
	const loc = useLocation();
	useEffect(() => {
		setLocation(loc.pathname);
	}, [loc.pathname]);

	return (
		<div className={styles.dropdown} onMouseLeave={() => setIsDropdownActive(false)}>
			<div className={styles.dropdownInner}>
				<ul>
					{nav.map(item => (
						<li key={item.id}>
							<Link className={location === item.href ? 'active' : ''} to={item.href}>
								<div className={location === item.href ? 'active' : ''}>
									<i className={`bx bx-${item.icon}`}></i>
								</div>
								<span>{item.title}</span>
							</Link>
						</li>
					))}
				</ul>
			</div>
		</div>
	);
}

export default DropdownNav;
