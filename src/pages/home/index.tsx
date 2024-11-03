import { About, Banner, Courses, Education, Experience } from './components'

const HomePage = () => {
	return (
		<main className='mx-auto grid max-w-5xl px-5'>
			<section
				id='banner'
				className='grid min-h-screen'
			>
				<Banner />
			</section>

			<section
				id='about'
				className='grid py-8'
			>
				<About />
			</section>

			<section
				id='experience'
				className='grid py-8'
			>
				<Experience />
			</section>

			<section
				id='education'
				className='grid py-8'
			>
				<Education />
			</section>

			<section
				id='courses'
				className='grid py-8'
			>
				<Courses />
			</section>
		</main>
	)
}

export default HomePage
