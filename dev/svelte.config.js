// import autoadapter from '@sveltejs/adapter-auto';
import bunadapter from 'svelte-adapter-bun'
import staticadapter from '@sveltejs/adapter-static'
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';



/** @type {import('@sveltejs/kit').Config} */
const config = {
	preprocess: vitePreprocess(),
	kit: {
		// adapter-auto only supports some environments, see https://svelte.dev/docs/kit/adapter-auto for a list.
		// If your environment is not supported, or you settled on a specific environment, switch out the adapter.
		// See https://svelte.dev/docs/kit/adapters for more information about adapters.
		adapter: process.env.NODE_ENV === "production" ? staticadapter() : bunadapter(),
		paths: {
			base: process.env.NODE_ENV === 'production' ? '/sveltekit-github-pages' : '',
		}
	}
};

export default config;
