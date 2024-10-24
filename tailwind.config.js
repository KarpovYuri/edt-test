/** @type {import('tailwindcss').Config} */
export default {
	content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
	theme: {
		extend: {
			backgroundImage: {
				plus: "url('/src/assets/icons/plus.svg')",
				trash: "url('/src/assets/icons/trash.svg')",
				save: "url('/src/assets/icons/save.svg')",
				edit: "url('/src/assets/icons/edit.svg')",
				drag: "url('/src/assets/icons/drag.svg')",
			},
		},
	},
	plugins: [],
}
