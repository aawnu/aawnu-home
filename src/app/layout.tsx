import { ThemeProvider } from '@/components/theme-provider';
import './globals.css';
import Footer from '@/components/section/footer';
import Header from '@/components/section/header';

export default function RootLayout({
	children
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en" suppressHydrationWarning>
			<body>
				<ThemeProvider
					attribute="class"
					defaultTheme="system"
					enableSystem
					disableTransitionOnChange
				>
					<div className="flex min-h-screen flex-col">
						<div className="grow">
							<Header />
							{children}
						</div>
						<Footer />
					</div>
				</ThemeProvider>
			</body>
		</html>
	);
}
