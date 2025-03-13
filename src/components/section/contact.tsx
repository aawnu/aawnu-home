'use client';
import { motion } from 'framer-motion';
import { CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { CheckCircle, LinkedinLogo, PaperPlaneTilt } from '@phosphor-icons/react';
import { useInView } from 'react-intersection-observer';

export default function Contact() {
	const [ref, inView] = useInView({
		triggerOnce: true,
		threshold: 0.1
	});

	return (
		<section className="container mx-auto px-4 py-24" id="contact">
			<div className="mx-auto max-w-(--breakpoint-lg)">
				<div className="text-center">
					<h2 className="mb-4 font-nota-sans text-3xl font-bold">Let’s Connect</h2>
					<p className="mx-auto mb-8 max-w-2xl text-lg text-muted-foreground">
						Whether you’re interested in software development, system integration, or want to
						discuss investment opportunities, I’m always open to new challenges and collaborations.
					</p>
				</div>

				<div ref={ref} className="grid grid-cols-1 gap-6 lg:grid-cols-2">
					<motion.div
						initial={{ x: -50, opacity: 0 }}
						animate={inView && { x: 0, opacity: 1 }}
						transition={{ duration: 0.6 }}
						className="rounded-lg bg-muted/50 text-card-foreground shadow-xs"
					>
						<CardHeader className="pb-4">
							<CardTitle className="text-lg">Get in Touch</CardTitle>
							<CardDescription>Reach out through your preferred channel</CardDescription>
						</CardHeader>
						<CardContent className="space-y-4">
							<a
								href="mailto:aaw@aaw.nu"
								className="flex items-center gap-3 text-muted-foreground transition-colors hover:text-primary"
							>
								<PaperPlaneTilt className="h-5 w-5" />
								aaw@aaw.nu
							</a>
							<a
								href="https://linkedin.com/in/alexwestergaard"
								target="_blank"
								rel="noopener noreferrer"
								className="flex items-center gap-3 text-muted-foreground transition-colors hover:text-primary"
							>
								<LinkedinLogo className="h-5 w-5" />
								Connect on LinkedIn
							</a>
						</CardContent>
					</motion.div>

					<motion.div
						initial={{ x: 50, opacity: 0 }}
						animate={inView && { x: 0, opacity: 1 }}
						transition={{ duration: 0.6 }}
						className="rounded-lg bg-muted/50 text-card-foreground shadow-xs"
					>
						<CardHeader className="pb-4">
							<CardTitle className="text-lg">Current Status</CardTitle>
							<CardDescription>Open for selected projects and collaborations</CardDescription>
						</CardHeader>
						<CardContent>
							<motion.div
								initial={{ x: 50, opacity: 0 }}
								animate={inView && { x: 0, opacity: 1 }}
								transition={{ duration: 0.6, delay: 0.6 }}
								className="flex items-center gap-2 font-bold text-emerald-500"
							>
								<CheckCircle weight="fill" className="h-6 w-6" />
								<span>Available for new opportunities</span>
							</motion.div>
						</CardContent>
					</motion.div>
				</div>
			</div>
		</section>
	);
}
