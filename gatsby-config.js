module.exports = {
  siteMetadata: {
    title: `Filmódromo`,
  },
  plugins: [
    {
      resolve: "gatsby-source-filesystem",
      options:{
        name: `filmes`,
        path: `${__dirname}/filmes`,
      },
    },
    "gatsby-plugin-mdx"
  ],
}
