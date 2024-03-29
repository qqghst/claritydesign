'use client';

import React, { useRef, useLayoutEffect } from 'react';
import styles from './styles.module.scss';
import useWindowSize from '@/hooks/useWindowSize';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import SplitType from 'split-type';

const Title: React.FC = () => {
	const { width } = useWindowSize();
	const isMobile = width < 768;

	const tl = useRef<gsap.core.Timeline | null>(null);

	const firstLineRef = useRef<HTMLHeadingElement | null>(null);
	const secondLineRef = useRef<HTMLHeadingElement | null>(null);
	const thirdLineRef = useRef<HTMLHeadingElement | null>(null);
	const gradientRef = useRef<HTMLHeadingElement | null>(null);

	useLayoutEffect(() => {
		tl.current = gsap.timeline();
		gsap.registerPlugin(ScrollTrigger);

		const span1 = new SplitType(firstLineRef.current!, {
			types: 'chars',
			charClass: 'charClass',
		});
		const span2 = new SplitType(secondLineRef.current!, {
			types: 'chars',
			charClass: 'charClass',
		});
		const span3 = new SplitType(thirdLineRef.current!, {
			types: 'chars',
			charClass: 'charClass',
		});

		tl.current.to([firstLineRef.current, secondLineRef.current, thirdLineRef.current], {
			autoAlpha: 1,
		});

		tl.current.fromTo(
			[span1.chars, span2.chars, span3.chars],
			{ opacity: 0, y: 32 },
			{
				duration: 0.8,
				opacity: 1,
				autoAlpha: 1,
				y: 0,
				stagger: 0.04,
				ease: 'power3.out',
			},
		);

		tl.current.fromTo(
			gradientRef.current,
			{ opacity: 0 },
			{ opacity: 1, duration: 1.8, delay: '-1', autoAlpha: 1 },
			// '<'
		);

		tl.current.fromTo(
			firstLineRef.current,
			{ x: 0 },
			{
				x: 500,
				ease: 'power1.out',
				duration: 1,
				scrollTrigger: {
					trigger: firstLineRef.current,

					start: isMobile ? 'top 8%' : '-64% 16%',
					end: 'bottom top',
					scrub: 1,
				},
			},
		);
		tl.current.fromTo(
			secondLineRef.current,
			{ x: 0 },
			{
				x: -500,
				ease: 'power1.out',
				duration: 1,
				scrollTrigger: {
					trigger: secondLineRef.current,
					// start: '-64% 24%',
					start: isMobile ? 'top 6%' : '-64% 24%',
					end: 'bottom top',
					scrub: 1,
				},
			},
		);
		tl.current.fromTo(
			[thirdLineRef.current, gradientRef.current],
			{ x: 0 },
			{
				x: 500,
				ease: 'power1.out',
				duration: 1,
				scrollTrigger: {
					trigger: thirdLineRef.current,
					// start: '-64% 32%',
					start: isMobile ? 'top 4%' : '-64% 32%',
					end: 'bottom top',
					scrub: 1,
				},
			},
		);

		return () => {
			tl.current?.kill();
		};
	}, [isMobile]);
	return (
		<>
			<h1 ref={firstLineRef} className='invisible'>
				this is a catchy title
			</h1>
			<h1 ref={secondLineRef} className={`invisible ${styles.margin2}`}>
				all the fun below
			</h1>
			<h1 ref={thirdLineRef} className={`invisible ${styles.margin3}`}>
				keep <span style={{ opacity: 0 }}>scrolling</span>
			</h1>
			<h1 ref={gradientRef} className={`invisible gradient ${styles.scrolling}`}>
				scrolling.
			</h1>
		</>
	);
};

export default React.memo(Title);

