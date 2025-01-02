'use client';
import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import ProxySeedSvg from '../svg/proxyseed';
import NorthbasedSvg from '../svg/northbased';
import SkaberSvg from '../svg/skaber';
import FinansteoriSvg from '../svg/finansteori';
import { useInView } from 'react-intersection-observer';

const projects = [
	{
		title: 'Proxy Seed',
		logo: ProxySeedSvg,
		href: '#'
	},
	{
		title: 'North Based',
		logo: NorthbasedSvg,
		href: '#'
	},
	{
		title: 'Skaber',
		logo: SkaberSvg,
		href: '#'
	},
	{
		title: 'Finansteori',
		logo: FinansteoriSvg,
		href: '#'
	}
];

export default function Projects() {
	const [ref, inView] = useInView({
		triggerOnce: true,
		threshold: 0.1
	});

	return (
		<section ref={ref} className="container mx-auto max-w-screen-xl px-4 py-16">
			<h2 className="mb-8 font-nota-sans text-3xl font-bold">Featured Projects</h2>
			<div className="grid grid-cols-2 gap-8 md:grid-cols-4">
				{projects.map((project, index) => (
					<motion.div
						key={project.title}
						initial={{ opacity: 0, y: 20 }}
						animate={inView && { opacity: 1, y: 0 }}
						transition={{ duration: 0.6, delay: 0.25 * index }}
					>
						<Card className="bg-muted">
							<CardContent className="flex items-center justify-center p-6">
								<div className="relative h-12">
									<project.logo className="h-full w-full fill-muted-foreground" />
								</div>
							</CardContent>
						</Card>
					</motion.div>
				))}
			</div>
		</section>
	);
}
