import { Button } from '@/components/ui/button'

type Props = {
	toggleTheme: () => void
	icon: React.ReactElement
}

export const Navbar = ({ toggleTheme, icon }: Props) => {
	return (
		<header className='border-border/40 bg-background/95 supports-[backdrop-filter]:bg-background/60 fixed top-0 z-50 w-full backdrop-blur'>
			<div className='container mx-auto flex h-14 items-center px-6'>
				<div className='flex w-full items-center justify-between'>
					<a
						href='#banner'
						className='relative grid place-items-center'
					>
						<h3 className='text-gradient z-10 font-extrabold'>LM</h3>
						<h3 className='text-gradient absolute z-0 font-extrabold blur-xl'>
							LM
						</h3>
						<h3 className='text-gradient absolute font-extrabold blur-3xl'>
							LM
						</h3>
					</a>

					<div>
						<Button
							variant='link'
							size={'icon'}
							onClick={toggleTheme}
						>
							{icon}
						</Button>
					</div>
				</div>
			</div>
		</header>
	)
}
