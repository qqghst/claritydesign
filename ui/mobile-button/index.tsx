import React, { useEffect, useRef } from 'react';
import styles from './styles.module.scss';
import { IMobileButtonProps } from './interface';
import Link from 'next/link';
import gsap from 'gsap';

const MobileButton: React.FC<IMobileButtonProps> = ({ color, background }) => {
	const tl = useRef<gsap.core.Timeline | null>(null);
	const mobileButtonRef = useRef<HTMLDivElement>(null);

	useEffect(() => {
		tl.current = gsap.timeline({});

		tl.current.fromTo(
			mobileButtonRef.current,
			{ opacity: 0, x: -32 },
			{ opacity: 1, x: 0, duration: 1, delay: 1.8, autoAlpha: 1 },
		);

		return () => {
			tl.current?.kill();
		};
	}, []);

	return (
		<div ref={mobileButtonRef} className={`hide-on-desktop ${styles.mobileButton}`}>
			<Link href='https://t.me/qqghstk' target='_blank' rel='noopener noreferrer'>
				<h1 style={{ color: color }}>contact us</h1>
				<div className={`${styles.arrowContainer}`}>
					<div
						className={`${styles.arrow} ${styles.arrowFirst}`}
						style={
							{
								'--background-color': background,
							} as React.CSSProperties
						}
					></div>
					<div
						className={`${styles.arrow} ${styles.arrowSecond}`}
						style={
							{
								'--background-color': background,
							} as React.CSSProperties
						}
					></div>
				</div>
			</Link>
		</div>
	);
};

export default MobileButton;
