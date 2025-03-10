import { sveltekit } from '@sveltejs/kit/vite';

/** @type {import('vite').UserConfig} */
const config = {
  plugins: [sveltekit()],
  define: {
    'import.meta.env.KHULNASOFT_ANALYTICS_ID': JSON.stringify(process.env.KHULNASOFT_ANALYTICS_ID)
  }
};

export default config;
