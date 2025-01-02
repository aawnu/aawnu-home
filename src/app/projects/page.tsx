import ProjectList from '@/components/section/projectslist';
import { Metadata } from 'next';

export const metadata: Metadata = {
	title: 'Projects | AAW',
	description:
		'A comprehensive list of projects by Alex Westergaard, including both current and past endeavors.'
};

export default function ProjectsPage() {
	return (
		<main className="container mx-auto px-4 py-12">
			<h1 className="mb-12 text-center text-5xl font-bold">My Projects</h1>
			<ProjectList />
		</main>
	);
}
