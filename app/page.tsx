import CardsSummary from '@/components/CardsSummary'
import Header from '@/components/Header'

export default function Home() {
	return (
		<main className='flex flex-col items-center px-8 py-20'>
			<Header />
			<CardsSummary />
		</main>
	)
}
