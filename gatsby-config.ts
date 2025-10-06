import type { GatsbyConfig } from "gatsby";

const config: GatsbyConfig = {
  siteMetadata: {
    title: `Personal Portfolio`,
    description: `A personal portfolio website built with Gatsby, TypeScript, and Tailwind CSS`,
    author: `@kouta-ozawa`,
    siteUrl: `https://your-domain.com`,
  },
  pathPrefix: `/htdocs`,
  assetPrefix: `/_assets`,
  graphqlTypegen: true,
  plugins: [
    `gatsby-plugin-typescript`,
    `gatsby-plugin-postcss`,
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    // {
    //   resolve: `gatsby-plugin-manifest`,
    //   options: {
    //     name: `Personal Portfolio`,
    //     short_name: `Portfolio`,
    //     start_url: `/`,
    //     background_color: `#663399`,
    //     display: `minimal-ui`,
    //     icon: `src/images/gatsby-icon.png`,
    //   },
    // },
  ],
};

export default config;