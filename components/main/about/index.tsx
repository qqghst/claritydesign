import React from 'react';
import styles from './styles.module.scss';
import FirstText from './first-text';
import SecondText from './second-text';
import ThirdText from './third-text';

const About: React.FC = () => {
	return (
		<section className={styles.about}>
			<div className={styles.about__container}>
				<FirstText />
				<SecondText />
				<ThirdText />
			</div>
		</section>
	);
};

export default About;
