import { env } from '$env/dynamic/private';

/** @type {import('./$types').LayoutServerLoad} */
export function load() {
	return { analyticsId: env.KHULNASOFT_ANALYTICS_ID };
}
