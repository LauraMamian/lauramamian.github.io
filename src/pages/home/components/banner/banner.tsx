import OrbitingCircles from '@/components/ui/orbiting-circles'
import { Icons } from './icons'
import clsx from 'clsx'
import { getUserInfo } from '@/services'

export const Banner = () => {
	const user = getUserInfo()

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
				radius={index <= 1 ? 80 : 180}
				reverse={index > 1}
			>
				<Icon />
			</OrbitingCircles>
		))

		return orbitingCircles
	}

	return (
		<div className='relative flex h-[500px] min-h-screen w-full flex-col items-center justify-center rounded-lg'>
			<h1 className='pointer-events-none whitespace-pre-wrap bg-gradient-to-b from-background to-foreground bg-clip-text text-center text-7xl font-semibold leading-none text-transparent dark:from-foreground dark:to-background xl:text-8xl'>
				{user.name}
			</h1>

			{/* <div className='relative grid place-items-center'>
				<h2 className='text-gradient z-10'>{user.name}</h2>
				<h2 className='text-gradient absolute z-0 blur-xl'>{user.name}</h2>
				<h2 className='text-gradient absolute blur-3xl'>{user.name}</h2>
			</div> */}

			{renderOrbitingCircles()}
		</div>
	)
}
