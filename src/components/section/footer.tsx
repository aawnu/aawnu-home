import { MapPin } from '@phosphor-icons/react/dist/ssr';
import Link from 'next/link';

export default function Footer() {
	return (
		<footer className="border-t">
			<div className="container mx-auto px-4 py-8">
				<div className="flex flex-col items-center justify-between gap-4 md:flex-row">
					<div className="flex items-center gap-2 text-sm text-muted-foreground">
						<span>© 2024 Alex Ahlgreen Westergaard</span>
						<span className="hidden md:inline">•</span>
						<div className="flex items-center gap-1">
							<MapPin weight="fill" className="h-4 w-4" />
							Central Jutland, Denmark
						</div>
					</div>
					<div className="flex gap-4 text-sm">
						<Link
							href="https://www.16personalities.com/profiles/f53cd5b80faca"
							target="_blank"
							rel="noopener noreferrer"
							className="text-muted-foreground hover:text-foreground"
						>
							ENTP-A
						</Link>
						<Link
							href="/src/diploma/gdpr-da-diplom-neo-compliance.pdf"
							target="_blank"
							rel="noopener"
							className="text-muted-foreground hover:text-foreground"
						>
							GDPR Compliant
						</Link>
						<Link href="/privacy" className="text-muted-foreground hover:text-foreground">
							Your Privacy
						</Link>
					</div>
				</div>
			</div>
		</footer>
	);
}
