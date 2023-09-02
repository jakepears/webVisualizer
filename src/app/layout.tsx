/** @format */

import './globals.css';
import type { Metadata } from 'next';
import { Lato } from 'next/font/google';

const lato = Lato({
	weight: ['100', '400', '700'],
	style: ['normal', 'italic'],
	subsets: ['latin'],
	display: 'swap',
});

export const metadata: Metadata = {
	title: 'Visualizer',
	description: 'AI Audio Visualizer',
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang='en'>
			{/* <style jsx global>{`
				html {
					font-family: ${lato.style.fontFamily};
				}
			`}</style> */}
			<body className={lato.className}>{children}</body>
		</html>
	);
}
