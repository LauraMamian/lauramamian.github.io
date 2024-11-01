import OrbitingCircles from '@/components/ui/orbiting-circles'
import { Icons } from './icons'
import clsx from 'clsx'

export const Banner = () => {
	const renderOrbitingCircles = () => {
		const orbitingCircles = Object.values(Icons).map((Icon, index) => (
			<OrbitingCircles
				key={Icon.name}
				// className='size-[30px] border-none bg-transparent'
				className={clsx({
					'size-[70px]': index > 1,
					'size-[30px]': index <= 1
				})}
				duration={20}
				delay={10 * index}
				radius={index <= 1 ? 80 : 190}
				reverse={index > 1}
			>
				<Icon />
			</OrbitingCircles>
		))

		return orbitingCircles
	}

	return (
		<div className='relative flex h-[500px] min-h-screen w-full flex-col items-center justify-center overflow-hidden rounded-lg border bg-background md:shadow-xl'>
			<h1 className='pointer-events-none whitespace-pre-wrap bg-gradient-to-b from-black to-gray-300 bg-clip-text text-center text-8xl font-semibold leading-none text-transparent dark:from-white dark:to-black'>
				Laura Mamián
			</h1>

			{renderOrbitingCircles()}
		</div>
	)
}
