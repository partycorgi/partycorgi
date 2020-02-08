module.exports = {
  siteMetadata: {
    title: 'Party Corgi',
    description:
      "We're an inclusive community of content creators helping each other grow.",
    discordInviteUrl: 'https://discord.gg/S9Gdagv',
    siteUrl: 'https://partycorgi.com',
    image: '/images/ogImage.png'
  },
  plugins: [
    'gatsby-plugin-mdx',
    'gatsby-source-discord',
    'gatsby-plugin-theme-ui',
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: ['titillium web:400,500,700'],
        display: 'swap'
      }
    }
  ]
}
