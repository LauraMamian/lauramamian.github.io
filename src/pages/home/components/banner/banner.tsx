import OrbitingCircles from '@/components/ui/orbiting-circles'
import { Icons } from './icons'
import { getUserInfo } from '@/services'

export const Banner = () => {
	const user = getUserInfo()

	const renderOrbitingCircles = () => {
		const orbitingCircles = Object.values(Icons).map((Icon, index) => {
			const orbit = Math.floor(index / 3)
			const positionInOrbit = index % 3

			const radius = orbit === 0 ? 80 : 180
			const size = orbit === 0 ? 'size-[30px]' : 'size-[70px]'
			const delay = positionInOrbit * 6

			return (
				<OrbitingCircles
					key={Icon.name}
					className={size}
					duration={20}
					delay={delay}
					radius={radius}
					reverse={orbit > 0}
				>
					<Icon />
				</OrbitingCircles>
			)
		})

		return orbitingCircles
	}

	return (
		<div className='relative flex h-[500px] min-h-screen w-full flex-col items-center justify-center rounded-lg'>
			<h1 className='pointer-events-none whitespace-pre-wrap bg-gradient-to-b from-background to-foreground bg-clip-text text-center text-7xl font-semibold leading-none text-transparent dark:from-foreground dark:to-background xl:text-8xl'>
				{user.name}
			</h1>

			<div className='relative grid place-items-center'>
				<h2 className='text-gradient z-10'>{user.alias}</h2>
				<h2 className='text-gradient absolute z-0 blur-xl'>{user.alias}</h2>
				<h2 className='text-gradient absolute blur-3xl'>{user.alias}</h2>
			</div>

			{renderOrbitingCircles()}
		</div>
	)
}
