'use client';
import { motion } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { buttonVariants } from '@/components/ui/button';
import Link from 'next/link';
import { cn } from '@/lib/utils';
import { LinkedinLogo } from '@phosphor-icons/react';
import { useInView } from 'react-intersection-observer';

const experiences = [
	{
		role: 'Integration Architect',
		company: 'SELVEO',
		duration: '2023 – May 2024',
		description: 'Optimized warehouse logistics for online retailers through advanced integrations.'
	},
	{
		role: 'Software Engineer',
		company: 'Rito, Subit, Firtal Tech',
		description:
			'Designed tools to enhance e-commerce and internal systems. Implemented gamification strategies and financial dashboards.'
	},
	{
		role: 'Customer Care & QA Analyst',
		company: 'SYKES, Huawei',
		description: 'Streamlined call support processes and developed quality benchmarks.'
	},
	{
		role: 'Entrepreneurial Ventures',
		company: 'Partnerbits, Prestige Livet, Northbased',
		duration: 'Since 2012',
		description: 'Founded businesses providing digital solutions and premium e-commerce platforms.'
	}
];

const education = [
	{
		institution: 'Niels Brock',
		degree: "Associate's Degree in Business/Commerce",
		year: '2016'
	},
	{
		institution: 'Media College Denmark',
		degree: 'Programming in Computer Science',
		year: '2012–2013'
	}
];

export default function Experience() {
	const [ref, inView] = useInView({
		triggerOnce: true,
		threshold: 0.1
	});

	return (
		<section ref={ref} className="container mx-auto max-w-(--breakpoint-xl) space-y-12 px-4 py-16">
			<div>
				<h2 className="mb-8 font-nota-sans text-3xl font-bold">Experience</h2>
				<div className="mb-6 grid gap-6 lg:grid-cols-2">
					{experiences.map((exp, index) => (
						<motion.div
							key={exp.role}
							initial={{ opacity: 0, y: 20 }}
							animate={inView && { opacity: 1, y: 0 }}
							transition={{ duration: 0.6, delay: 0.25 * index }}
						>
							<Card>
								<CardHeader>
									<CardTitle>{exp.role}</CardTitle>
								</CardHeader>
								<CardContent>
									<div className="mb-4 flex flex-col gap-2 text-muted-foreground md:flex-row md:items-center md:gap-4">
										<span>{exp.company}</span>
										{exp.duration && (
											<>
												<span className="hidden md:inline">•</span>
												<span>{exp.duration}</span>
											</>
										)}
									</div>
									<p className="text-muted-foreground">{exp.description}</p>
								</CardContent>
							</Card>
						</motion.div>
					))}
				</div>
			</div>

			<div>
				<h2 className="mb-8 font-nota-sans text-3xl font-bold">Education</h2>
				<div className="grid gap-6 md:grid-cols-2">
					{education.map((edu, index) => (
						<motion.div
							key={edu.institution}
							initial={{ opacity: 0, y: 20 }}
							animate={inView && { opacity: 1, y: 0 }}
							transition={{
								duration: 0.6,
								delay: 0.25 * (index + experiences.length)
							}}
						>
							<Card className="border-none">
								<CardHeader>
									<CardTitle>{edu.institution}</CardTitle>
								</CardHeader>
								<CardContent>
									<p className="mb-2 text-muted-foreground">{edu.degree}</p>
									<p className="text-sm text-muted-foreground">{edu.year}</p>
								</CardContent>
							</Card>
						</motion.div>
					))}
				</div>
			</div>

			<motion.div
				initial={{ opacity: 0, y: 20 }}
				animate={inView && { opacity: 1, y: 0 }}
				transition={{
					duration: 0.6,
					delay: 0.25 * (experiences.length + education.length)
				}}
				className="text-center"
			>
				<Link
					href="https://www.linkedin.com/in/alexwestergaard/"
					target="_blank"
					rel="nofollow noopener noreferrer"
					className={cn(buttonVariants({ size: 'lg' }), 'font-bold')}
				>
					<LinkedinLogo weight="fill" className="inline h-6 w-6" /> Let&apos;s connect on Linkedin
				</Link>
			</motion.div>
		</section>
	);
}
