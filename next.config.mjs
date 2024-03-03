/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // swcMinify: true,
  // async rewrites(){
  //   return [
  //     {
  //       source: "/api/:path*",
  //       destination: 
  //     }
  //   ]
  // },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'i.imgur.com',
        port: '',
      },
    ],
  },
  experimental: {
    appDir: true,
    typedRoutes: true,
    scrollRestoration: true,
  },
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/i,
      issuer: /\.[jt]sx?$/,
      use: [
        {
          loader: '@svgr/webpack',
          options: {
            svgoConfig: {
              plugins: [
                {
                  name: 'preset-default',
                  params: {
                    overrides: {
                      cleanupIds: false,
                      removeViewBox: false,
                    },
                  },
                },
                'removeXMLNS',
              ],
            },
          },
        },
      ],
    })

    return config
  },
}

export default nextConfig;
