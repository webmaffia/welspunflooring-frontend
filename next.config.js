// next.config.js
module.exports = {
    images: {
      remotePatterns: [
        {
          protocol: 'https',
          hostname: 'welspun-cms.webmaffia.com',
          port: '', // Leave empty if there's no specific port
          pathname: '/**', // Match all paths
        },
      ],
    },
  };
  