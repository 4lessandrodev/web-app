import { ThemeType } from './types';

export default {
	color: {
		primary: '#C3D1EE',
        secondary: '#252930',
        lightGray: '#F5F3F3',
        gray: '#CCCCCC',
        darkGray: '#B4B7C0',
        white: '#FFFFFF',
        black: '#252930'
	},
	font: {
		family: {
            default: "serif, sans-serif, monospace",
            secondary: 'Roboto',
		},
		size: {
			small: '0.7rem',
            regular: '1rem',
            large: '2rem',
		},
		weight: {
			thin: '200',
            light: '300',
            regular: '400',
            medium: '500',
            semiBold: '600',
            bold: '700',
            black: '800',
		}
	}
} as ThemeType;
