// This is where project configuration and plugin options are located. 
// Learn more: https://gridsome.org/docs/config

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`
const path = require('path')

function addStyleResource (rule) {
  rule.use('style-resource')
    .loader('style-resources-loader')
    .options({
      patterns: [
        path.resolve(__dirname, './src/assets/sass/old.scss'),
        path.resolve(__dirname, './src/assets/sass/variables.scss'),
        path.resolve(__dirname, './src/assets/sass/global-styles.scss'),
        // path.resolve(__dirname, './src/assets/sass/*.scss'),
      ],
    })
}

module.exports = {
  chainWebpack (config) {
    // Load variables for all vue-files
    const types = ['vue-modules', 'vue', 'normal-modules', 'normal']
    
    types.forEach(type => {
      addStyleResource(config.module.rule('sass').oneOf(type))
    })

    // or if you use scss
    types.forEach(type => {
      addStyleResource(config.module.rule('scss').oneOf(type))
    })
	},

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
            typeName: "Testimonial",
            route: 'markers/v1/testimonial',
          },
          {
            typeName: "Aircraft",
            route: 'markers/v1/aircraft'
          },
          {
            typeName: "inventory",
            route: 'markers/v1/inventory'
          },
          {
            typeName: "Projects",
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
    ],
    Aircraft: [
      {
        path: (node) => {
          return `/aircraft/${node.post_name}`
        },
        component: './src/templates/Aircraft.vue'
      }
    ]
  }
}
