'use client';
import { motion } from 'framer-motion';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { buttonVariants } from '@/components/ui/button';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, Heart, InstagramLogo, TwitchLogo } from '@phosphor-icons/react';
import { SP1Svg } from '../svg/streampo1nt';
import { cn } from '@/lib/utils';
import { useInView } from 'react-intersection-observer';
import { useState } from 'react';

const supportedCreators = [
	{
		name: 'didmybest',
		image: '/images/rakel-didmybest-free.png',
		twitch: 'https://www.twitch.tv/didmybestdkk',
		instagram: 'https://www.instagram.com/didmybestdk'
	},
	{
		name: 'annepane',
		image: '/images/annepane-free.png',
		twitch: 'https://www.twitch.tv/annepane',
		instagram: 'https://www.instagram.com/annepanetv'
	},
	{
		name: 'kibbie',
		image: '/images/kibbie-free.png',
		twitch: 'https://www.twitch.tv/kibbietv',
		instagram: 'https://www.instagram.com/kibbietv'
	},
	{
		name: 'melena_m',
		image: '/images/melena_m-free.png',
		twitch: 'https://www.twitch.tv/melena_m'
	}
];

export default function SupportedCreators() {
	const [canPulse, setHeartPulse] = useState(false);

	const { ref: masterRef, inView: MasterInView } = useInView({
		triggerOnce: true,
		threshold: 0.1
	});

	const { ref: streamersRef, inView: streamersInView } = useInView({
		triggerOnce: true,
		threshold: 0.1
	});

	return (
		<section className="bg-muted/50">
			<div ref={masterRef} className="container mx-auto max-w-screen-xl px-4 py-16">
				<h2 className="mb-8 font-nota-sans text-3xl font-bold">Content Creation & Streaming</h2>
				<div className="mb-12 grid gap-8 md:grid-cols-2">
					<motion.div
						initial={{ opacity: 0, y: 20 }}
						animate={MasterInView && { opacity: 1, y: 0 }}
						transition={{ duration: 0.6 }}
					>
						<Card className="h-full">
							<CardHeader>
								<CardTitle className="flex items-center gap-2">
									<SP1Svg className="aspect-square h-8 w-8 object-contain" />
									STREAMPO1NT Collaboration
								</CardTitle>
								<CardDescription>Behind the scenes magic</CardDescription>
							</CardHeader>
							<CardContent className="space-y-4">
								<p className="text-muted-foreground">
									I’m excited to collaborate with streampo1nt on innovative streaming setups for
									events and tools to improve internal processes. Together, we’re enhancing the
									streaming experience for creators, viewers, and venues alike.
								</p>
								<Link
									href="https://www.streampo1nt.dk/"
									target="_blank"
									rel="noopener noreferrer"
									className={cn(buttonVariants({ variant: 'outline' }), 'group')}
								>
									Learn More
									<ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
								</Link>
							</CardContent>
						</Card>
					</motion.div>
				</div>

				<Card ref={streamersRef} className="border-none bg-transparent shadow-none">
					<CardHeader>
						<CardTitle className="flex flex-col items-center justify-center gap-2">
							<motion.div
								initial={{ opacity: 0, y: -20 }}
								animate={streamersInView && { opacity: 1, y: 0 }}
								transition={{ duration: 0.6 }}
								onAnimationComplete={() => setHeartPulse(true)}
							>
								<Heart
									weight="fill"
									className={cn(
										'h-12 w-12 font-nota-sans text-red-600 dark:text-red-400 lg:h-16 lg:w-16',
										canPulse && 'animate-pulse'
									)}
								/>
							</motion.div>
							Supporting Content Creators
						</CardTitle>
						<CardDescription className="mx-auto max-w-xl text-center">
							Proud supporter of talented content creators — whether it’s their passion or just a
							hobby, even when time isn’t on their side.
						</CardDescription>
					</CardHeader>
					<CardContent>
						<div className="grid gap-6 pt-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
							{supportedCreators.map((creator, index) => (
								<motion.div
									initial={{ opacity: 0, y: 20 }}
									animate={streamersInView && { opacity: 1, y: 0 }}
									transition={{ duration: 0.6, delay: 0.25 * index }}
									key={creator.name}
									className="flex flex-col items-center"
								>
									<Image
										src={creator.image}
										alt={creator.name}
										width={150}
										height={150}
										className="mb-4 rounded-full bg-primary/75 p-1"
									/>
									<h3 className="mb-2 text-lg font-semibold">{creator.name}</h3>
									<motion.div
										initial={{ opacity: 0 }}
										animate={streamersInView && { opacity: 1 }}
										transition={{ duration: 0.6, delay: 0.25 * index + 0.3 }}
										className="flex gap-4"
									>
										{creator.twitch && (
											<Link href={creator.twitch} target="_blank" rel="noopener noreferrer">
												<TwitchLogo className="h-5 w-5 text-[#9146FF]" />
											</Link>
										)}
										{creator.instagram && (
											<Link href={creator.instagram} target="_blank" rel="noopener noreferrer">
												<InstagramLogo className="h-5 w-5 text-[#E1306C]" />
											</Link>
										)}
									</motion.div>
								</motion.div>
							))}
						</div>
					</CardContent>
				</Card>
			</div>
		</section>
	);
}
