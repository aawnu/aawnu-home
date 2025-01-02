import { Metadata } from 'next';

export const metadata: Metadata = {
	title: 'Your Privacy | AAW'
};

export default function PrivacyPage() {
	return (
		<div className="container mx-auto max-w-screen-sm px-8 py-24">
			<h1 className="font-nota-sans text-4xl font-black leading-snug">Your Privacy</h1>

			<p className="leading-relaxed">
				This website does not collect/store data from visitors or store cookies.
			</p>

			<h2 className="!mt-6 font-nota-sans text-2xl font-bold leading-snug">Your rights</h2>
			<p className="leading-relaxed">
				You can submit a complaint to the danish data protection authorities, Datatilsynet, if you
				have concerns about how I process your personal information. Find out more on{' '}
				<a
					className="font-medium text-primary"
					href="https://www.datatilsynet.dk/english"
					target="_blank"
					rel="noopener noreferrer"
				>
					datatilsynet.dk/english
				</a>
			</p>
		</div>
	);
}
