'use client';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';
import { ArrowSquareOut } from '@phosphor-icons/react';
import { useInView } from 'react-intersection-observer';
import { JSX, useState } from 'react';
import NorthbasedSvg from '../svg/northbased';
import SkaberSvg from '../svg/skaber';
import FinansteoriSvg from '../svg/finansteori';
import { cn } from '@/lib/utils';

interface Project {
	id: string;
	title: string;
	image: string | JSX.ElementType;
	startDate: string;
	endDate: string | null;
	description: string;
	links?: { title: string; url: string; icon?: JSX.ElementType }[];
	brandColor: string;
	imageClass?: string;
}

const projects: Project[] = [
	{
		id: 'north-based',
		title: 'Northbased',
		image: NorthbasedSvg,
		startDate: '2024',
		endDate: null,
		description:
			'I create custom websites, web services, and APIs to help businesses thrive online. My focus is on building solutions that are simple, effective, and tailored to your needs. Whether it’s starting from scratch or upgrading your current setup, I make digital transformation seamless. Let’s bring your ideas to life!',
		links: [{ title: 'Website', url: 'https://northbased.net' }],
		brandColor: '#369b73',
		imageClass: 'fill-white'
	},
	{
		id: 'skaber',
		title: 'SKABER',
		image: SkaberSvg,
		startDate: '2022',
		endDate: null,
		description:
			'SKABER connects content creators with brands by offering tailored tools and services for collaboration and partnerships. We build flexible solutions around a creator’s unique needs, empowering their growth without limiting opportunities. By keeping up with platforms like YouTube, Twitch, Instagram, TikTok, and Kick, we help creators stay competitive.',
		links: [{ title: 'Website', url: 'https://skaber.net' }],
		brandColor: '#ffba08',
		imageClass: 'fill-white'
	},
	{
		id: 'finansteori',
		title: 'Finansteori',
		image: FinansteoriSvg,
		startDate: '2020',
		endDate: '2025',
		description:
			'Finansteori is a platform I created to provide beginner-friendly guidance on finance and investing. It is designed to help the Danish people enhance their financial literacy and make informed decisions. Covering topics such as stocks, taxes, and financial planning, it caters to both newcomers and seasoned investors. My goal is to help individuals understand financial concepts and learn how to improve their finances.',
		links: [{ title: 'Website (Danish)', url: 'https://finansteori.dk/?ref=aaw.nu' }],
		brandColor: '#1a29ff',
		imageClass: 'fill-white'
	}
];

interface ListItemProps {
	project: Project;
	isEven: boolean;
}

function ListItem({ project, isEven }: ListItemProps) {
	const [isLoaded, setLoading] = useState(false);
	const [ref, inView] = useInView({
		threshold: 0.35,
		onChange: (inView) => inView == true && setLoading(true)
	});

	return (
		<motion.section
			ref={ref}
			className={`flex flex-col ${isEven ? 'md:flex-row' : 'md:flex-row-reverse'} items-center gap-16`}
			animate={{ opacity: 1, y: 0 }}
			viewport={{ once: true, margin: '-100px' }}
			initial={{ opacity: 0 }}
		>
			<motion.div
				className="w-full md:w-1/2"
				animate={inView ? { scale: 1.05, rotate: isEven ? 2 : -2 } : { scale: 1, rotate: 0 }}
				transition={{ type: 'spring', stiffness: 300 }}
			>
				<div
					className="relative flex aspect-video items-center justify-center overflow-hidden rounded-lg shadow-lg"
					style={{ backgroundColor: project.brandColor }}
				>
					{typeof project.image == 'string' ? (
						<Image
							src={project.image}
							alt={project.title}
							layout="fill"
							objectFit="contain"
							objectPosition="center"
							className="h-full w-full p-8"
						/>
					) : (
						<project.image className={cn('h-[50%] w-[65%] p-8', project.imageClass)} />
					)}
				</div>
			</motion.div>
			<div className="w-full space-y-4 md:w-1/2">
				<motion.h2
					className="text-4xl font-bold"
					initial={{ opacity: 0, x: isEven ? -20 : 20 }}
					animate={isLoaded && { opacity: 1, x: 0 }}
					transition={{ duration: 0.5, delay: 0.2 }}
				>
					{project.title}
				</motion.h2>
				<motion.p
					className="text-sm text-muted-foreground"
					initial={{ opacity: 0 }}
					animate={isLoaded && { opacity: 1 }}
					transition={{ duration: 0.5, delay: 0.3 }}
				>
					{project.startDate} - {project.endDate ?? 'Present'}
				</motion.p>
				<motion.p
					className="text-lg text-muted-foreground"
					initial={{ opacity: 0, y: 20 }}
					animate={isLoaded && { opacity: 1, y: 0 }}
					transition={{ duration: 0.5, delay: 0.4 }}
				>
					{project.description}
				</motion.p>
				{project.links && (
					<motion.div
						className="flex flex-wrap gap-4 pt-4"
						initial={{ opacity: 0, y: 20 }}
						animate={isLoaded && { opacity: 1, y: 0 }}
						transition={{ duration: 0.5, delay: 0.5 }}
					>
						{project.links.map((link) => (
							<Button key={link.title} variant="outline" size="lg" asChild>
								<a
									href={link.url}
									target="_blank"
									rel="noopener noreferrer"
									className="flex items-center gap-2"
								>
									{link.title}
									{!link.icon ? (
										<ArrowSquareOut className="h-4 w-4" />
									) : (
										<link.icon className="h-4 w-4" />
									)}
								</a>
							</Button>
						))}
					</motion.div>
				)}
			</div>
		</motion.section>
	);
}

export default function ProjectList() {
	return (
		<div className="space-y-24">
			{projects.map((project, index) => {
				const isEven = index % 2 === 0;
				return <ListItem key={index} project={project} isEven={isEven} />;
			})}
		</div>
	);
}
