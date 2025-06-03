/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {
				'space-blue': {
					light: '#8ecae6',
					DEFAULT: '#219ebc',
					dark: '#023047',
				},
				'space-orange': {
					light: '#ffb703',
					DEFAULT: '#fb8500',
				},
			},
			fontFamily: {
				sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
			},
			animation: {
				'fade-in': 'fadeIn 1s ease-out',
				'float': 'float 6s ease-in-out infinite',
				'twinkle': 'twinkle 1.5s ease-in-out infinite',
			},
			keyframes: {
				fadeIn: {
					'0%': { opacity: '0' },
					'100%': { opacity: '1' },
				},
				float: {
					'0%, 100%': { transform: 'translateY(0)' },
					'50%': { transform: 'translateY(-20px)' },
				},
				twinkle: {
					'0%, 100%': { opacity: '1' },
					'50%': { opacity: '0.3' },
				},
			},
			backdropBlur: {
				'xs': '2px',
			},
		},
	},
	plugins: [],
}