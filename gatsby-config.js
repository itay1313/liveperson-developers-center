const linkResolver = require("./src/utils/linkResolver");

module.exports = {
  siteMetadata: {
    title: "Liveperson new developers center test",
    description: "Learn how to integrate Prismic into your Gatsby project.",
  },
  plugins: [
    {
      resolve: "gatsby-source-prismic",
      options: {
        repositoryName: "liveperson-developers-center",
        linkResolver: () => (doc) => linkResolver(doc),
        schemas: {
          homepage: require("./custom_types/homepage.json"),
          navigation: require("./custom_types/navigation.json"),
          page: require("./custom_types/page.json"),
        },
      },
    },
    "gatsby-plugin-react-helmet",
    "gatsby-transformer-sharp",
    `gatsby-plugin-sass`,
    "gatsby-plugin-sharp",
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        icon: "src/images/favicon.png",
      },
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: "gatsby-plugin-google-fonts",
      options: {
        fonts: [`Roboto\:400,400,700,700i,900`, `Amiri\:400,400,700,700i`],
      },
    },
  ],
};
