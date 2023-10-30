/**
 * 👋 Hey there!
 * This file is the starting point for your new WordPress/Gatsby site! 🚀
 * For more information about what this file is and does, see
 * https://www.gatsbyjs.com/docs/gatsby-config/
 *
 */

module.exports = {
  siteMetadata: {
    title: `Kind JM`,
    description: `Inspiring your thinking - 일상의 궁금함을 알아보고 공유하는 블로그`,
    author: `Kind JM`,
    siteUrl: `https://kindjm.com`,
    social: {
      twitter: ``,
      facebook: ``,
      github: `https://github.com/kindjm`,
      linkedin: ``,
      email: `jeminad2@gmail.com`
    },
  },  
  /**
   * Adding plugins to this array adds them to your Gatsby site.
   *
   * Gatsby has a rich ecosystem of plugins.
   * If you need any more you can search here: https://www.gatsbyjs.com/plugins/
   */
  plugins: [
    {
      resolve: 'gatsby-plugin-yoast-sitemap',
      options: {
        baseUrl: 'https://kindjm.mycafe24.com',
        gatsbyUrl:'https://kindjm.com'
      }
    },
    {
      resolve: 'gatsby-plugin-robots-txt',
      options: {
        sitemap: null,
        host: null,
        policy: [{userAgent: '*', allow: '/'}]
      }
    },    
    {
      /**
       * First up is the WordPress source plugin that connects Gatsby
       * to your WordPress site.
       *
       * visit the plugin docs to learn more
       * https://github.com/gatsbyjs/gatsby/blob/master/packages/gatsby-source-wordpress/README.md
       *
       */
      resolve: `gatsby-source-wordpress`,
      options: {
        // the only required plugin option for WordPress is the GraphQL url.
        url:
          process.env.WPGRAPHQL_URL ||
          `https://kindjm.mycafe24.com/graphql`,
      },
    },

    /**
     * We need this plugin so that it adds the "File.publicURL" to our site
     * It will allow us to access static url's for assets like PDF's
     *
     * See https://www.gatsbyjs.org/packages/gatsby-source-filesystem/ for more info
     */
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `assets`,
        path: `${__dirname}/content/assets`,
      },
    },

    /**
     * The following two plugins are required if you want to use Gatsby image
     * See https://www.gatsbyjs.com/docs/gatsby-image/#setting-up-gatsby-image
     * if you're curious about it.
     */
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-image`,
    {
      // See https://www.gatsbyjs.com/plugins/gatsby-plugin-manifest/?=gatsby-plugin-manifest
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Kind JM WordPress Blog`,
        short_name: `Kind JM`,
        start_url: `/`,
        background_color: `#ffffff`,  
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `content/assets/kindjm-icon.png`,
      },
    },

    // See https://www.gatsbyjs.com/plugins/gatsby-plugin-react-helmet/?=gatsby-plugin-react-helmet
    `gatsby-plugin-react-helmet`,

    /**
     * this (optional) plugin enables Progressive Web App + Offline functionality
     * To learn more, visit: https://gatsby.dev/offline
     */
    // `gatsby-plugin-offline`,
    {
      resolve: `gatsby-plugin-google-gtag`,
      options: {
        // You can add multiple tracking ids and a pageview event will be fired for all of them.
        trackingIds: [
          "G-XT1JLLB31J", // Google Analytics / GA
        ],
        // This object is used for configuration specific to this plugin
        pluginConfig: {
          // Puts tracking script in the head instead of the body
          head: true,
        },
      },
    },   
    {
      resolve: `gatsby-plugin-google-adsense`,
      options: {
        publisherId: `ca-pub-3629499401438446`
      },
    },       
    
    {
      resolve: `gatsby-plugin-addsocialshare-share`,
      options: {
        size: 32,
        providers:{"facebook":"Facebook","twitter":"Twitter","kakao":"Kakao","linkedin":"Linkedin","pinterest":"Pinterest","copylink":"Copy Link"},
        corners:"5%",
        //bgcolor:"#000000",
        interfacetype: "floating", //inline,floating
        topoffset: "30%", //work only floating interface
        id: ".ass_interface",
        alignment_desktop: "left", //left,right,hide
        alignment_mobile: "bottom", //top,bottom,hide
      },
    },
  ],
}
