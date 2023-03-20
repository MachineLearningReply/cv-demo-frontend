module.exports = {
    
    images: {
      path: '',
      loader: 'akamai'
    },
    swcMinify: true,
    async redirects() {
        return [
          {
            source: '/blog',
            destination: '/',
            permanent: true,
          },
        ]
      },
};
