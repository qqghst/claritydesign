'use client';

import React, { useEffect } from 'react';
import styles from './styles.module.scss';
import Title from './title';
import MobileButton from '@/ui/mobile-button';
import MouseBlur from '@/ui/mouse-blur';
import Image from 'next/image';

const Masthead: React.FC = () => {
	return (
		<MouseBlur>
			<section className={styles.masthead}>
				<div className={styles.masthead__container}>
					<Title />
					<div className={`hide-on-mobile ${styles.svg}`}>
						<Image src='/main/masthead/rainbow.svg' width={0} height={0} alt='svg' />
					</div>
					<MobileButton color='#f5f5f7' background='#f5f5f7' />
				</div>
			</section>
		</MouseBlur>
	);
};

export default Masthead;
