// This is where project configuration and plugin options are located. 
// Learn more: https://gridsome.org/docs/config

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

module.exports = {
  siteName: 'Gridsome',
  plugins: [
    {
      use: '@gridsome/source-wordpress',
      options: {
        baseUrl: 'https://hangar49.epiqk.ca', // required
        apiBase: 'wp-json',
        typeName: 'WordPress',
        perPage: 100,
        concurrent: 10,
        customEndpoints: [
          {
            typeName: "testimonial",
            route: 'markers/v1/testimonial'
          },
          {
            typeName: "aircraft",
            route: 'markers/v1/aircraft'
          },
          {
            typeName: "inventory",
            route: 'markers/v1/inventory'
          },
          {
            typeName: "projects",
            route: 'markers/v1/projects'
          }
        ]
      }
    }
  ],
  templates: {
    WordPressPost: [
      {
        path: (node) => {
          return `/news/${node.slug}`
        },
        component: './src/templates/WordPressPost.vue'
      }
    ]
  }
}
