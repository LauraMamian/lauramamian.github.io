import { IUser } from './interfaces'

export const getUserInfo = (): IUser => {
	const userInfo: IUser = {
		name: 'Laura Mamián',
		alias: 'ScarletQueen',
		image: '/',
		country: 'Colombia',
		role: 'Ethical Hacker | Pentester | Frontend Developer | Electronics and Telecommunications Engineer',
		email: 'lauramamian25@gmail.com',
		bio: [
			'Hello there! 👋',
			'I am an Electronics and Telecommunications Engineering professional with over 3 years of experience in the technology field 💼, specializing in web development, ethical hacking 🕵️‍♂️ and cybersecurity 🔐.',
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
				to: '2024-11-20',
				companyLink: '',
				description: ''
			},
			{
				name: 'Frontend Web Developer',
				company: 'Autónomo',
				from: '2023-08-01',
				to: '2024-05-01',
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
				link: 'https://www.acreditta.com/credential/b6cea5ba-9f5e-44a8-a229-6e472ccdc074?resource_type=badge&resource=b6cea5ba-9f5e-44a8-a229-6e472ccdc074'
			},
			{
				name: 'Fundamentos de la ciberseguridad',
				institution: 'Google',
				from: null,
				to: '2024-08-01',
				id: 'EG50DVXTTLVT',
				link: 'https://www.coursera.org/account/accomplishments/verify/EG50DVXTTLVT'
			},
			{
				name: 'Ve a lo seguro: Gestiona los riesgos de seguridad',
				institution: 'Google',
				from: null,
				to: '2024-08-01',
				id: 'BC3RCVL2EC48',
				link: 'https://www.coursera.org/account/accomplishments/verify/BC3RCVL2EC48'
			},
			{
				name: 'Detección y respuesta amenazas Linux',
				institution: 'Coursera',
				from: null,
				to: '2024-07-01',
				id: null,
				link: 'https://www.credly.com/badges/479b8783-c37e-4a2d-bd15-6b7db7fa11a7/linked_in_profile'
			},
			{
				name: 'EF SET Certificate',
				institution: 'EF SET',
				from: null,
				to: '2024-02-01',
				id: null,
				link: 'https://cert.efset.org/63MZJn'
			},
			{
				name: ' Universidad HTML - Aprende HTML desde Cero hasta Experto',
				institution: 'Udemy',
				from: null,
				to: '2024-01-01',
				id: 'UC-166a4521-3bde-4627-a614-bd2f5d4341ed',
				link: 'https://udemy-certificate.s3.amazonaws.com/pdf/UC-166a4521-3bde-4627-a614-bd2f5d4341ed.pdf'
			},
			{
				name: 'Aprende React + Firebase | 2021',
				institution: 'Udemy',
				from: null,
				to: '2024-01-01',
				id: 'UC-ca192559-a312-4898-bea0-19c95eb12e0a',
				link: 'https://udemy-certificate.s3.amazonaws.com/pdf/UC-ca192559-a312-4898-bea0-19c95eb12e0a.pdf'
			},
			{
				name: 'Build a Custom E-Commerce Site in React + JavaScript Basics',
				institution: 'Udemy',
				from: null,
				to: '2024-01-01',
				id: 'UC-7312422b-bbf9-42b4-bab2-e92567875b7e',
				link: 'https://udemy-certificate.s3.amazonaws.com/pdf/UC-7312422b-bbf9-42b4-bab2-e92567875b7e.pdf'
			},
			{
				name: 'Complete Bootstrap & React Bootcamp with Hands-On Projects',
				institution: 'Udemy',
				from: null,
				to: '2024-01-01',
				id: 'UC-b6fffa75-cc82-87d0-aae40e38a140',
				link: 'https://udemy-certificate.s3.amazonaws.com/pdf/UC-b6fffa75-cc82-4d3b-87d0-aae40e38a140.pdf'
			},
			{
				name: 'Modern JavaScript for React JS - ES6 [2023] ',
				institution: 'Udemy',
				from: null,
				to: '2024-01-01',
				id: 'UC-8c95829f-ec95-4b90-80e7-253fd04c6729',
				link: 'https://udemy-certificate.s3.amazonaws.com/pdf/UC-8c95829f-ec95-4b90-80e7-253fd04c6729.pdf'
			},
			{
				name: 'Next.js: El framework de React para producción',
				institution: 'Udemy',
				from: null,
				to: '2024-01-01',
				id: 'UC-86aa561d-97b7-4754-8663-4d9fa15849cd',
				link: 'https://udemy-certificate.s3.amazonaws.com/pdf/UC-86aa561d-97b7-4754-8663-4d9fa15849cd.pdf'
			},
			{
				name: 'Node.js - Creando API con Express y MongoDB (Incl. Deno)',
				institution: 'Udemy',
				from: null,
				to: '2024-01-01',
				id: 'UC-d2cd57c8-c148-4aa5-adde-cd2eb1a19071',
				link: 'https://udemy-certificate.s3.amazonaws.com/pdf/UC-d2cd57c8-c148-4aa5-adde-cd2eb1a19071.pdf'
			},
			{
				name: 'Universidad CSS - Aprende CSS desde Cero hasta Experto! ',
				institution: 'Udemy',
				from: null,
				to: '2024-01-01',
				id: 'UC-27e70b47-b19e-435a-a55d-148fa76cbe55',
				link: 'https://udemy-certificate.s3.amazonaws.com/pdf/UC-27e70b47-b19e-435a-a55d-148fa76cbe55.pdf'
			},
			{
				name: 'Universidad Desarrollo Web - FrontEnd Web Developer! ',
				institution: 'Udemy',
				from: null,
				to: '2024-01-01',
				id: 'UC-410edfea-f045-4b18-989a-62dce676fb65',
				link: 'https://udemy-certificate.s3.amazonaws.com/pdf/UC-410edfea-f045-4b18-989a-62dce676fb65.pdf'
			},
			{
				name: 'Curso de Criptografía',
				institution: 'Universidad Autónoma de Occidente',
				from: null,
				to: '2023-11-01',
				id: '6wWCSWsQ31',
				link: 'https://drive.google.com/file/d/11kCduAPx6V9MC3DZxPS57DCS3oGfBo6z/view?usp=sharing'
			},
			{
				name: 'Curso Gratuito Hacking ético Gamificado HACKLAB',
				institution: 'HackerMentor',
				from: null,
				to: '2023-08-01',
				id: '119cf625-cc1c-494b-a0a1-9c59b28195ce',
				link: 'https://credsverse.com/credentials/119cf625-cc1c-494b-a0a1-9c59b28195ce'
			},
			{
				name: 'CyberOps Associate',
				institution: 'Cisco Networking Academy',
				from: null,
				to: '2023-07-01',
				id: null,
				link: 'https://www.credly.com/badges/0d65656c-0a9e-41ec-8c4d-c0c76f79a238/linked_in_profile'
			},
			{
				name: 'ISO/IEC 27001 Implementando Seguridad de la Información',
				institution: 'Udemy',
				from: null,
				to: '2023-06-01',
				id: 'UC-2cfc3bc5-379d-434b-be97-5665720b285b',
				link: 'https://www.udemy.com/certificate/UC-2cfc3bc5-379d-434b-be97-5665720b285b/'
			},
			{
				name: ' ISO/IEC 27001. Prepara a las Empresas para la Certificación',
				institution: 'Udemy',
				from: null,
				to: '2023-05-01',
				id: 'UC-e34f3892-7983-44a7-8ff8-d744cba40a3f',
				link: 'https://www.udemy.com/certificate/UC-e34f3892-7983-44a7-8ff8-d744cba40a3f/'
			},
			{
				name: 'Cybersecurity Essentials',
				institution: 'Cisco Networking Academy',
				from: null,
				to: '2023-05-01',
				id: null,
				link: 'https://www.credly.com/badges/553ee2e2-059a-40d0-8651-0707b3a2f93b/linked_in_profile'
			},
			{
				name: 'Introduction to Cybersecurity',
				institution: 'Cisco Networking Academy',
				from: null,
				to: '2023-04-01',
				id: null,
				link: 'https://www.credly.com/badges/ff9a60e9-b545-42d5-801a-b20f0fc2ef0c/linked_in_profile'
			},
			{
				name: 'Programa Oracle Next Education F2 T3',
				institution: 'Alura Latam',
				from: null,
				to: '2023-01-01',
				id: 'b8121b1c-f95d-4e1a-a229-c18145032c4f',
				link: 'https://app.aluracursos.com/program/certificate/b8121b1c-f95d-4e1a-a229-c18145032c4f'
			},
			{
				name: 'Layouts Responsivos: Trabajando con layouts mobile',
				institution: 'Alura Latam',
				from: null,
				to: '2022-12-01',
				id: 'e3a2ff50-de67-48c6-9ee9-c81035d959b7',
				link: 'https://app.aluracursos.com/certificate/e3a2ff50-de67-48c6-9ee9-c81035d959b7'
			},
			{
				name: 'Trend Micro Certified Cyber Security Professional',
				institution: 'Trend Micro',
				from: null,
				to: '2022-12-01',
				id: null,
				link: 'https://drive.google.com/file/d/1uK-plQpc014PdTOPqeHytbmE-flU6cgo/view?usp=sharing'
			},
			{
				name: 'Apex One as a Service Certified Professional',
				institution: 'Trend Micro',
				from: '2022-11-01',
				to: '2024-11-01',
				id: null,
				link: 'https://drive.google.com/file/d/1u5tUqEAnsYppM_wX5qYyyU0bVTRbdAHy/view?usp=sharing'
			},
			{
				name: 'Deep Security 20 Certified Professional ',
				institution: 'Trnd Micro',
				from: '2022-11-01',
				to: '2024-12-01',
				id: null,
				link: null
			},
			{
				name: 'Formación Principiante en Programación G3 - ONE',
				institution: 'Alura Latam',
				from: null,
				to: '2022-09-01',
				id: '40fa8e73-1d8d-4e63-952e-deab2575527b',
				link: 'https://app.aluracursos.com/degree/certificate/40fa8e73-1d8d-4e63-952e-deab2575527b'
			},
			{
				name: 'Git y GitHub: controle y comparta su código',
				institution: 'Alura Latam',
				from: null,
				to: '2022-09-01',
				id: '060e0831-d705-4e9f-8e41-f7724132fd78',
				link: 'https://app.aluracursos.com/certificate/060e0831-d705-4e9f-8e41-f7724132fd78'
			},
			{
				name: 'PROGRAMA DE FORMACIÓN GENERAL (CICLO 1, 2, 3 Y 4A) EN HABILIDADES DE PROGRAMACIÓN DE MISIÓN TIC 2022 CON PROFUNDIZACIÓN EN DESARROLLO DE APLICACIONES WEB',
				institution: 'Universidad Nacional de Colombia',
				from: null,
				to: '2021-12-01',
				id: 'K0JZHCKSBMIGY',
				link: 'https://hermesextension.unal.edu.co/ords/f?p=116:17'
			},
			{
				name: '3049_CODIFICACIÓN Y PROGRAMACIÓN',
				institution:
					'Educación Continua de la Pontificia Universidad Javeriana',
				from: null,
				to: '2021-04-01',
				id: 'C65EAC2EA001',
				link: 'https://wallet.xertify.co/certificates/C65EAC2EA001'
			},
			{
				name: 'Certificado Verificado de edX para el curso SQL for Data Science',
				institution: 'edX',
				from: null,
				to: '2020-08-01',
				id: '00d83a0ea78848319e222c2b996103f2',
				link: 'https://courses.edx.org/certificates/00d83a0ea78848319e222c2b996103f2'
			},
			{
				name: 'ML0101EN: Machine Learning with Python: A Practical Introduction',
				institution: 'IBM',
				from: null,
				to: '2020-08-01',
				id: 'bd1026fe308549eea4ab1d83c8afe630',
				link: 'https://courses.edx.org/certificates/bd1026fe308549eea4ab1d83c8afe630'
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
