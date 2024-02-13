import React from 'react';
import styles from './styles.module.scss';
import Title from './title';
import MobileButton from '@/ui/mobile-button';

const Footer: React.FC = () => {
	return (
		<div className={styles.footer}>
			<div className={styles.footer__container}>
				<Title />
				<MobileButton color='black' background='black' />
				<div className={`hide-on-mobile ${styles.postFooter}`}>
					<span>&copy; ClarityDesign. All Rights Reserved˝</span>
					<span>&copy; 2024</span>
				</div>
			</div>
		</div>
	);
};

export default React.memo(Footer);
