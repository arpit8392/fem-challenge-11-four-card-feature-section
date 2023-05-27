type Props = {
	id: number
	title: string
	description: string
	icon: string
	classes?: string
}

const borderStyles = [
	'border-cyan-650',
	'border-red-650',
	'border-orange-650',
	'border-blue-650',
]

const Card = ({ id, title, description, icon, classes }: Props) => {
	return (
		<div
			className={`flex max-w-xs flex-col justify-between space-y-8 overflow-hidden rounded-lg border-t-4 p-7 text-blue-850 shadow-xl ${
				borderStyles[id - 1]
			} ${classes}`}>
			<div className='space-y-1'>
				<h2 className='text-xl font-semibold'>{title}</h2>
				<p className='text-xs/6 font-light tracking-wide text-blue-850/50 '>
					{description}
				</p>
			</div>
			<div className='self-end'>
				<img src={`images/${icon}.svg`} alt={`${title}'s icon`} />
			</div>
		</div>
	)
}
export default Card
