'use client';

import React, { useRef, useEffect } from 'react';
import styles from './styles.module.scss';
import Link from 'next/link';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import SplitType from 'split-type';

const Title: React.FC = () => {
	const tl = useRef<gsap.core.Timeline | null>(null);

	const firstLineRef = useRef<HTMLHeadingElement | null>(null);
	const secondLineRef = useRef<HTMLHeadingElement | null>(null);
	const gradientRef = useRef<HTMLHeadingElement | null>(null);

	useEffect(() => {
		gsap.registerPlugin(ScrollTrigger);
		tl.current = gsap.timeline({
			scrollTrigger: {
				trigger: firstLineRef.current,
				start: 'top center',
				toggleActions: 'play none none none',
			},
		});

		const span1 = new SplitType(firstLineRef.current!, {
			types: 'chars',
			lineClass: 'lineParent',
		});
		const span2 = new SplitType(secondLineRef.current!, {
			types: 'chars',
			lineClass: 'lineParent',
		});

		tl.current.fromTo(
			[span1.chars, span2.chars],
			{ opacity: 0, y: 32 },
			{
				duration: 0.8,
				opacity: 1,
				y: 0,
				stagger: {
					each: 0.04,
					amount: 1.6,
				},
				ease: 'power3.out',
			},
		);

		tl.current.fromTo(gradientRef.current, { opacity: 0 }, { opacity: 1, duration: 1.2, delay: '-0.6' });

		return () => {
			tl.current?.kill();
		};
	}, []);
	return (
		<>
			<h1 ref={firstLineRef} className='1 text-black'>
				wanna create
			</h1>

			<h1 ref={secondLineRef} className={` text-black ${styles.margin2}`}>
				project together?
			</h1>

			<h1 ref={gradientRef} className={` text-black ${styles.margin3}`}>
				<Link href='https://t.me/qqghstk' target='_blank' rel='noopener noreferrer'>
					<span className='gradient'>contact us.</span>
				</Link>
			</h1>
		</>
	);
};

export default React.memo(Title);
