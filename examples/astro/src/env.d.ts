/// <reference types="astro/client-image" />

interface ImportMetaEnv {
	readonly PUBLIC_KHULNASOFT_ANALYTICS_ID: string;
}

interface ImportMeta {
	readonly env: ImportMetaEnv;
}
