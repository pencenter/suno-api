/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack: (config, { isServer }) => {
    config.module.rules.push({
      test: /\.(ttf|html)$/i,
      type: 'asset/resource'
    });
    if (isServer) {
      const existingExternals = config.externals || [];
      config.externals = [
        ...(Array.isArray(existingExternals) ? existingExternals : [existingExternals]),
        'electron',
        'rebrowser-playwright-core',
        '@playwright/browser-chromium',
        'ghost-cursor-playwright',
        '@2captcha/captcha-solver',
        'tree-sitter',
        'tree-sitter-json',
        'tree-sitter-yaml',
      ];
    }
    return config;
  },
  experimental: {
    serverMinification: false,
  },
};
export default nextConfig;
