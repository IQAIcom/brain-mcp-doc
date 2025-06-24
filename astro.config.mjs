// @ts-check
import { defineConfig, passthroughImageService } from "astro/config";
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	integrations: [
		starlight({
			title: 'Brain MCP Docs',
			description: 'Documentation for the Brain MCP servers and tools.',
			social: [{ icon: 'github', label: 'GitHub', href: 'https://github.com/withastro/starlight' }],
			logo: {
				dark: "./src/assets/brain-logo-dark.svg",
				light: "./src/assets/brain-logo-light.svg",
				replacesTitle: true,
			},
			customCss: ["./src/styles/custom.css"],
			sidebar: [
				{
					label: 'Get Started',
					items: [
						// Each item here is one entry in the navigation menu.
						{ label: 'Overview', slug: 'get-started/overview' },
					],
				},
				{
					label: 'IQ AI MCP Servers',
					autogenerate: { directory: 'docs' },
				},
				{
					label: 'IQ ADK',
					autogenerate: { directory: 'adk-docs' },
					// items: [
					// 	// Each item here is one entry in the navigation menu.
					// 	{ label: 'Overview', slug: 'adk-docs/adk' },
					// ],
				},
			],
		}),
	],
	image: {
		service: passthroughImageService(),
	},
});
