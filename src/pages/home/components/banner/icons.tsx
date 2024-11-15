import kaliLinux from '@/assets/kali-dragon-icon.svg'
import burpsuite from '@/assets/burpsuite-icon.svg'
import wireshark from '@/assets/wireshark-icon.svg'

import cisco from '@/assets/cisco-icon.svg'

export const Icons = {
	GitHub: () => (
		<svg
			width='100'
			height='100'
			viewBox='0 0 438.549 438.549'
		>
			<path
				fill='currentColor'
				d='M409.132 114.573c-19.608-33.596-46.205-60.194-79.798-79.8-33.598-19.607-70.277-29.408-110.063-29.408-39.781 0-76.472 9.804-110.063 29.408-33.596 19.605-60.192 46.204-79.8 79.8C9.803 148.168 0 184.854 0 224.63c0 47.78 13.94 90.745 41.827 128.906 27.884 38.164 63.906 64.572 108.063 79.227 5.14.954 8.945.283 11.419-1.996 2.475-2.282 3.711-5.14 3.711-8.562 0-.571-.049-5.708-.144-15.417a2549.81 2549.81 0 01-.144-25.406l-6.567 1.136c-4.187.767-9.469 1.092-15.846 1-6.374-.089-12.991-.757-19.842-1.999-6.854-1.231-13.229-4.086-19.13-8.559-5.898-4.473-10.085-10.328-12.56-17.556l-2.855-6.57c-1.903-4.374-4.899-9.233-8.992-14.559-4.093-5.331-8.232-8.945-12.419-10.848l-1.999-1.431c-1.332-.951-2.568-2.098-3.711-3.429-1.142-1.331-1.997-2.663-2.568-3.997-.572-1.335-.098-2.43 1.427-3.289 1.525-.859 4.281-1.276 8.28-1.276l5.708.853c3.807.763 8.516 3.042 14.133 6.851 5.614 3.806 10.229 8.754 13.846 14.842 4.38 7.806 9.657 13.754 15.846 17.847 6.184 4.093 12.419 6.136 18.699 6.136 6.28 0 11.704-.476 16.274-1.423 4.565-.952 8.848-2.383 12.847-4.285 1.713-12.758 6.377-22.559 13.988-29.41-10.848-1.14-20.601-2.857-29.264-5.14-8.658-2.286-17.605-5.996-26.835-11.14-9.235-5.137-16.896-11.516-22.985-19.126-6.09-7.614-11.088-17.61-14.987-29.979-3.901-12.374-5.852-26.648-5.852-42.826 0-23.035 7.52-42.637 22.557-58.817-7.044-17.318-6.379-36.732 1.997-58.24 5.52-1.715 13.706-.428 24.554 3.853 10.85 4.283 18.794 7.952 23.84 10.994 5.046 3.041 9.089 5.618 12.135 7.708 17.705-4.947 35.976-7.421 54.818-7.421s37.117 2.474 54.823 7.421l10.849-6.849c7.419-4.57 16.18-8.758 26.262-12.565 10.088-3.805 17.802-4.853 23.134-3.138 8.562 21.509 9.325 40.922 2.279 58.24 15.036 16.18 22.559 35.787 22.559 58.817 0 16.178-1.958 30.497-5.853 42.966-3.9 12.471-8.941 22.457-15.125 29.979-6.191 7.521-13.901 13.85-23.131 18.986-9.232 5.14-18.182 8.85-26.84 11.136-8.662 2.286-18.415 4.004-29.263 5.146 9.894 8.562 14.842 22.077 14.842 40.539v60.237c0 3.422 1.19 6.279 3.572 8.562 2.379 2.279 6.136 2.95 11.276 1.995 44.163-14.653 80.185-41.062 108.068-79.226 27.88-38.161 41.825-81.126 41.825-128.906-.01-39.771-9.818-76.454-29.414-110.049z'
			/>
		</svg>
	),
	Cisco: () => (
		<img
			src={cisco}
			alt='cisco-icon'
		/>
	),
	KaliLinux: () => (
		<img
			src={kaliLinux}
			alt='kali-linux-icon'
		/>
	),
	Burpsuite: () => (
		<img
			src={burpsuite}
			alt='burpsuite-icon'
			className='w-12'
		/>
	),
	Wireshark: () => (
		<img
			src={wireshark}
			alt='wireshark-icon'
		/>
	),
	OWASP: () => (
		<div className='text-black dark:text-white'>
			<svg
				version='1.0'
				xmlns='http://www.w3.org/2000/svg'
				width='48px'
				height='48px'
				viewBox='0 0 400.000000 400.000000'
				preserveAspectRatio='xMidYMid meet'
			>
				<g
					transform='translate(0.000000,400.000000) scale(0.100000,-0.100000)'
					fill='currentColor'
					stroke='none'
				>
					<path
						d='M1845 3794 c-16 -2 -66 -9 -110 -15 -102 -13 -283 -60 -383 -100
-118 -47 -277 -133 -382 -207 -141 -99 -347 -309 -442 -452 -137 -205 -232
-433 -280 -672 -31 -153 -33 -479 -4 -633 107 -577 462 -1047 981 -1299 249
-121 490 -176 775 -176 285 0 526 55 775 176 519 252 874 722 981 1299 29 154
27 480 -4 633 -48 239 -143 467 -280 672 -95 143 -301 353 -442 452 -219 154
-476 260 -739 305 -84 14 -386 26 -446 17z m422 -295 c292 -50 556 -185 772
-394 170 -165 282 -329 361 -532 222 -567 89 -1197 -345 -1628 -316 -314 -786
-478 -1215 -424 -198 24 -329 63 -505 149 -629 306 -963 1015 -800 1697 69
287 206 525 426 738 348 337 818 479 1306 394z'
					/>
					<path
						d='M2640 3100 c0 -6 11 -33 25 -60 14 -27 25 -61 25 -74 0 -24 -28 -106
-36 -106 -2 0 -14 11 -28 25 -36 36 -69 32 -117 -15 -23 -22 -44 -40 -48 -40
-4 0 -14 -13 -24 -29 -18 -31 -24 -88 -13 -136 l6 -30 -74 0 -74 0 -34 55
c-34 53 -35 57 -29 128 7 78 -1 127 -12 81 -4 -15 -11 -58 -17 -97 -9 -62 -7
-76 10 -117 28 -64 26 -68 -20 -45 -36 18 -41 26 -65 101 -48 153 -67 160 -34
13 13 -60 30 -108 42 -121 24 -27 23 -27 -23 -10 -19 7 -59 38 -89 70 -50 53
-71 68 -71 49 0 -4 23 -36 51 -71 43 -53 64 -69 125 -97 41 -18 74 -38 74 -44
0 -14 -3 -13 -159 15 -483 87 -913 122 -1171 96 -122 -13 -141 -20 -124 -49
31 -50 272 -199 414 -255 80 -31 260 -67 340 -67 52 0 71 6 157 51 105 56 108
56 453 85 l75 6 21 -46 c18 -40 19 -46 5 -40 -96 42 -203 -12 -402 -204 -135
-129 -201 -213 -295 -368 -70 -115 -229 -432 -221 -440 10 -10 410 200 522
274 138 91 222 166 346 305 130 147 172 239 147 328 l-7 25 44 -20 c31 -15 45
-27 45 -41 0 -11 -9 -110 -20 -219 l-20 -199 -48 -81 -47 -81 1 -105 c1 -148
30 -266 99 -404 86 -173 198 -336 231 -336 19 0 24 26 36 177 18 251 -11 613
-83 1028 -42 249 -43 255 -31 255 6 0 25 -32 43 -72 27 -58 45 -81 98 -125 36
-29 69 -53 73 -53 19 0 4 21 -50 72 -32 29 -64 69 -70 87 -16 45 -15 47 7 27
21 -19 149 -56 196 -56 44 0 17 15 -83 46 -76 23 -84 28 -102 65 -11 21 -17
39 -13 39 5 0 31 -9 58 -19 28 -11 61 -18 75 -16 100 15 160 29 160 37 0 8
-126 4 -172 -6 -4 0 -31 14 -60 33 l-54 34 1 72 0 72 72 -5 72 -5 35 37 c50
55 52 56 75 77 30 27 27 66 -9 99 l-29 27 45 18 c62 23 84 22 147 -9 59 -28
67 -31 67 -17 0 13 -119 71 -144 71 -12 0 -46 -11 -76 -23 l-55 -22 -66 66
-65 66 19 44 c28 64 26 116 -8 177 -26 49 -45 66 -45 42z'
					/>
					<path
						d='M3150 550 c0 -5 0 -13 0 -17 -1 -5 14 -10 32 -13 l33 -5 3 -97 c2
-89 4 -98 22 -98 18 0 20 9 22 98 l3 97 33 3 c24 2 32 8 32 23 0 17 -8 19 -90
19 -53 0 -90 -4 -90 -10z'
					/>
					<path
						d='M3360 440 c0 -113 1 -120 20 -120 18 0 20 7 20 76 0 76 12 92 24 32
18 -91 26 -109 49 -106 18 2 26 16 44 83 l21 80 1 -83 c1 -81 2 -83 24 -80 21
3 22 6 22 118 l0 115 -35 0 -35 0 -19 -74 c-22 -81 -23 -81 -51 22 -16 55 -17
57 -51 57 l-34 0 0 -120z'
					/>
				</g>
			</svg>
		</div>
	)
}
