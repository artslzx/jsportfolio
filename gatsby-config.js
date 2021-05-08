module.exports = {
  siteMetadata: {
    title: 'Artak',
    description:'web developer',
    author: 'artlets',
  },
  plugins: [
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'images',
        path: `${__dirname}/src/images`,
      },
    },
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: 'my-portfolio',
        short_name: 'my-portfolio',
        start_url: '/',
        background_color: '#663399',
        theme_color: '#663399',
        display: 'minimal-ui',
        icon: 'src/images/logo.png', // This path is relative to the root of the site.
      },
    },
    {
      resolve: 'gatsby-plugin-zopfli',
      options: {
        path: 'zopfli',
      },
    },
    'gatsby-plugin-linaria',
  ],
};
