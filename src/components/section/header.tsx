'use client';
import Link from 'next/link';
import {
	GithubLogo,
	InstagramLogo,
	LinkedinLogo,
	PaperPlaneTilt
} from '@phosphor-icons/react';
import ThemeSwitch from '../theme-switch';
import { cn } from '@/lib/utils';
import { useEffect, useState } from 'react';

export default function Header() {
	const [isScrolled, setIsScrolled] = useState(false);

	useEffect(() => {
		const handleScroll = () => {
			setIsScrolled(window.scrollY > 20);
		};
		window.addEventListener('scroll', handleScroll);
		return () => window.removeEventListener('scroll', handleScroll);
	}, []);

	return (
		<nav
			className={cn(
				'sticky top-0 z-50 w-full border-b transition-all duration-500',
				isScrolled ? 'bg-background/85 backdrop-blur-sm' : 'border-b-transparent'
			)}
		>
			<div className="container mx-auto flex items-center justify-between px-4 py-4">
				<Link href="/" className="text-xl font-bold hover:text-primary">
					AAW
				</Link>
				<div className="flex items-center gap-4">
					<ThemeSwitch variant="outline" size="icon" />
					<Link href="https://instagram.com/aawmbs" target="_blank" className="group">
						<InstagramLogo className="h-5 w-5 group-hover:fill-primary" />
						<span className="sr-only">Instagram</span>
					</Link>
					<Link href="https://github.com/aawnu" target="_blank" className="group">
						<GithubLogo className="h-5 w-5 group-hover:fill-primary" />
						<span className="sr-only">GitHub</span>
					</Link>
					<Link href="https://linkedin.com/in/alexwestergaard" target="_blank" className="group">
						<LinkedinLogo className="h-5 w-5 group-hover:fill-primary" />
						<span className="sr-only">LinkedIn</span>
					</Link>
					<Link href="mailto:aaw@aaw.nu" target="_blank" className="group">
						<PaperPlaneTilt className="h-5 w-5 group-hover:fill-primary" />
						<span className="sr-only">Email</span>
					</Link>
				</div>
			</div>
		</nav>
	);
}
