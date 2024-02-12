'use client';

import React, { useRef, useEffect } from 'react';
import styles from './styles.module.scss';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/dist/ScrollTrigger';
import useWindowSize from '@/hooks/useWindowSize';

const FirstText: React.FC = () => {
	const tl = useRef<gsap.core.Timeline | null>(null);

	const { width } = useWindowSize();
	const isMobile = width < 768;

	const firstTextRef = useRef<HTMLDivElement>(null);
	const secondTextRef = useRef<HTMLDivElement>(null);

	useEffect(() => {
		gsap.registerPlugin(ScrollTrigger);
		tl.current = gsap.timeline();

		tl.current.fromTo(
			firstTextRef.current,
			{ opacity: 0, y: 120 },
			{
				opacity: 1,
				y: 0,
				duration: 1,
				ease: 'power3.out',
				stagger: 0.2,
				scrollTrigger: {
					trigger: firstTextRef.current,
					start: 'top 95%',
					// start: 'top bottom',
					scrub: 1,
				},
			},
		);

		tl.current.fromTo(
			secondTextRef.current,
			{ opacity: 0, y: isMobile ? 32 : 180 },
			{
				opacity: 1,
				y: 0,
				duration: 1,
				ease: 'power3.out',
				stagger: 0.2,
				scrollTrigger: {
					trigger: secondTextRef.current,
					start: 'top 95%',
					// start: 'top bottom',
					scrub: 1,
				},
			},
			'<',
		);

		return () => {
			tl.current?.kill();
		};
	}, []);
	return (
		<div className={styles.firstText}>
			<div className={styles.firstText__container}>
				<div ref={firstTextRef}>
					<h2>
						Hello there. <br className='hide-on-desktop' /> Guero solo.
					</h2>

					<h4>
						We are a team of creative professionals specializing in website development. Our experience
						spans various fields—from web design to comprehensive development. We take pride in our ability
						to create not just websites, but true works of art.
					</h4>
				</div>
				<div ref={secondTextRef}>
					<h5>
						&quot;Our approach to design is unique: we combine innovative technologies with creative vision
						to ensure that each project stands out among the rest. &quot;
					</h5>
				</div>
			</div>
		</div>
	);
};

export default React.memo(FirstText);
