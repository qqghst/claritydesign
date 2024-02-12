// import Masthead from '@/components/main/masthead';
// import Image from 'next/image';

// export default function Home() {
// 	return (
// 		<main className='flex min-h-screen flex-col items-center justify-between p-24'>
// 			<Masthead />
// 		</main>
// 	);
// }

import React from 'react';
import styles from './page.module.scss';
import Masthead from '@/components/main/masthead';
import WhiteBg from '@/components/main/white-bg';
import About from '@/components/main/about';
import Intro from '@/components/main/intro';
import TechStack from '@/components/main/tech-stack';

const Home = () => {
	return (
		<main className=''>
			{/* <Masthead />
			<WhiteBg />
			<About /> */}
			<Intro />
			<TechStack />
		</main>
	);
};

export default Home;
