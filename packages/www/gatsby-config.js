module.exports = {
  plugins: [
    'gatsby-plugin-mdx',
    'gatsby-source-discord',
    'gatsby-plugin-theme-ui',
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [
          'titillium web:400,500,700'
        ],
        display: 'swap'
      }
    },
  ],
};
