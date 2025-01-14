/** @type {import('tailwindcss').Config} */

// Space clamp
// https://utopia.fyi/space/calculator?c=350,16,1.2,1920,20,1.25,5,2,&s=0.75|0.5|0.25|0.15,1.5|2|3|4|6,3xs-3xs&g=s,l,xl,12

// Font size clamp
// https://utopia.fyi/clamp/calculator?a=350,1920,11.2—14|12.8—16|14.4—18|16—20|17.6—22|19.2—24|24—30|28.8—36|38.4—48|48—60|57.6—72|76.8—96|102.4—128

// './node_modules/flowbite/**/*.js'

export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			padding : {
				"1": "clamp(0.125rem, 0.1111rem + 0.0637vi, 0.1875rem);",
				"2": "clamp(0.25rem, 0.2361rem + 0.0637vi, 0.3125rem);",
				"3": "clamp(0.5rem, 0.4721rem + 0.1274vi, 0.625rem);",
				"4": "clamp(0.75rem, 0.7082rem + 0.1911vi, 0.9375rem);",
				"5": "clamp(1rem, 0.9443rem + 0.2548vi, 1.25rem);",
				"6": "clamp(1.5rem, 1.4164rem + 0.3822vi, 1.875rem);",
				"7": "clamp(2rem, 1.8885rem + 0.5096vi, 2.5rem);",
				"8": "clamp(3rem, 2.8328rem + 0.7643vi, 3.75rem);",
				"9": "clamp(4rem, 3.7771rem + 1.0191vi, 5rem);",
				"10": "clamp(6rem, 5.6656rem + 1.5287vi, 7.5rem);",
			},
			margin : {
				"1": "clamp(0.125rem, 0.1111rem + 0.0637vi, 0.1875rem);",
				"2": "clamp(0.25rem, 0.2361rem + 0.0637vi, 0.3125rem);",
				"3": "clamp(0.5rem, 0.4721rem + 0.1274vi, 0.625rem);",
				"4": "clamp(0.75rem, 0.7082rem + 0.1911vi, 0.9375rem);",
				"5": "clamp(1rem, 0.9443rem + 0.2548vi, 1.25rem);",
				"6": "clamp(1.5rem, 1.4164rem + 0.3822vi, 1.875rem);",
				"7": "clamp(2rem, 1.8885rem + 0.5096vi, 2.5rem);",
				"8": "clamp(3rem, 2.8328rem + 0.7643vi, 3.75rem);",
				"9": "clamp(4rem, 3.7771rem + 1.0191vi, 5rem);",
				"10": "clamp(6rem, 5.6656rem + 1.5287vi, 7.5rem);",
			},
			gap : {
				"1": "clamp(0.125rem, 0.1111rem + 0.0637vi, 0.1875rem);",
				"2": "clamp(0.25rem, 0.2361rem + 0.0637vi, 0.3125rem);",
				"3": "clamp(0.5rem, 0.4721rem + 0.1274vi, 0.625rem);",
				"4": "clamp(0.75rem, 0.7082rem + 0.1911vi, 0.9375rem);",
				"5": "clamp(1rem, 0.9443rem + 0.2548vi, 1.25rem);",
				"6": "clamp(1.5rem, 1.4164rem + 0.3822vi, 1.875rem);",
				"7": "clamp(2rem, 1.8885rem + 0.5096vi, 2.5rem);",
				"8": "clamp(3rem, 2.8328rem + 0.7643vi, 3.75rem);",
				"9": "clamp(4rem, 3.7771rem + 1.0191vi, 5rem);",
				"10": "clamp(6rem, 5.6656rem + 1.5287vi, 7.5rem);",
			},
			screens : {
				"xs": "500px",
				"xxs": "400px" 
			},
			animation : {
				"spin-slow": "spin 30s ease-in-out infinite"
			}
		},
		colors: {
			pink: "#ffc4cd", 
			white: "#ffffff", 
			darkwhite: "#ffeeee", 
			beige: "#eee5e5", 
			darkbeige: "#ddcccc",
			lightgray: "#c7b8ba",
			gray: "#b0a3a7",
			mediumgray: "#837a81",
			darkgray: "#565058",
			dark: "#28262f",
			night: "#12101a",
			black: "#0a0909"
		},
		fontSize : {
			"xs" : "clamp(0.7rem, 0.661rem + 0.1783vi, 0.875rem)",
			"sm": "clamp(0.8rem, 0.7554rem + 0.2038vi, 1rem);",
			"base": "clamp(0.9rem, 0.8498rem + 0.2293vi, 1.125rem);",
			"md": "clamp(1rem, 0.9443rem + 0.2548vi, 1.25rem);",
			"lg": "clamp(1.1rem, 1.0387rem + 0.2803vi, 1.375rem);",
			"xl": "clamp(1.2rem, 1.1331rem + 0.3057vi, 1.5rem);",
			"2xl": "clamp(1.5rem, 1.4164rem + 0.3822vi, 1.875rem);",
			"3xl": "clamp(1.8rem, 1.6997rem + 0.4586vi, 2.25rem);",
			"4xl": "clamp(2.4rem, 2.2662rem + 0.6115vi, 3rem);",
			"5xl": "clamp(3rem, 2.8328rem + 0.7643vi, 3.75rem);",
			"6xl": "clamp(3.15rem, 2.849rem + 1.3758vi, 4.5rem);",
			"7xl": "clamp(3.3rem, 2.6981rem + 2.7516vi, 6rem);",
			"8xl": "clamp(3.6rem, 2.6191rem + 4.4841vi, 8rem);",
		},
	},
	plugins: [
	],
}
