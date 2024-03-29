'use client';

import React, { useEffect, useRef } from 'react';
import styles from './styles.module.scss';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/dist/ScrollTrigger';
import SplitType from 'split-type';

const ThirdText: React.FC = () => {
	const tl = useRef<gsap.core.Timeline | null>(null);

	const textRef = useRef<HTMLParagraphElement>(null);

	useEffect(() => {
		if (!textRef.current) {
			return;
		}
		gsap.registerPlugin(ScrollTrigger);
		tl.current = gsap.timeline();

		const split = new SplitType(textRef.current, { types: 'lines' });

		split.lines?.forEach((line) => {
			if (tl.current) {
				tl.current.fromTo(
					line,
					{ opacity: 1, scale: 1 },
					{
						backgroundPositionX: 0,
						ease: 'none',
						opacity: 1,
						scale: 1,
						scrollTrigger: {
							trigger: line,
							scrub: 0.9,
							start: 'top center',
							end: 'bottom center',
						},
					},
				);
			}
		});

		return () => {
			if (tl.current) {
				tl.current.kill();
			}
		};
	}, []);
	return (
		<div className={styles.thirdText}>
			<div className={styles.thirdText__container}>
				<div className='scrolling-text'>
					<span ref={textRef} className='bigText'>
						Feel free to contact us, we&apos;ll discuss your future site from design to deployment.
						Currently free for work.
					</span>
				</div>
			</div>
		</div>
	);
};

export default React.memo(ThirdText);
