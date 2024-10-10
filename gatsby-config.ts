import type { GatsbyConfig } from "gatsby";

// module.exports = {
// 	flags: {
// 	  DEV_SSR: true
// 	},
// 	plugins: [...]
//   }

const config: GatsbyConfig = {
  siteMetadata: {
    title: `Travel Guide`,
    siteUrl: `https://www.yourdomain.tld`,
  },
  graphqlTypegen: true,
  plugins: [
    "gatsby-plugin-image",
    "gatsby-plugin-sharp",

    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: `blog`,
        path: `${__dirname}/blog`,
      },
    },
    "gatsby-plugin-mdx",
  ],
};

export default config;
