/** @type {import('next').NextConfig} */
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { join } from 'path';

const nextConfig = {
	reactStrictMode: true,
	webpack(config) {
		config.module.rules.push({
			test: /\.svg$/,
			use: ['@svgr/webpack']
		});

		return config;
	},
	images: {
		remotePatterns: [
			{
				protocol: 'https',
				hostname: 'tmdb.org',
				port: '',
				pathname: '/t/p/**'
			},
			{ protocol: 'https', hostname: 'themoviedb.org', port: '', pathname: '/t/p/**' },
			{ protocol: 'https', hostname: 'image.tmdb.org', port: '', pathname: '/t/p/**' }
		]
	},
	sassOptions: {
		includePaths: [join(__dirname, 'src/assets/scss')]
	}
};

export default nextConfig;
