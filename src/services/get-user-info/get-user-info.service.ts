import { IUser } from './interfaces'

export const getUserInfo = (): IUser => {
	const userInfo: IUser = {
		name: 'Laura Mamián',
		image: '/',
		country: 'Colombia',
		role: 'Ethical Hacker | Pentester | Frontend Developer | Electronics and Telecommunications Engineer',
		email: 'lauramamian25@gmail.com',
		bio: [
			'Hello there! 👋',
			"I'm an Electronic and Telecommunications Engineering professional with 2 years of experience in the tech field 💼, specializing in ethical hacking 🕵️‍♂️ and cybersecurity 🔐.",
			'Passionate about protecting digital landscapes 🌐, I stay on top of emerging security challenges 🚨 and am constantly exploring innovative ways to defend against threats 💻🔒.',
			'Driven by a commitment to lifelong learning 📘✨, I love tackling complex security problems 🔧 and am excited to contribute my skills to a collaborative, forward-thinking team 🤝🚀.'
		],
		shortbio:
			'Ethical Hacker | Pentester | Frontend Developer | Electronics and Telecommunications Engineer',
		projects: [],
		experience: [
			{
				name: 'Frontend Developer',
				company: 'PulpoLine',
				from: '2024-05-01',
				to: null,
				companyLink: '',
				description: ''
			},
			{
				name: 'Frontend Web Developer',
				company: 'Autónomo',
				from: '2023-08-01',
				to: null,
				companyLink: '',
				description: ''
			},
			{
				name: 'Estudiante CUC 2023',
				company: 'Red Internacional de Ciberseguridad',
				from: '2023-04-01',
				to: '2023-10-01',
				companyLink: '',
				description: 'Curso Universitario en Ciberseguridad – CUC 2023'
			},
			{
				name: 'Pentester',
				company: 'TBBC',
				from: '2023-08-01',
				to: '2023-08-31',
				companyLink: '',
				description: ''
			},
			{
				name: 'Frontend Developer',
				company: 'TBBC',
				from: '2023-01-01',
				to: '2023-08-01',
				companyLink: '',
				description: ''
			},
			{
				name: 'Frontend Web Developer',
				company: 'Autónomo',
				from: '2020-06-01',
				to: '2023-01-01',
				companyLink: '',
				description:
					'Desarrollo de proyectos personales, aplicando tecnologías de frontend como React, HTML, CSS, Bootstrap y Tailwind, y trabajando con lenguajes como JavaScript, PHP, SQL, Java, Python y C++.'
			},
			{
				name: 'CPITS - Programa de certificación de seguridad en TI',
				company: 'Trend Micro',
				from: '2022-10-01',
				to: '2022-12-31',
				companyLink: '',
				description:
					'CPITS es un programa de prácticas remunerado que desarrolla habilidades técnicas y sociales en ciberseguridad.'
			}
		],
		education: [
			{
				name: 'Electronic and Telecommunications Engineering',
				institution: 'Universidad del Cauca',
				companyLink: 'https://www.linkedin.com/school/universidad-del-cauca/',
				from: '2017-01-01',
				to: '2025-03-14'
			}
		],
		courses: [
			{
				name: 'Bootcamp Análisis de Datos Nivel Avanzado',
				institution: 'AZ - UTP',
				from: null,
				to: '2024-10-01',
				id: 'b6cea5ba-9f5e-44a8-a229-6e472ccdc074',
				link: null
			},
			{
				name: 'Fundamentos de la ciberseguridad',
				institution: 'Google',
				from: null,
				to: '2024-08-01',
				id: 'EG50DVXTTLVT',
				link: null
			},
			{
				name: 'Ve a lo seguro: Gestiona los riesgos de seguridad',
				institution: 'Google',
				from: null,
				to: '2024-08-01',
				id: 'BC3RCVL2EC48',
				link: null
			},
			{
				name: 'Detección y respuesta amenazas Linux',
				institution: 'Coursera',
				from: null,
				to: '2024-07-01',
				id: null,
				link: null
			},
			{
				name: 'EF SET Certificate',
				institution: 'EF SET',
				from: null,
				to: '2024-02-01',
				id: null,
				link: null
			},
			{
				name: 'Fundamentos de la gestión de proyectos',
				institution: 'Google',
				from: null,
				to: '2024-08-01',
				id: 'P5XV2F4WCGP3',
				link: null
			},
			{
				name: 'Liderazgo e influencia en la gestión de proyectos',
				institution: 'Google',
				from: null,
				to: '2024-08-01',
				id: 'N55GSY5B5BSP',
				link: null
			},
			{
				name: 'Fundamentos de HTML y CSS',
				institution: 'Google',
				from: null,
				to: '2024-07-01',
				id: 'B66J3T6RCFG4',
				link: null
			},
			{
				name: 'Taller de React JS',
				institution: 'Codify Academy',
				from: null,
				to: '2024-08-01',
				id: null,
				link: null
			},
			{
				name: 'Fundamentos de Javascript',
				institution: 'Google',
				from: null,
				to: '2024-07-01',
				id: '4ZRTWLF3TQ7Y',
				link: null
			},
			{
				name: 'Gestión de recursos en un equipo de trabajo',
				institution: 'Google',
				from: null,
				to: '2024-08-01',
				id: 'N5VX5YFT8CKD',
				link: null
			},
			{
				name: 'Desarrollo Web en JavaScript y Node JS',
				institution: 'Aula Virtual',
				from: null,
				to: '2024-09-01',
				id: 'U1KHG58MEFCY',
				link: null
			},
			{
				name: 'Ciberseguridad para todos',
				institution: 'Cisco',
				from: null,
				to: '2024-08-01',
				id: null,
				link: null
			},
			{
				name: 'Creación de aplicaciones web con HTML y CSS',
				institution: 'Academia de educación en línea',
				from: null,
				to: '2024-07-01',
				id: null,
				link: null
			},
			{
				name: 'Fundamentos de la programación',
				institution: 'Google',
				from: null,
				to: '2024-08-01',
				id: null,
				link: null
			},
			{
				name: 'Certificación: Ciberseguridad',
				institution: 'Google',
				from: null,
				to: '2024-09-01',
				id: 'AA9XV6XZCMT7',
				link: null
			},
			{
				name: 'HTML, CSS, Javascript y React',
				institution: 'Google',
				from: null,
				to: '2024-08-01',
				id: null,
				link: null
			},
			{
				name: 'Pruebas de software',
				institution: 'Codify Academy',
				from: null,
				to: '2024-08-01',
				id: null,
				link: null
			},
			{
				name: 'Ciberseguridad en la nube',
				institution: 'Google',
				from: null,
				to: '2024-09-01',
				id: null,
				link: null
			},
			{
				name: 'Bootcamp de React JS',
				institution: 'Codify Academy',
				from: null,
				to: '2024-08-01',
				id: null,
				link: null
			},
			{
				name: 'Fundamentos de React',
				institution: 'Codify Academy',
				from: null,
				to: '2024-09-01',
				id: null,
				link: null
			},
			{
				name: 'Ciberseguridad en redes',
				institution: 'Google',
				from: null,
				to: '2024-09-01',
				id: null,
				link: null
			},
			{
				name: 'Taller de tecnologías web',
				institution: 'Codify Academy',
				from: null,
				to: '2024-09-01',
				id: null,
				link: null
			},
			{
				name: 'Seguridad en la programación web',
				institution: 'Codify Academy',
				from: null,
				to: '2024-09-01',
				id: null,
				link: null
			},
			{
				name: 'Ciberseguridad y hacking ético',
				institution: 'Google',
				from: null,
				to: '2024-08-01',
				id: null,
				link: null
			},
			{
				name: 'Manejo de bases de datos con SQL',
				institution: 'Aula Virtual',
				from: null,
				to: '2024-09-01',
				id: null,
				link: null
			},
			{
				name: 'Desarrollo de aplicaciones en la nube',
				institution: 'Aula Virtual',
				from: null,
				to: '2024-09-01',
				id: null,
				link: null
			},
			{
				name: 'Ciberseguridad en el trabajo',
				institution: 'Codify Academy',
				from: null,
				to: '2024-09-01',
				id: null,
				link: null
			},
			{
				name: 'Seguridad de redes',
				institution: 'Google',
				from: null,
				to: '2024-09-01',
				id: null,
				link: null
			},
			{
				name: 'Gestión de riesgos en proyectos de TI',
				institution: 'Codify Academy',
				from: null,
				to: '2024-09-01',
				id: null,
				link: null
			}
		],
		techSkills: [],
		links: {
			linkedin: 'https://www.linkedin.com/in/lauramamianc',
			github: 'https://github.com/LauraMamian/',
			portfolio: 'https://lauramamian.github.io',
			email: 'mailto:lauramamian25@gmail.com',
			cv: ''
		},
		skills: [],
		languages: []
	}

	return userInfo
}
