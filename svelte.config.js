import adapter from '@sveltejs/adapter-vercel';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	kit: {
		adapter: adapter(),
		// Fix random bug that disallows the loading of static fonts
		vite: {
			server: {
				fs: {
					allow: ['..']
				}
			}
		}
	}
};

export default config;
