import Masthead from '@/components/main/masthead';
import Image from 'next/image';

export default function Home() {
	return (
		<main className='flex min-h-screen flex-col items-center justify-between p-24'>
			<Masthead />
		</main>
	);
}
