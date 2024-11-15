// next.config.js
module.exports = {
    images: {
      remotePatterns: [
        {
          protocol: 'https',
          hostname: 'staging-cms.welspunflooring.com',
          port: '', // Leave empty if there's no specific port
          pathname: '/**', // Match all paths
        },
      ],
    },
  };
  