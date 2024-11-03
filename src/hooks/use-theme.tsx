import { Moon, Sun } from 'lucide-react'
import React, { useState } from 'react'

type Theme = 'light' | 'dark'

export const useTheme = () => {
	const [theme, setTheme] = useState<Theme>(
		// user preference
		window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
	)

	const themeIcon: Record<Theme, React.ReactElement> = {
		light: <Sun />,
		dark: <Moon />
	}

	const toggleTheme = () => {
		setTheme(theme === 'light' ? 'dark' : 'light')
	}

	return { theme, themeIcon, toggleTheme }
}
