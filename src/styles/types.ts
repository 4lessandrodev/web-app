export interface Color {
	primary:string;
	secondary:string;
	lightGray:string;
	gray:string;
	darkGray:string;
	white:string;
	black:string;
}

export interface Size { 
	small: string;
	regular: string;
	large: string;
}

export interface Weight { 
	thin: string;
	light: string;
	regular: string;
	medium: string;
	semiBold: string;
	bold: string;
	black: string;
}

export interface Family { 
	default: string;
	secondary: string;
}

export interface Font {
	family: Family;
	weight: Weight;
	size: Size;
}

export interface ThemeType {
	font: Font;
	color: Color;
}

export default ThemeType;
