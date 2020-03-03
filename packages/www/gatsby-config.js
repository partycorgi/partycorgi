module.exports = {
  siteMetadata: {
    title: 'Party Corgi Network',
    description:
      "An inclusive community of content creators helping each other grow.",
    discordInviteUrl: 'https://discord.gg/S9Gdagv',
    twitterImage: '/ogImage.png',
    twitterUsername: '@chrisbiscardi',
    siteUrl: 'https://partycorgi.com',
    image: '/ogImage.png'
  },
  plugins: [
    {
      resolve: `gatsby-plugin-mdx`,
      options: {
        extensions: [`.mdx`, `.md`],
      },
    },
    'gatsby-source-discord',
    'gatsby-plugin-theme-ui',
    'gatsby-plugin-layout',
    {
      resolve: 'gatsby-plugin-google-fonts',
      options: {
        fonts: ['titillium web:400,500,700'],
        display: 'swap'
      }
    }
  ]
}
