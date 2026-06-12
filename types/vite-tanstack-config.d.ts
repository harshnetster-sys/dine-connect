declare module '@lovable.dev/vite-tanstack-config';

declare module "*.css" {
	const content: string;
	export default content;
}

declare module "*.css?url" {
	const href: string;
	export default href;
}

declare module "*.jpg" {
	const src: string;
	export default src;
}

declare module "*.jpeg" {
	const src: string;
	export default src;
}

declare module "*.png" {
	const src: string;
	export default src;
}

declare module "*.svg" {
	const src: string;
	export default src;
}

declare module "*.webp" {
	const src: string;
	export default src;
}

