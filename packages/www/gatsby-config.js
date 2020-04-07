module.exports = {
  siteMetadata: {
    title: 'Party Corgi Network',
    description:
      "An inclusive community of content creators helping each other grow.",
    discordInviteUrl: 'https://discord.gg/S9Gdagv',
    twitterImage: '/ogImage.jpg',
    twitterUsername: '@chrisbiscardi',
    siteUrl: 'https://partycorgi.com',
    image: '/ogImage.jpg'
  },
  plugins: [
    {
      resolve: 'gatsby-plugin-mdx',
      options: {
        extensions: [`.mdx`, `.md`]
      }
    },
    'gatsby-source-discord',
    'gatsby-plugin-theme-ui',
    'gatsby-plugin-layout',
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-sharp',
    'gatsby-transformer-sharp',
    {
      resolve: 'gatsby-plugin-google-fonts',
      options: {
        fonts: ['titillium web:400,500,700'],
        display: 'swap'
      }
    }
  ]
}
