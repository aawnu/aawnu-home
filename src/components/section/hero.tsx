'use client';
import { motion } from 'framer-motion';
import { buttonVariants } from '@/components/ui/button';
import { ArrowRight } from '@phosphor-icons/react';
import Link from 'next/link';
import { cn } from '@/lib/utils';
import Image from 'next/image';

export default function Hero() {
	return (
		<section className="container mx-auto max-w-screen-xl px-4 py-24 md:py-32">
			<div className="grid items-center gap-8 lg:grid-cols-2">
				<motion.div
					initial={{ y: 50, opacity: 0 }}
					animate={{ y: 0, opacity: 1 }}
					transition={{ duration: 0.6 }}
				>
					<motion.h2
						initial={{ y: -20, opacity: 0 }}
						animate={{ y: 0, opacity: 1 }}
						transition={{ duration: 0.6, delay: 0.6 }}
						className="mb-4 text-lg font-medium text-muted-foreground"
					>
						Alex Ahlgreen Westergaard
					</motion.h2>
					<h1 className="mb-6 font-nota-sans text-4xl font-black leading-tight md:text-6xl">
						I develop web software, invest in businesses &amp; play video games.
					</h1>
					<p className="mb-8 max-w-2xl text-lg text-muted-foreground">
						A curious mind passionate about finance, technology, and content creation. Continuously
						exploring new opportunities to solve problems, deliver innovative solutions, and share
						knowledge through content creation and collaborations.
					</p>
					<div className="flex gap-4">
						<Link href="/#contact" className={cn(buttonVariants({ size: 'lg' }), 'font-bold')}>
							Contact me
						</Link>
						<Link
							href="/projects"
							className={cn(buttonVariants({ size: 'lg', variant: 'outline' }))}
						>
							View Projects
							<ArrowRight className="ml-2 h-5 w-5" />
						</Link>
					</div>
				</motion.div>
				<motion.div
					initial={{ y: 50, opacity: 0 }}
					animate={{ y: 0, opacity: 1 }}
					transition={{ duration: 0.6, delay: 0.3 }}
					className="flex items-center justify-center"
				>
					<div className="relative z-30 aspect-square h-full w-full max-w-sm rounded-full bg-primary">
						<Image
							unoptimized
							width={300}
							height={300}
							src="/images/alex-westergaard-free.png"
							alt="Alex Ahlgreen Westergaard"
							className="absolute h-[calc(100%+1px)] w-[calc(100%+1px)] rounded-full object-cover"
						/>
					</div>
				</motion.div>
			</div>
		</section>
	);
}
