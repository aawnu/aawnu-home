import type { Metadata } from 'next';
import Hero from '@/components/section/hero';
import Projects from '@/components/section/projects';
import Skills from '@/components/section/skills';
import Experience from '@/components/section/experience';
import Contact from '@/components/section/contact';
import SupportedCreators from '@/components/section/supported-creators';

export const metadata: Metadata = {
	title: 'Alex Ahlgreen Westergaard - Software Developer & Integration Engineer',
	description:
		'Professional portfolio of Alex Ahlgreen Westergaard, showcasing expertise in software development, integration engineering, and personal finance.',
	openGraph: {
		type: 'profile',
		firstName: 'Alex',
		lastName: 'Ahlgreen Westergaard',
		countryName: 'Denmark',
		emails: 'aaw@aaw.nu',
		gender: 'male',
		locale: 'da-DK',
		siteName: 'AAW',
		description:
			'Professional portfolio of Alex Ahlgreen Westergaard, showcasing expertise in software development, integration engineering, and personal finance.',
		title: 'Alex Ahlgreen Westergaard - Software Developer & Integration Engineer'
	}
};

export default function HomePage() {
	return (
		<main>
			<Hero />
			<Projects />
			<Skills />
			<Experience />
			<SupportedCreators />
			<Contact />
		</main>
	);
}
