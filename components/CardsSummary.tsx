import data from '../data'
import Card from './Card'

const CardsSummary = () => {
	return (
		<div className='grid grid-cols-1 gap-6 pt-20 md:pt-16 md:grid-cols-3 md:gap-8 '>
			{data.map((item, i) => {
				if (i === 0)
					return <Card key={i} {...item} classes='md:translate-y-1/2' />

				if (i === 1 || i === 2)
					return <Card key={i} {...item} classes='md:col-start-2' />

				if (i === 3)
					return <Card key={i} {...item} classes='md:-translate-y-1/2' />
			})}
		</div>
	)
}
export default CardsSummary
