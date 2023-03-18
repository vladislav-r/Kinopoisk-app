import styles from './Navigation.module.scss';
import { Link, useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';

const nav = [
	{
		id: 1,
		title: 'Главное',
		href: '/',
	},
	{
		id: 2,
		title: 'Магазин',
		href: '/shop',
	},
	{
		id: 3,
		title: 'Моё',
		href: '/my',
	},
	{
		id: 4,
		title: 'Каналы',
		href: '/channels',
	},
	{
		id: 5,
		title: 'Спорт',
		href: '/sport',
	},
];

function Navigation() {
	const [location, setLocation] = useState('');
	const loc = useLocation();
	useEffect(() => {
		setLocation(loc.pathname);
	}, [loc.pathname]);

	return (
		<nav className={styles.nav}>
			<ul className={styles.navlist}>
				{nav.map(item => (
					<li key={item.id} className={styles.navItem}>
						<Link className={location === item.href ? 'active' : ''} to={item.href}>
							{item.title}
						</Link>
					</li>
				))}
			</ul>
		</nav>
	);
}
export default Navigation;
