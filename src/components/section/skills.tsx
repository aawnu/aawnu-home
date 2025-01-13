'use client';
import { motion } from 'framer-motion';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { ChartLine, Code, Database, Globe, Video } from '@phosphor-icons/react';
import { useInView } from 'react-intersection-observer';

const skills = [
	{
		title: 'Frontend Development',
		description: 'React, Next.js, Svelte(-kit), TypeScript, Tailwind CSS',
		icon: Code
	},
	{
		title: 'Integration Engineering',
		description: 'API Design, System Architecture, Data Flow Optimization',
		icon: Database
	},
	{
		title: 'Web Analytics',
		description: 'Google Analytics, Tag Manager',
		icon: Globe
	},
	{
		title: 'Financial Analysis',
		description: 'Instruments & Vehicles, Budget Planning, Market/Risk Analysis',
		icon: ChartLine
	},
	{
		title: 'Content Creation',
		description: 'Twitch Streaming, Video Production, Audience Engagement',
		icon: Video
	}
];

export default function Skills() {
	const [ref, inView] = useInView({
		triggerOnce: true,
		threshold: 0.1
	});

	return (
		<section ref={ref} className="bg-muted/50">
			<div className="container mx-auto max-w-screen-xl px-4 py-16">
				<h2 className="mb-8 font-nota-sans text-3xl font-bold">Core Competencies</h2>
				<div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
					{skills.map((skill, index) => {
						const Icon = skill.icon;
						return (
							<motion.div
								key={skill.title}
								initial={{ opacity: 0, y: 20 }}
								animate={inView && { opacity: 1, y: 0 }}
								transition={{ duration: 0.6, delay: 0.25 * index }}
							>
								<Card className="border-none">
									<CardHeader>
										<Icon className="mb-2 h-8 w-8 text-primary" />
										<CardTitle>{skill.title}</CardTitle>
									</CardHeader>
									<CardContent>
										<CardDescription>{skill.description}</CardDescription>
									</CardContent>
								</Card>
							</motion.div>
						);
					})}
				</div>
			</div>
		</section>
	);
}
