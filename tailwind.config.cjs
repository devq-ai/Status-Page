/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{js,svelte,ts}', './index.html'],
	theme: {
		extend: {
			colors: {
				// Dark Palette 1: "Midnight UI" (Elegant & Minimal)
				primary: {
					DEFAULT: '#1B03A3', // Neon Blue
					foreground: '#E3E3E3', // Soft White
				},
				secondary: {
					DEFAULT: '#9D00FF', // Neon Purple
					foreground: '#A3A3A3', // Stone Grey
				},
				accent: {
					DEFAULT: '#FF10F0', // Neon Pink
				},
				destructive: {
					DEFAULT: '#FF3131', // Neon Red
				},
				success: {
					DEFAULT: '#39FF14', // Neon Green
				},
				warning: {
					DEFAULT: '#E9FF32', // Neon Yellow
				},
				info: {
					DEFAULT: '#00FFFF', // Neon Cyan
				},
				background: {
					primary: '#010B13', // Rich Black
					secondary: '#0F1111', // Charcoal Black
					surface: '#1A1A1A', // Midnight Black
				},
				foreground: {
					primary: '#E3E3E3', // Soft White
					secondary: '#A3A3A3', // Stone Grey
					disabled: '#606770', // Neutral Grey
				},
				overlay: 'rgba(18, 18, 18, 0.67)', // Transparent Dark
			},
			fontFamily: {
				mono: ['JetBrains Mono', 'Consolas', 'Monaco', 'monospace'],
			},
		},
	},
	/* eslint @typescript-eslint/no-require-imports: "off" */
	plugins: [require('daisyui')],
	daisyui: {
		logs: false,
		themes: [
			{
				ptolemies: {
					// Custom DaisyUI theme for Ptolemies
					"primary": "#1B03A3",           // Neon Blue
					"secondary": "#9D00FF",         // Neon Purple  
					"accent": "#FF10F0",            // Neon Pink
					"neutral": "#1A1A1A",           // Midnight Black
					"base-100": "#010B13",          // Rich Black
					"base-200": "#0F1111",          // Charcoal Black
					"base-300": "#1A1A1A",          // Midnight Black
					"info": "#00FFFF",              // Neon Cyan
					"success": "#39FF14",           // Neon Green
					"warning": "#E9FF32",           // Neon Yellow
					"error": "#FF3131",             // Neon Red
					
					// Text colors
					"base-content": "#E3E3E3",      // Soft White
					"primary-content": "#E3E3E3",   // Soft White
					"secondary-content": "#A3A3A3", // Stone Grey
					"accent-content": "#E3E3E3",    // Soft White
					"neutral-content": "#A3A3A3",   // Stone Grey
					"info-content": "#010B13",      // Rich Black
					"success-content": "#010B13",   // Rich Black
					"warning-content": "#010B13",   // Rich Black
					"error-content": "#E3E3E3",     // Soft White
				}
			}
		],
		base: true,
		styled: true,
		utils: true,
		prefix: "",
		darkTheme: "ptolemies",
	},
	darkMode: 'class',
};
