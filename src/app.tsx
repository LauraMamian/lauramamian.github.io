import HomePage from './pages/home'
import clsx from 'clsx'
import { Navbar } from './layout'
import { useTheme } from './hooks'

function App() {
	const { theme, themeIcon, toggleTheme } = useTheme()

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
