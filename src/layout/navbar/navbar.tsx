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
					<h6>LM</h6>

					<div>
						<Button
							variant='outline'
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
