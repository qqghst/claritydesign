'use client';

import React, { useEffect } from 'react';
import Intro from '@/components/main/intro';
import TechStack from '@/components/main/tech-stack';
import Outro from '@/components/main/outro';
import useWindowSize from '@/hooks/useWindowSize';

const Container: React.FC = () => {
	const { width } = useWindowSize();
	const isMobile = width < 769;

	useEffect(() => {
		(async () => {
			if (!isMobile) {
				const LocomotiveScroll = (await import('locomotive-scroll')).default;

				const locomotiveScroll = new LocomotiveScroll();
			}
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
