import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import '@/styles/main.scss';
import '@/styles/_editor.scss';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
	title: 'Clarity Design | Инновационный и Креативный Дизайн',
	description:
		'Clarity Design — ваш надежный партнер в создании уникального и функционального дизайна. Мы специализируемся на веб-дизайне, графическом дизайне и брендинге, превращая ваши идеи в визуально привлекательные и целостные решения. Наш подход объединяет креативность, инновационные технологии и глубокое понимание потребностей вашего бизнеса для достижения максимального результата.',
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang='en'>
			<body className={inter.className}>{children}</body>
		</html>
	);
}
