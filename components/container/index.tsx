'use client';

import React, { useEffect } from 'react';
import Intro from '@/components/main/intro';
import TechStack from '@/components/main/tech-stack';
import Outro from '@/components/main/outro';

const Container: React.FC = () => {
	useEffect(() => {
		(async () => {
			const LocomotiveScroll = (await import('locomotive-scroll')).default;

			const locomotiveScroll = new LocomotiveScroll();
		})();
	}, []);
	return (
		<div className='overflow-x-hidden'>
			<Intro />
			<TechStack />
			<Outro />
		</div>
	);
};

export default Container;
