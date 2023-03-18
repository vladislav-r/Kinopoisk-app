import styles from './HeaderProfile.module.scss';

function HeaderProfile() {
	return (
		<div className={styles.profile}>
			<div className={styles.user}>
				<i class='bx bxs-user'></i>
			</div>
		</div>
	);
}

export default HeaderProfile;
