import './globals.css'
import { Poppins } from 'next/font/google'

const poppins = Poppins({
	subsets: ['latin'],
	weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
	variable: '--font-poppins',
})

export const metadata = {
	title: 'Four Card Feature Section',
	description:
		'Frontend Mentor Challenge | Four Card Feature Section | Developed using Next JS, Tailwind CSS and many more...',
}

export default function RootLayout({
	children,
}: {
	children: React.ReactNode
}) {
	return (
		<html lang='en'>
			<body
				className={`${poppins.variable} scroll-smooth font-sans antialiased bg-gray-150`}>
				{children}
			</body>
		</html>
	)
}
