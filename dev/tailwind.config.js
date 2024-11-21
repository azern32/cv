import aspectRatio from '@tailwindcss/aspect-ratio';
import containerQueries from '@tailwindcss/container-queries';
import forms from '@tailwindcss/forms';
import typography from '@tailwindcss/typography';

/** @type {import('tailwindcss').Config} */
export default {
	content: [
		'./src/**/*.{html,js,svelte,ts}',
		"./node_modules/flowbite-svelte/**/*.{html,js,svelte,ts}",
	],
	darkMode: 'selector',
	theme: {
		extend: {
			colors: {
				// flowbite-svelte
				primary: {
					50: '#FFF5F2',
					100: '#FFF1EE',
					200: '#FFE4DE',
					300: '#FFD5CC',
					400: '#FFBCAD',
					500: '#FE795D', 600: '#EF562F', 700: '#EB4F27', 800: '#CC4522', 900: '#A5371B'
				},
			}
		}
	},

	plugins: [typography, forms, containerQueries, aspectRatio,
		require('flowbite/plugin'),
		require("daisyui")],

	daisyui: {
		themes: ['light'], // false: only light + dark | true: all themes | array: specific themes like this ["light", "dark", "cupcake"]
		// darkTheme: "dark", // name of one of the included themes for dark mode
		// base: true, // applies background color and foreground color for root element by default
		// styled: true, // include daisyUI colors and design decisions for all components
		// utils: true, // adds responsive and modifier utility classes
		prefix: "dui-", // prefix for daisyUI classnames (components, modifiers and responsive class names. Not colors)
		// logs: true, // Shows info about daisyUI version and used config in the console when building your CSS
		// themeRoot: ":root", // The element that receives theme color CSS variables
	},
};
