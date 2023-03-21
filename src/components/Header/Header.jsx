import Burger from '../elements/BurgerMenu/Burger';
import Logo from '../elements/Logo/Logo';
import Navigation from '../Navigation/Navigation';
import HeaderProfile from './HeaderProfile/HeaderProfile';
import styles from './Header.module.scss';
import DropdownNav from '../DropdownNav/DropdownNav';

import { useState } from 'react';

const Header = () => {
	const [isDropdownActive, setIsDropdownActive] = useState(false);

	return (
		<div className={styles.header}>
			<div className={styles.headerGradient}></div>
			<div className={styles.headerContent}>
				<div className='container'>
					<div className={styles.headerInner}>
						<div className={styles.headerLeft}>
							{isDropdownActive && (
								<DropdownNav
									isDropdownActive={isDropdownActive}
									setIsDropdownActive={setIsDropdownActive}
								/>
							)}
							<div
								className={styles.headerLogo}
								onMouseEnter={() => setIsDropdownActive(prev => !prev)}>
								<Burger />
								<Logo />
							</div>
						</div>
						<Navigation />

						<div className={styles.headerRight}>
							<HeaderProfile />
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Header;
