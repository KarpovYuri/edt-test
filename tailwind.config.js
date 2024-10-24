/** @type {import('tailwindcss').Config} */
export default {
	content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
	theme: {
		extend: {
			backgroundImage: {
				trash: "url('/src/assets/icons/trash.svg')",
				save: "url('/src/assets/icons/save.svg')",
				edit: "url('/src/assets/icons/edit.svg')",
			},
		},
	},
	plugins: [],
}
