'use client';

import React, { useEffect, useRef } from 'react';
import styles from './styles.module.scss';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/dist/ScrollTrigger';
import SplitType from 'split-type';
import { projects } from './data';
import ProjectItem from './project-item';
import useWindowSize from '@/hooks/useWindowSize';

const Projects: React.FC = () => {
	const { width } = useWindowSize();
	const isMobile = width < 768;

	const tl = useRef<gsap.core.Timeline | null>(null);

	const sectionRef = useRef<HTMLDivElement>(null);
	const triggerRef = useRef<HTMLDivElement>(null);
	const spanRef = useRef(null);

	useEffect(() => {
		gsap.registerPlugin(ScrollTrigger);
		tl.current = gsap.timeline({});

		const tl2 = gsap.timeline({
			scrollTrigger: {
				trigger: triggerRef.current,
				start: 'top top',
				end: isMobile ? '500 top' : '2000 top',
				scrub: 1,
				pin: true,
			},
		});

		const span = new SplitType(spanRef.current!, {
			types: 'chars',
			lineClass: 'lineParent',
		});

		tl.current.fromTo(
			span.chars,
			{ opacity: 0, y: 100, scale: 0.8 },
			{
				y: 0,
				// y: (i) => -20 + i * 5,
				opacity: 0.6,
				duration: 2.4,
				stagger: 0.12,
				ease: 'elastic.out(1, 0.3)',
				scale: 1,
				yoyo: true,
				yoyoEase: 'power1.inOut',

				scrollTrigger: {
					trigger: spanRef.current,
					start: 'top center',
					end: '+=' + window.innerHeight * 4,
					scrub: 1,
				},
			},
		);

		tl2.fromTo(
			sectionRef.current,
			{
				translateX: 0,
			},
			{
				translateX: '-300vw',
				ease: 'none',
				duration: 1,
			},
		);

		return () => {
			tl.current?.kill();
			tl2.kill();
		};
	}, []);

	return (
		<>
			<div className={styles.project}>
				<div className={styles.project__container}>
					<div ref={triggerRef}>
						<div ref={sectionRef} className={styles.scrollSection}>
							<div className={`hide-on-mobile ${styles.containerSpan}`}>
								<span ref={spanRef}>FIRSTFIRSTFIRSTFIRSTFIRSTFIRST</span>
							</div>

							{projects &&
								projects.map((item, index) => (
									<ProjectItem
										key={index}
										src={item.image}
										title={item.title}
										description={item.description}
										href={item.href}
									/>
								))}
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

// export default Projects;
export default React.memo(Projects);
