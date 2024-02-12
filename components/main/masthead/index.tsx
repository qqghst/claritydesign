'use client';

import React, { useEffect } from 'react';
import styles from './styles.module.scss';

const Masthead: React.FC = () => {
	return (
		<section className={styles.masthead}>
			<div className={styles.masthead__container}>
				<h1>MASTHEAD</h1>
			</div>
		</section>
	);
};

export default Masthead;
