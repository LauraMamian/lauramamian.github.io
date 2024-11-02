import HomePage from './pages/home'
import clsx from 'clsx'
import { Navbar } from './layout'
import { useTheme } from './hooks'
import { useEffect } from 'react'

function App() {
	const { theme, themeIcon, toggleTheme } = useTheme()

	useEffect(() => {
		const hash = window.location.hash
		if (hash) {
			const element = document.querySelector(hash)
			if (element) {
				element.scrollIntoView({ behavior: 'smooth' })
			}
		}
	}, [])

	return (
		<div
			className={clsx(
				{
					dark: theme === 'dark',
					light: theme === 'light'
				},
				'bg-background text-foreground'
			)}
		>
			<Navbar
				toggleTheme={toggleTheme}
				icon={themeIcon[theme]}
			/>

			<HomePage />
		</div>
	)
}

export default App
